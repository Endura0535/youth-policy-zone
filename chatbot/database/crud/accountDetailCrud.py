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
