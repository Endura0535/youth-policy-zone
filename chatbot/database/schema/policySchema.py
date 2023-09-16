from typing import Optional, List
from pydantic import BaseModel


class PolicyBase(BaseModel):
    id: int
    name: str
    policyId: str
    policyDetail: str
    supportContent: str
    supportScale: Optional[str] = None
    policyOperationPeriod: Optional[str] = None
    applicationStart: Optional[str] = None
    applicationEnd: Optional[str] = None
    startAge: Optional[int] = None
    endAge: Optional[int] = None
    major: Optional[str] = None
    employeedStatus: Optional[int] = None
    specialized: Optional[int] = None
    academicAbility: Optional[int] = None
    ResiIncomeCondition: Optional[int] = None
    additional: Optional[int] = None
    restriction: Optional[int] = None
    applicationProcedure: Optional[int] = None
    submissionDocuments: Optional[int] = None
    judge: Optional[int] = None
    applicationURL: Optional[int] = None
    referenceURL1: Optional[int] = None
    referenceURL2: Optional[int] = None
    department: Optional[int] = None

class Policy(PolicyBase):
    class Config():
        orm_mode = True