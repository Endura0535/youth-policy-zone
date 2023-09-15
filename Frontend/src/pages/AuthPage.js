import React, { useEffect } from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup';
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';
import shinhanlogo from '../assets/images/shinhanlogo.png';
import './AuthPage.css'

import { CSSTransition } from 'react-transition-group';


function AuthPage() {
  const { setMemberInfo, tab, setTab} = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if(setMemberInfo()) navigate('/home');
  }, []);

  const handleToggle = () => {
    setTab(prevTab => (prevTab === 0 ? 1 : 0));
  };

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className='center'>
        <div className='brand'>
          <img src={shinhanlogo} alt="내 이미지" className="welcomelogo"/>
          <div className="brand-letter">
            청<span className="sm-letter">년</span>정<span className="sm-letter">책</span>지역
          </div>
        </div>
        <div>이곳은 청년 정책 지역, 청정지역입니다.</div>

        <div className="auth-toggle-container">
            <label className="switch btn-color-mode-switch">
                <input
                  value={tab}
                  id="color_mode"
                  name="color_mode"
                  type="checkbox"
                  onChange={handleToggle}
                />
                <label className="btn-color-mode-switch-inner" data-off="로그인" data-on="회원가입" htmlFor="color_mode"></label>
            </label>
        </div>
        {tab === 1 && <Signin />}
        {tab === 0 && <Signup />}
      </div>
    </CSSTransition>
  )
}

export default AuthPage