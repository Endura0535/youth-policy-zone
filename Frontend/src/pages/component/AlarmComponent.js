import React from 'react'
import { useMember } from '../../MemberContext';
import Board from './board/Board';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
        {/* 추천 정책의 헤더 역할 */}
        <div className='section-header shinhan-color'>내 알림</div>
        <div className='mg-top-sm'>{memberInfo.current.name.substring(1)}님, 알림을 놓치지 마세요.</div>

        <div>
          {/* <Board /> */}
        </div>
    </div>
  );
}

export default RecommendationPolicyComponent