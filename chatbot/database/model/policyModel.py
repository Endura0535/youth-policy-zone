from sqlalchemy import SMALLINT, Column, VARCHAR, CHAR, TEXT
from sqlalchemy.dialects.mssql import TINYINT
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


# Base를 상속 받아 사용
class Policy(Base):
    __tablename__ = "policy"

    id = Column(SMALLINT, nullable=False, primary_key=True)
    name = Column(VARCHAR(50), nullable=False)
    policyId = Column(CHAR(14), nullable=False)
    policyDetail = Column(TEXT, nullable=False)
    supportContent = Column(TEXT, nullable=False)
    supportScale = Column(TEXT, nullable=True)
    policyOperationPeriod = Column(VARCHAR(255), nullable=True)
    applicationStart = Column(CHAR(10), nullable=True)
    applicationEnd = Column(CHAR(10), nullable=True)
    startAge = Column(TINYINT, nullable=True)
    endAge = Column(TINYINT, nullable=True)
    major = Column(VARCHAR(255), nullable=True)
    employeedStatus = Column(TEXT, nullable=True)
    specialized = Column(TEXT, nullable=True)
    academicAbility = Column(TEXT, nullable=True)
    ResiIncomeCondition = Column(TEXT, nullable=True)
    additional = Column(TEXT, nullable=True)
    restriction = Column(TEXT, nullable=True)
    applicationProcedure = Column(TEXT, nullable=True)
    submissionDocuments = Column(TEXT, nullable=True)
    judge = Column(TEXT, nullable=True)
    applicationURL = Column(VARCHAR(255), nullable=True)
    referenceURL1 = Column(VARCHAR(255), nullable=True)
    referenceURL2 = Column(VARCHAR(255), nullable=True)
    department = Column(VARCHAR(50), nullable=True)
    location = Column(VARCHAR(10), nullable=True)
