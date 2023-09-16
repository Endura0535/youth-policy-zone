import React from 'react'
import { useMember } from '../../MemberContext';

function RecommendationPolicyComponent() {
  const { doSignout } = useMember();
  const { memberInfo } = useMember();

  return (
    <div>
      {/* 내 정보의 헤더 역할 */}
      <div className='section-header shinhan-color mg-top-sm'>내 정보</div>
      <div className='mg-top-sm'>{memberInfo.current.name.substring(1)}님의 소중한 개인정보입니다.</div>


      <div class="tag__card mg-top-bg">
        <div class="card__tags">
          <ul class="tag">
            <li class="tag__name">JS</li>
            <li class="tag__name">wordpress</li>
            <li class="tag__name">uiverse</li>
            <li class="tag__name">Css</li>
            <li class="tag__name">html</li>
            <li class="tag__name">go</li>
            <li class="tag__name">java</li>
            <li class="tag__name">ux/ui</li>
            <li class="tag__name">figma</li> 
          </ul>
        </div>
      </div>
      
      <button className='primary-btn mg-top-bg'>내 정보 수정</button>
      <button onClick={doSignout} className='primary-btn mg-top-bg'>로그아웃</button>

    </div>
  );
}

export default RecommendationPolicyComponent