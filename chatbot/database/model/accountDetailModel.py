from sqlalchemy import Column, BIGINT, INTEGER, CHAR, VARCHAR, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

from database.model import memberModel

Base = declarative_base()


class accountDetail(Base):
    __tablename__ = "accountDetail"

    seq = Column(BIGINT, primary_key=True, autoincrement=True)
    memberNo = Column(BIGINT, ForeignKey(memberModel.Member.memberNo))
    date = Column(CHAR(8))  # 거래 일자
    time = Column(CHAR(8))  # 거래 시간
    state = Column(VARCHAR(10))  # 적요
    withdraw = Column(INTEGER)  # 출금 금액
    deposit = Column(INTEGER)  # 입금 금액
    content = Column(VARCHAR(20))  # 내용
    balance = Column(INTEGER)  # 잔액
    ctype = Column(CHAR(1))  # 입지 구분
    dname = Column(VARCHAR(20))  # 거래점명
