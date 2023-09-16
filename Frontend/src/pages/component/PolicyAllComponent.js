import React from 'react'
import { useMember } from '../../MemberContext';
import Board from './board/Board';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
      <div>
        전체 정책
      </div>
      <div>
        {memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.
      </div>
      <div>
        <input type="text" placeholder="검색어를 입력하세요."></input>
        <div>필터</div>
      </div>
      <Board />
    </div>
  );
}

export default RecommendationPolicyComponent