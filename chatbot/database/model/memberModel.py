from sqlalchemy import Column, BIGINT, INTEGER, CHAR, VARCHAR, Enum
from sqlalchemy.dialects.mssql import TINYINT
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Member(Base):
    __tablename__ = "member"

    memberNo = Column(BIGINT, primary_key=True)
    age = Column(TINYINT)
    education = Column(CHAR(1))
    accountNo = Column(CHAR(12), nullable=False)
    gender = Column(CHAR(1))
    jobStatus = Column(CHAR(1))
    memberId = Column(VARCHAR(20))
    memberPwd = Column(VARCHAR(255))
    name = Column(VARCHAR(5))
    residence = Column(VARCHAR(10))
    income = Column(INTEGER)
    role = Column(Enum)
