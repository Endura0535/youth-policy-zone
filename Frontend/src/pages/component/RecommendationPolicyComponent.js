import React, { useEffect, useState } from 'react'
import { useMember } from '../../MemberContext';
import Board from './board/Board';

function RecommendationPolicyComponent() {
  const { memberInfo, apiClient } = useMember();
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    retrieveAllPolicies();
  }, []);

  const retrieveAllPolicies = async () => {
    const response = await apiClient.current.get('/policy/all');
    console.log(response.data.policy);
    setPolicies(response.data.policy);
  }

  return (
    <div>
      {/* 추천 정책의 헤더 역할 */}
      <div className='section-header shinhan-color'>추천 정책</div>
      <div className='mg-top-sm'>{memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.</div>

      <Board policies={policies}/>
    </div>
  );
}

export default RecommendationPolicyComponent