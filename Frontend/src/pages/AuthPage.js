import React, { useEffect } from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup';
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';
import shinhanlogo from '../assets/images/shinhanlogo.png';
import './AuthPage.css'

import { CSSTransition } from 'react-transition-group';


function AuthPage() {
  const { memberInfo, tab, setTab} = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if (memberInfo.current !== null) {
      navigate("/home");
      return;
    }
    setTab(0);
  }, []);

  const handleToggle = () => {
    setTab(prevTab => (prevTab === 0 ? 1 : 0));
  };

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className='auth-container'>
        <div className='brand'>
          <img src={shinhanlogo} alt="신한로고" className="logoimage"/>
          <div className="brand-letter">
            청<span className="sm-letter">년</span>정<span className="sm-letter">책</span>지역
          </div>
      </div>
        <div className='mg-top-sm'>이곳은 청년 정책 지역, 청정지역입니다.</div>

        <div className="auth-toggle-container mg-top-bg">
            <label className="switch btn-color-mode-switch">
                <input
                  value={tab}
                  id="color_mode"
                  name="color_mode"
                  type="checkbox"
                  onChange={handleToggle}
                  checked={tab}
                />
                <label className="btn-color-mode-switch-inner" data-off="로그인" data-on="회원가입" htmlFor="color_mode"></label>
            </label>
        </div>
        {tab === 0 && <Signin />}
        {tab === 1 && <Signup />}
      </div>
    </CSSTransition>
  )
}

export default AuthPage