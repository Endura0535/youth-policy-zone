import React from 'react'
import { useMember } from '../../MemberContext';

function RecommendationPolicyComponent() {
  const { memberInfo } = useMember();

  return (
    <div>
      <div>
        {memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.
      </div>
    </div>
  );
}

export default RecommendationPolicyComponent