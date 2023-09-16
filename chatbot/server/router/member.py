from fastapi import APIRouter
from services.member import analyzeMember
from pydantic import BaseModel

router = APIRouter(
    prefix="/member",
    tags=["member"]
)


class Member(BaseModel):
    memberId: str


@router.post("/analyze")
def getMemberInfo(
        member: Member
):
    memberInfo = analyzeMember(member.memberId)
    return memberInfo
