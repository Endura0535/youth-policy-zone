import requests, bs4, json, re

import os
from dotenv import load_dotenv

from database.crud import memberCrud
from database import database

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

    # TODO: 신한은행에서 거래 내역 가져오기 + 저장하기
    getAccountDetails(accountNo)

    # TODO: DB에서 더미 데이터 가져오기

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
    print(response.json()['dataBody']['거래내역'])

    return "inProgress"


# 사용자의 거래내역 더미 데이터 가져오기
async def getDummyData(
        accountNo: str
):

    return "inprogress"