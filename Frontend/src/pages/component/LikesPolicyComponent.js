import React from 'react'
import { useMember } from '../../MemberContext';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
       {/* 찜한 정책의 헤더 역할 */}
       <div className='section-header shinhan-color'>찜한 정책</div>
        <div className='mg-top-sm'>
          {memberInfo.current.name.substring(1)}
          님의 정책 플레이리스트 
          <span role="img" aria-label="writing hand">🎵</span>
        </div>
    </div>
  );
}

export default RecommendationPolicyComponent