import React, { useEffect } from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';

import RecommendationPolicyComponent from './component/RecommendationPolicyComponent';
import AlarmComponent from './component/AlarmComponent';
import LikesPolicyComponent from './component/LikesPolicyComponent';
import ProfileComponent from './component/ProfileComponent';

import { HomeProvider, useHome } from '../HomeContext';

import { CSSTransition } from 'react-transition-group';
import ChatgptApi from './component/chatgpt/ChatgptApi';

function HomePage() {
  const { navIdx } = useHome();
  const { memberInfo } = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if (memberInfo.current === null) {
      navigate("/");
      return;
    }
  }, [memberInfo, navigate]);

  return (
    <div>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        {memberInfo.current !== null ? (
          <div className="center">    
            <div className="header-container">
              <Header />
            </div>

          {/* 컨텐츠 컴포넌트 */}
          {navIdx === 0 && <RecommendationPolicyComponent />}
          {navIdx === 1 && <AlarmComponent />}
          {navIdx === 2 && <LikesPolicyComponent />}
          {navIdx === 3 && <ProfileComponent />}
          {navIdx === 4 && <ChatgptApi />}

          <div className='default-container-reverse'>
            <Navbar />
          </div>

        </div>
        ) : <></>}
      </CSSTransition>
    </div>
  );
}

export default HomePage