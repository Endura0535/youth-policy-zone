from sqlalchemy.orm import Session

from database.model import accountDetailModel
from database.schema import accountDetailSchema


# 새 거래내역 등록
def createAccountDetail(db: Session, accountDetail: accountDetailSchema.accountDetailBase):
    # print(accountDetail)
    db_detail = accountDetailModel.accountDetail(**accountDetail)
    db.add(db_detail)
    db.commit()
    db.refresh(db_detail)
    return db_detail


# 해당 사용자의 가장 마지막 거래내역 가져오기
def getLastDetail(db: Session, memberNo):
    detail = accountDetailModel.accountDetail
    return db.query(detail).order_by(detail.date.desc(), detail.time.desc()).filter(detail.memberNo == memberNo).first()