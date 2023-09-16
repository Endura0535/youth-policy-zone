from sqlalchemy.orm import Session

from database.model import alarmModel
from database.schema import alarmSchema


# 시작 알림 테이블에 삽입
def insertIntoStart(db: Session, alarm: alarmSchema.startAlarm):
    db_alarm = alarmModel.startAlarm(**alarm)
    db.add(db_alarm)
    db.commit()
    db.refresh(db_alarm)
    return db_alarm


# 리마인드 알림 테이블에 삽입
def insertIntoRemind(db: Session, alarm: alarmSchema.remindAlarm):
    db_alarm = alarmModel.remindAlarm(**alarm)
    db.add(db_alarm)
    db.commit()
    db.refresh(db_alarm)
    return db_alarm


# 추천 테이블에 삽입
def insertIntoRecommend(db: Session, alarm: alarmSchema.recommendPolicy):
    db_alarm = alarmModel.recommendPolicy(**alarm)
    db.add(db_alarm)
    db.commit()
    db.refresh(db_alarm)
    return db_alarm
