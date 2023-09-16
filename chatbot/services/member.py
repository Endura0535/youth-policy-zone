from database.crud import memberCrud
from database import database

from database.crud import memberCrud
from database import database

engine = database.engineconn()
session = engine.sessionmaker()

engine = database.engineconn()
session = engine.sessionmaker()


def analyzeMember(
        memberId: str
):
    # db에서 회원 계좌번호 가져오기
    accountNo = memberCrud.getAccountNo(session, memberId)
    print(accountNo.accountNo)

    # TODO: 신한은행에서 거래 내역 가져오기

    # TODO: DB에서 더미 데이이터 가져오기

    # TODO: 거주지 분석

    # TODO: 소득 분헉

    # TODO: db에 정보 넣기

    return "inProgress"
