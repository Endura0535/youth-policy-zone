import React from 'react'
import { useMember } from '../../MemberContext';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
      <div>
        내 정보
      </div>
    </div>
  );
}

export default RecommendationPolicyComponent