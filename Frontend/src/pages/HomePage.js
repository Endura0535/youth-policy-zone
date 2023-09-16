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

import { CSSTransition } from 'react-transition-group';

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
  }, [memberInfo, navigate]);

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      {memberInfo.current !== null && (
        <div className='center'>

          <div className='default-container'>
            <Header />
          </div>

          {/* 컨텐츠 컴포넌트 */}
          {navIdx === 0 && <RecommendationPolicyComponent />}
          {navIdx === 1 && <PolicyAllComponent />}
          {navIdx === 2 && <LikesPolicyComponent />}
          {navIdx === 3 && <ProfileComponent />}

          <div className='default-container-reverse'>
            <Navbar />
          </div>
        </div>
      )}
    </CSSTransition>
  );
}

export default HomePage