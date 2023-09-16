from fastapi import APIRouter
from services.member import analyzeMember

router = APIRouter(
    prefix="/member",
    tags=["member"]
)


@router.post("/analyze")
def getMemberInfo(
        memberId: str
):
    memberInfo = analyzeMember(memberId)
    return memberInfo
