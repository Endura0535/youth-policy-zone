import React, { useEffect } from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

function HomePage() {
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

          <div>
            {memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.
          </div>

          <div className='default-container-reverse'>
            <Navbar />
          </div>
        </div>
      )}
    </CSSTransition>
  );
}

export default HomePage