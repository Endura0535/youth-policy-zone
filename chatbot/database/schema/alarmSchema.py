from typing import Optional
from pydantic import BaseModel


class startAlarm(BaseModel):
    memberNo: int
    policyNo: int


class remindAlarm(BaseModel):
    memberNo: int
    policyNo: int
    finishDt: Optional[str] = None
    startDt: Optional[str] = None


class recommendPolicy(BaseModel):
    memberNo: int
    policyNo: int
    endDay: Optional[str] = None

