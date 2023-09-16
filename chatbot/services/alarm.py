from database import database
from database.crud import memberCrud, alarmCrud

engine = database.engineconn()
session = engine.sessionmaker()

members = memberCrud.getAllMembers(session)


# 새로운 정책에 적합한 사용자 탐색
def findMatchMember(policy):
    print(policy)

    # 전체 사용자 조회
    for member in members:
        if match(policy, member):
            print("match!!")
            # 상시 정책
            if policy['applicationEnd'] is None or policy['applicationEnd'].startswith('0000'):
                policy.applicationEnd == "9999-12-31"

            # 알림 시작 테이블에 넣기
            alarm = {
                "memberNo": member.memberNo,
                "policyNo": policy['id'],
            }
            alarmCrud.insertIntoStart(session, alarm)

            alarm["endDay"]: policy['applicationEnd']
            alarmCrud.insertIntoRecommend(session, alarm)

            del alarm["endDay"]
            alarm["startDt"]: policy['applicationStart']
            alarm["finishDt"]: policy['applicationEnd']
            alarm.insertIntoEnd(session, alarm)
        else:
            print("not matchㅠㅠ")
        print("================================================")


# 해당 사용자에게 추천할 수 있는지 보기
def match(policy, member):
    # 나이
    if not matchAge(policy['startAge'], policy['endAge'], member.age):
        return False

    # 지역
    if not matchLocation(policy['location'], member.residence):
        return False

    # TODO: 소득

    # TODO: 성별

    # TODO: 취업 상태

    # TODO: 교육상태

    return True


# 나이가 부합하는지 확인
def matchAge(policyStartAge, policyEndAge, memberAge):
    if policyStartAge is None or int(policyStartAge) > memberAge or int(policyEndAge) < memberAge:
        return False
    return True


def matchLocation(policyLoc, memberLoc):
    if policyLoc is None or not policyLoc == memberLoc:
        return False
    return True
