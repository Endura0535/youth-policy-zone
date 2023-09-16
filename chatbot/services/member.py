import os

import json
import requests
from dotenv import load_dotenv

import pandas as pd

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

    # TODO: DB에서 더미 데이터 가져오기
    allDetails = accountDetailCrud.getAllDetails(session, memberSeq)
    dictDetails = toDict(allDetails)

    df = pd.DataFrame.from_dict(dictDetails)
    df = pd.DataFrame.from_records(df)
    print(df)

    # TODO: 거주지 분석

    # TODO: 소득 분석

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
    return li