from sqlalchemy import SMALLINT, BIGINT, DATE, VARCHAR, CHAR, Column, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

from database.model import memberModel, policyModel

Base = declarative_base()


class startAlarm(Base):
    __tablename__ = "start_alarm"

    startAlarmNo = Column(BIGINT, primary_key=True)
    memberNo = Column(BIGINT, ForeignKey(memberModel.Member.memberNo), nullable=False)
    policyNo = Column(SMALLINT, ForeignKey(policyModel.Policy.policyId), nullable=False)


class remindAlarm(Base):
    __tablename__ = "remind_alarm"

    remindAlarmNo = Column(BIGINT, primary_key=True)
    memberNo = Column(BIGINT, ForeignKey(memberModel.Member.memberNo), nullable=False)
    policyNo = Column(SMALLINT, ForeignKey(policyModel.Policy.policyId), nullable=False)
    finishDt = Column(CHAR(10))
    startDt = Column(CHAR(10))


class recommendPolicy(Base):
    __tablename__ = "recommend_policy"

    recommendPolicyNo = Column(BIGINT, primary_key=True)
    memberNo = Column(BIGINT, ForeignKey(memberModel.Member.memberNo), nullable=False)
    policyNo = Column(SMALLINT, ForeignKey(policyModel.Policy.policyId), nullable=False)
    endDay = Column(VARCHAR(255))
