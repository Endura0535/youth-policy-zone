from sqlalchemy.orm import Session

from database.model import memberModel
from database.schema import memberSchema


# 회원 id로 계좌번호 조회
def getAccountNo(db: Session, id: str):
    return db.query(memberModel.Member).filter(memberModel.Member.memberId == id).first()


# 회원 거주지, 소득 정보
def updateMemberInfo(db: Session, seq: int, residence:str, income: int):
    member = db.query(memberModel.Member).filter(memberModel.Member.memberNo == seq).first()
    member.residence = residence
    member.income = income
    db.add(member)
    db.commit()


# 전체 회원 조회
def getAllMembers(db: Session):
    return db.query(memberModel.Member).all()

