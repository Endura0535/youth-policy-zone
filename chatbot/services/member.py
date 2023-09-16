import os

import json
import requests
from dotenv import load_dotenv

import pandas as pd

from konlpy.tag import Okt
from collections import Counter

from database import database
from database.crud import memberCrud, accountDetailCrud

load_dotenv()

engine = database.engineconn()
session = engine.sessionmaker()


def analyzeMember(
        memberId: str
):
    # db에서 회원 계좌번호 가져오기
    member = memberCrud.getAccountNo(session, memberId)
    accountNo = member.accountNo
    memberSeq = member.memberNo

    # TODO: 주석 지우기
    # # 신한은행에서 거래 내역 가져오기
    # accountDetail = getAccountDetails(accountNo)
    #
    # # 신한 은행 거래 내역 DB에 저장하기
    lastTrans = accountDetailCrud.getLastDetail(session, memberSeq)
    #
    # for detail in accountDetail:
    #     # 가장 최근 거래일자와 비교
    #     if lastTrans is not None:
    #         if (lastTrans.date > detail["거래일자"]) or (lastTrans.date == detail["거래일자"] and lastTrans.time >= detail["거래시간"]):
    #             continue
    #     insertDetail(detail, memberSeq)

    # DB에서 더미 데이터 가져오기
    allDetails = accountDetailCrud.getAllDetails(session, memberSeq)
    dictDetails, contents = toDict(allDetails)

    df = pd.DataFrame.from_dict(dictDetails)
    df = pd.DataFrame.from_records(df)
    # print(df)

    # 소득 분석
    salary = getSalary(df)
    # print(salary)

    # 거주지 분석
    residence = getResidence(contents)
    # print(residence)

    # TODO: db에 정보 넣기

    return "inProgress"


# 계좌 번호를 통해 계좌 내역 조회
def getAccountDetails(
    accountNo: str
):
    # request 요청 생성
    URL = os.getenv("SHINHAN_URL")
    data = {
        'dataHeader': {
            'apikey': os.getenv('SHINHAN_KEY')
        },
        'dataBody': {
           '계좌번호': accountNo
        }
    }

    response = requests.post(URL, data=json.dumps(data))
    # print(response.json()['dataBody']['거래내역'])

    return response.json()['dataBody']['거래내역']


# 각각의 거래 내역 db에 넣기
def insertDetail(detail, memberSeq):
    data = {
        "memberNo": memberSeq,
        "date": detail["거래일자"],
        "time": detail["거래시간"],
        "state": detail["적요"],
        "withdraw": detail["출금금액"],
        "deposit": detail["입금금액"],
        "content": detail["내용"],
        "balance": detail["잔액"],
        "ctype": detail["입지구분"],
        "dname": detail["거래점명"]
    }
    accountDetailCrud.createAccountDetail(session, data)


# model to dictionary
def toDict(datails):
    li = []
    contents=[]
    for detail in datails:
        dict = {}
        dict["date"] = detail.date
        dict["time"] = detail.time
        dict["state"] = detail.state
        dict["withdraw"] = detail.withdraw
        dict["deposit"] = detail.deposit
        dict["content"] = detail.content
        dict["balance"] = detail.balance
        dict["ctype"] = detail.ctype
        dict["dname"] = detail.dname
        li.append(dict)

        contents.append(detail.content)
    return li, contents


# 거래내역에서 소득 정보 분석
# 입금금액과 거래내역의 쌍이 가장 많이 반복되는 것을 급여로 파악
def getSalary(df):
    # 입금 내역 추출
    dfIncome = df.loc[(df.ctype == "1"),]
    # 가장 많은 내용 추출
    countIncome = dfIncome.pivot_table(index=['deposit', 'content'], aggfunc='size', sort=True).to_frame()
    lastRow = countIncome.iloc[-1]
    return lastRow[:0].name[0] * 12


# 거주지 분석
# 거래 내역의 토큰(역삼, 강남 등)으로 거주지 분석
def getResidence(contents):
    korea = getKoreaData()

    okt = Okt()
    li = []
    for content in contents:
        li.extend(okt.nouns(content))
    count = Counter(li)
    df = pd.DataFrame(count, index=[0]).transpose()
    df = df.sort_values(by=[0], ascending=False)

    return getMostFrequent(korea, df.index.values)


# 한국 행정 구역 가져오기
def getKoreaData():
    data = pd.read_csv('csv/data_korea.csv')
    return data[['shortName', '광역시도']].values.tolist()


# 주로 거래하는 구역 가져오기
def getMostFrequent(korea, values):
    for value in values:
        for datum in korea:
            if value in datum[0]:
                return datum[1]
