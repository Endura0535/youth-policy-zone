from fastapi import APIRouter
from services.policy import getPolicyInfo
import server.main

router = APIRouter(
    prefix="/policy",
    tags=["policy"]
)


@router.post("/init")
async def getNewPolicyDate():
    policyInfo = await getPolicyInfo()
    # await server.main.upsert(policyInfo)
    return policyInfo
