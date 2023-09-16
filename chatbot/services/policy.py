import requests
import bs4
import json
import re

import os
from dotenv import load_dotenv
from celery import Celery
from celery.schedules import crontab

from database.crud import policyCrud
from database import database
from services import korea, alarm


load_dotenv()

engine = database.engineconn()
session = engine.sessionmaker()

app = Celery()


@app.on_after_configure.connect()
def setup_daily_tasks(sender, **kwargs):
    # 매일 자정에 실행
    sender.add_periodic_task(
        crontab(hour=4, minute=54),
        getPolicyInfo(),
    )


# def getPolicy(id):
#     policyCrud.getPolicyByPolicyId(session, id)


async def getPolicyInfo():
    policyList = []

    # 청년정책 정보 api metadata
    URL = os.getenv('POLICY_URL')
    params = {
        'openApiVlak': os.getenv('POLICY_KEY'),
        'pageIndex': '1',
        'display': '1'
    }

    # DB에서 마지막 값 조회
    lastPolicy = policyCrud.getLastPolicyId(session)
    if lastPolicy is None:
        idx = 1
    else:
        idx = lastPolicy[0] + 1
    print(idx)

    # 청년정책 정보 수집 및 저장
    while True:
        policyInfo = {}

        # 청년정책 파라미터 변경 및 요청
        params['pageIndex'] = idx
        response = requests.get(URL, params=params)
        content = response.text

        # item tag 분리
        xml_obj = bs4.BeautifulSoup(content, 'lxml-xml')
        rows = xml_obj.findAll('youthPolicy')

        # 더 이상 정책이 없는 경우 종료
        # if idx == 20:
        if len(rows) == 0:
            break

        # 컬럼 값 조회
        columns = rows[0].find_all()
        metadata = {}
        for i in range(0, len(columns)):
            infoType = columns[i].name  # 정책 정보 유형
            val = columns[i].text  # 정책 데이터

            if infoType == 'rnum':  # row 번호
                policyInfo["id"] = val
                metadata['id'] = val
            elif infoType == 'polyBizSjnm':  # 정책명
                policyInfo['text'] = val
                metadata['name'] = val
            elif infoType == 'bizId':  # 정책 ID
                metadata['policyId'] = val
            elif infoType == 'polyItcnCn':  # 정책 소개
                metadata['policyDetail'] = val
            elif infoType == 'sporCn':  # 지원 내용
                metadata['supportContent'] = val
            elif infoType == 'sporScvl':  # 지원 규모
                metadata['supportScale'] = val
            elif infoType == 'bizPrdCn':  # 사업 운영 기간
                metadata['policyOperationPeriod'] = val
            elif infoType == 'rqutPrdCn':  # 사업 신청 기간
                info = classifyApplicationPeriod(val)
                metadata['applicationStart'] = info[0]
                metadata['applicationEnd'] = info[1]
            elif infoType == 'ageInfo':  # 연령 정보
                info = classifyAge(val)
                metadata['startAge'] = info[0]
                metadata['endAge'] = info[1]
            elif infoType == 'majrRqisCn':  # 전공 요건
                metadata['major'] = val
            elif infoType == 'empmSttsCn':  # 취업 상태
                metadata['employeedStatus'] = val
            elif infoType == 'splzRlmRqisCn':  # 특화 분야
                metadata['specialized'] = val
            elif infoType == 'accrRqisCn':  # 학력 요건
                metadata['academicAbility'] = val
            elif infoType == 'prcpCn':  # 거주지 및 소득 조건
                metadata['ResiIncomeCondition'] = val
            elif infoType == 'aditRscn':  # 추가 단서 사항
                metadata['additional'] = val
            elif infoType == 'prcpLmttTrgtCn':  # 참여 제한 대상
                metadata['restriction'] = val
            elif infoType == 'rqutProcCn':  # 신청 절차
                metadata['applicationProcedure'] = val
            elif infoType == 'pstnPaprCn':  # 제출 서류
                metadata['submissionDocuments'] = val
            elif infoType == 'jdgnPresCn':  # 심사 발표 내용
                metadata['judge'] = val
            elif infoType == 'rqutUrla':  # 신청 사이트 주소
                metadata['applicationURL'] = val
            elif infoType == 'rfcSiteUrla1':  # 참고 사이트 1
                metadata['referenceURL1'] = val
            elif infoType == 'rfcSiteUrla2':  # 참고 사이트 2
                metadata['referenceURL2'] = val
            elif infoType == 'mngtMson':  # 주관 부처명
                metadata['department'] = val
                metadata['location'] = korea.getResidence(list(val))

        policyInfo['metadata'] = metadata
        policyList.append(policyInfo)
        idx += 1

        # print("===================================")

        # metadata db에 저장
        policyCrud.createPolicy(session, metadata)
        # print(metadata)

        # 정책에 적합한 회원 탐색
        alarm.findMatchMember(metadata)

        # json 형태로 반환
        data = {
            "documents": policyList
        }
        policyJson = json.dumps(data, ensure_ascii=False).encode("utf-8")

    return policyJson.decode("utf-8")


