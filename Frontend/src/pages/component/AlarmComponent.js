import React, { useEffect, useState } from 'react'
import { useMember } from '../../MemberContext';
import AlarmBoard from './alarmboard/AlarmBoard';

function RecommendationPolicyComponent() {
  const { memberInfo, apiClient } = useMember();
  const [ alarmList, setAlarmList ] = useState();

  useEffect(() => {
    apiClient.current.get(`/alarmbox`).then((res) => {
      console.log(res.data);
      setAlarmList(res.data.alarms);
    });
  }, []);

  return (
    <div>
        {/* 추천 정책의 헤더 역할 */}
        <div className='section-header shinhan-color'>내 알림</div>
        <div className='mg-top-sm'>{memberInfo.current.name.substring(1)}님, 알림을 놓치지 마세요.</div>
        {}
        <div>
          {/* <Board /> */}
          {alarmList !== undefined && <AlarmBoard alarmList={alarmList} />}
        </div>
    </div>
  );
}

export default RecommendationPolicyComponent