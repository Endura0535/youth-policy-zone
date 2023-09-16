from fastapi import APIRouter
from services.policy import getPolicyInfo

router = APIRouter(
    prefix="/policy",
    tags=["policy"]
)


@router.post("/init")
async def getNewPolicyDate():
    # 정책 정보 가져 오기
    policyInfo = await getPolicyInfo()

    # TODO: vector db에 저장
    # await server.main.upsert(policyInfo)

    return policyInfo


@router.get("/test")
async def test():
    return "test"
