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
    policyDetail = Column(VARCHAR(255), nullable=False)
    supportContent = Column(VARCHAR(255), nullable=False)
    supportScale = Column(VARCHAR(255), nullable=True)
    policyOperationPeriod = Column(VARCHAR(255), nullable=True)
    applicationStart = Column(CHAR(10), nullable=True)
    applicationEnd = Column(CHAR(10), nullable=True)
    startAge = Column(TINYINT, nullable=True)
    endAge = Column(TINYINT, nullable=True)
    major = Column(VARCHAR(255), nullable=True)
    employeedStatus = Column(VARCHAR(255), nullable=True)
    specialized = Column(VARCHAR(255), nullable=True)
    academicAbility = Column(VARCHAR(255), nullable=True)
    ResiIncomeCondition = Column(TEXT, nullable=True)
    additional = Column(VARCHAR(255), nullable=True)
    restriction = Column(VARCHAR(255), nullable=True)
    applicationProcedure = Column(VARCHAR(255), nullable=True)
    submissionDocuments = Column(VARCHAR(255), nullable=True)
    judge = Column(VARCHAR(255), nullable=True)
    applicationURL = Column(VARCHAR(100), nullable=True)
    referenceURL1 = Column(VARCHAR(100), nullable=True)
    referenceURL2 = Column(VARCHAR(100), nullable=True)
    department = Column(VARCHAR(50), nullable=True)