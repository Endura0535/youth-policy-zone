import React from 'react'
import { useMember } from '../../MemberContext';
import Board from './board/Board';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
      <Board />
    </div>
  );
}

export default RecommendationPolicyComponent