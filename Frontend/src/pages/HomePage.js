import React, { useEffect } from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';
import RecommendationPolicyComponent from './component/RecommendationPolicyComponent';
import LikesPolicyComponent from './component/LikesPolicyComponent';
import PolicyAllComponent from './component/PolicyAllComponent';
import ProfileComponent from './component/ProfileComponent';
import { HomeProvider, useHome } from '../HomeContext';

function HomePage() {
  const { navIdx } = useHome();
  const { memberInfo } = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if (memberInfo.current === null) {
      console.log('home: memberInfo.current is null');
      navigate("/");
      return;
    }
    console.log('home: memberInfo.current is not null');
  }, []);

  return (
    <div>
      {memberInfo.current !== null && (
        <div>
          <Header />
          
          {/* 컨텐츠 컴포넌트 */}
          {navIdx === 0 && <RecommendationPolicyComponent />}
          {navIdx === 1 && <PolicyAllComponent />}
          {navIdx === 2 && <LikesPolicyComponent />}
          {navIdx === 3 && <ProfileComponent />}
          
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default HomePage