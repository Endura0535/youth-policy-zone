import requests
import bs4
import json
import re


async def getPolicyInfo():
    policyList = []

    # 청년정책 정보 api metadata
    URL = "https://www.youthcenter.go.kr/opi/youthPlcyList.do"
    params = {
        'openApiVlak': 'fcbb6f9bfa03c6cee91bf7dd',
        'pageIndex': '1',
        'display': '100'
    }
    idx = 1

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
        if idx == 2:
            # if len(rows) == 0:
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
                metadata['applicationPeriod'] = val
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

        policyInfo['metadata'] = metadata
        policyList.append(policyInfo)
        idx += 1

        # json 형태로 반환
        data = {
            "documents": policyList
        }
        policyJson = json.dumps(data, ensure_ascii=False).encode("utf-8")

    return policyJson.decode("utf-8")


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

    # print(start)
    # print(end)

    return [start, end]
