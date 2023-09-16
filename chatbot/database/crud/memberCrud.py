from sqlalchemy.orm import Session

from database.model import memberModel
from database.schema import memberSchema


# 회원 id로 계좌번호 조회
def getAccountNo(db: Session, id: str):
    return db.query(memberModel.Member).filter(memberModel.Member.memberId == id).first()

