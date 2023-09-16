import React, { useEffect, useState } from 'react'
import { useMember } from '../../MemberContext';
import Board from './board/Board';

function RecommendationPolicyComponent() {
  const { memberInfo, apiClient } = useMember();
  // const [policies, setPolicies] = useState([]);
  const [recommendedPolicies, setRecommendedPolicies] = useState();

  useEffect(() => {
    // retrieveAllPolicies();
    retrieveRecommendedPolicies();
  }, []);

  const retrieveAllPolicies = async () => {
    const response = await apiClient.current.get('/policy/all');
  }

  const retrieveRecommendedPolicies = async () => {
    const response = await apiClient.current.post('/recommend', {
      page: 0,
      count: 100
    });
    setRecommendedPolicies(response.data.recommendPolicy);
  }

  return (
    <div className="mg-top-sm">
      {/* 추천 정책의 헤더 역할 */}
      <div className='section-header shinhan-color'>추천 정책</div>
      <div className='mg-top-sm'>{memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.</div>

      <div className="policy-container">
        {/* <Board policies={policies}/> */}
        {recommendedPolicies !== undefined && <Board policies={recommendedPolicies}/>}
      </div>
      
    </div>
  );
}

export default RecommendationPolicyComponent