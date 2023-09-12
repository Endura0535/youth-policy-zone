import React, { useEffect } from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup';
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';
import shinhanlogo from '../assets/images/shinhanlogo.png';
import './AuthPage.css'

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
    <div class='center'>
      <div class='brand yflex'>
        <img src={shinhanlogo} alt="내 이미지" class="welcomelogo"/>
        <div class="brand-letter">
          청<span class="sm-letter">년</span>정<span class="sm-letter">책</span>지역
        </div>
      </div>
      <div>이곳은 청년 정책 지역, 청정지역입니다.</div>

      <div class="auth-toggle-container">
          <label class="switch btn-color-mode-switch">
              <input
                value={tab}
                id="color_mode"
                name="color_mode"
                type="checkbox"
                onChange={handleToggle}
              />
              <label class="btn-color-mode-switch-inner" data-off="로그인" data-on="회원가입" for="color_mode"></label>
          </label>
      </div>

      <div>
        <button onClick={() => setTab(0)}>로그인</button>
        <button onClick={() => setTab(1)}>회원가입</button>
      </div>
      {tab === 0 && <Signin />}
      {tab === 1 && <Signup />}
    </div>
  )
}

export default AuthPage