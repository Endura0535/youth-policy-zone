from typing import Optional
from pydantic import BaseModel

class MemberBase(BaseModel):
    age: int
    education: Optional[str] = None
    accountNo: str
    gender: Optional[str] = None
    jobStatus: Optional[str] = None
    memberId: Optional[str] = None
    memberPwd: Optional[str] = None
    name: Optional[str] = None
    residence: Optional[str] = None
    income: Optional[str] = None
    role: Optional[str] = None