# 신청 기간 구분
# yyyy-mm-dd 형태로 저장
# 상시 정책의 경우 0000-00-00
def classifyApplicationPeriod(periodInfo):
    periodInfo = re.sub(r'\([^)]*\)', '', periodInfo)  # 괄호 제거
    periodInfo = re.sub(r'\d{1,2}:\d{2}', '', periodInfo)  # HH:MM 형태 제거
    periodInfo = re.sub(r'[가-힣a-zA-Z]+', '', periodInfo)  # 한글, 영어 제거
    periodInfo = periodInfo.strip()  # 공백 제거

    startDate = endDate = "0000-00-00"

    dateRange = periodInfo.split('~')
    # print(dateRange)

    # 시작 일, 종료 일이 모두 있는 경우
    if len(dateRange) == 2:
        # 20230807~20231231 형태의 데이터
        match = re.search(r'\d{8}', dateRange[0])
        if match is not None:
            startDate = formatDate(dateRange[0][:4], dateRange[0][4:6], dateRange[0][6:])
            endDate = formatDate(dateRange[1][:4], dateRange[1][4:6], dateRange[1][6:])
            return [startDate, endDate]

        # 그 외의 다양한 데이터 형태
        year, month, day = findDateFormat(dateRange[0])
        if day == 0:
            day = 1
        startDate = formatDate(year, month, day)

        year, month, day = findDateFormat(dateRange[1])
        if day == 0:
            day = 31
        endDate = formatDate(year, month, day)

    # 시작일 또는 종료 일만 있는 경우
    elif len(dateRange) == 1:
        year, month, day = findDateFormat(dateRange[0])
        if day == 0:
            startDate = formatDate(year, month, 1)
            endDate = formatDate(year, month, 31)

    return [startDate, endDate]


# 날짜 형태 파악
def findDateFormat(date):
    # yyyy.mm.dd 형태
    match = re.search(r'(\d{4})[\s.~-](\d{1,2})[\s.~-](\d{1,2})[\s.~-]?', date)
    if match:
        return match.group(1), match.group(2), match.group(3)

    # yy.mm.dd 형태
    match = re.search(r'(\d{2})[\s.~-](\d{1,2})[\s.~-](\d{1,2})[\s.~-]?', date)
    if match:
        return "20" + match.group(1), match.group(2), match.group(3)

    # yyyy.mm 형태
    match = re.search(r'(\d{4})[\s.~-](\d{1,2})[\s.~-]?', date)
    if match:
        return match.group(1), match.group(2), 0

    # mm.dd 형태
    match = re.search(r'(\d{1,2})[\s.~-](\d{1,2})[\s.~-]?', date)
    if match:
        return 2023, match.group(1), match.group(2)

    # mm 형태
    match = re.search(r'(\d{1,2})[\s.~-]?', date)
    if match:
        return 2023, match.group(1), 0

    else:
        return 0, 0, 0


# 날짜 형태 지정
def formatDate(year, month, date):
    return f"{int(year):04d}-{int(month):02d}-{int(date):02d}"


# 연령 정보 구분
def classifyAge(ageInfo):
    # print(ageInfo)
    start = 0
    end = 99

    data = re.findall(r'\d+', ageInfo);

    # '만 19세 ~ 34세' 형태의 데이터
    if '~' in ageInfo:
        return data

    # '만 18세 이상' 형태의 데이터
    if '이상' in ageInfo:
        end = data[0]

    # '만 39세 미만' 형태의 데이터
    if '미만' in ageInfo:
        start = data[0]

    return [start, end]
