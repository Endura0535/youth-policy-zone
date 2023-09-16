import React from 'react'
import { useMember } from '../../MemberContext';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
      <div>
        찜한 정책
      </div>
    </div>
  );
}

export default RecommendationPolicyComponent