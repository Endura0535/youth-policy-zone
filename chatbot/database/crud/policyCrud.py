from sqlalchemy.orm import Session

from database.model import policyModel
from database.schema import policySchema


# 정책 id로 조회
def getPolicyById(db: Session, id: int):
    return db.query(policyModel.Policy).filter(policyModel.Policy.id == id).first()


# 정책 고유번호로 조회
def getPolicyByPolicyId(db: Session, policyId: str):
    return db.query(policyModel.Policy).filter(policyModel.Policy.policyId == policyId).first()


# 새 정책 등록
def createPolicy(db: Session, policy: policySchema.PolicyBase):
    db_policy = policyModel.Policy(**policy)
    db.add(db_policy)
    db.commit()
    db.refresh(db_policy)
    return db_policy


# 마지막 정책의 id 가져오기
def getLastPolicyId(db: Session):
    return db.query(policyModel.Policy.id).order_by(policyModel.Policy.id.desc()).first()
