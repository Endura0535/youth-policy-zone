import axios from 'axios';
import React, { useState } from 'react'
import { useMember } from '../../MemberContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const { succeededSignin, setMemberId, email, pw, pwVisibility,
    onEmailChanged, onPwChanged, handlePwVisibility
  } = useMember();
  const [rememberId, setRememberId] = useState(false);
  const navigate = useNavigate();

  // 아이디 기억하기
  const handleRememberId = () => {
    setRememberId(!rememberId);
  }

  // 비밀번호 초기화
  const onClickForgotPw = () => {
    alert('비밀번호 초기화')
  }

  // 로그인 버튼 클릭
  const onClickSignin = async () => {
    setMemberId(email);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
      "memberId": email,
      "password": pw,
    });
    
    await succeededSignin(response.data.token);
      
    navigate('/home');
  }

  return (
    <div>
        {/* 이메일 입력 */}
        <div className="input-container mg-top-bg">
          <div><label htmlFor="email">이메일 주소</label></div>
          <input placeholder="Enter email" type="email" onChange={onEmailChanged} value={email} id="email"/>
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-container mg-top-sm">
          <div><label htmlFor="pw">비밀번호</label></div>
          <input placeholder="Enter password" type={pwVisibility.type} onChange={onPwChanged} value={pw} id="pw" />

          <span onClick={handlePwVisibility} className='hidepassword'>
            {pwVisibility.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          </span>
        </div>

        <div className='signin-options'>
          <label htmlFor='rememberId' className='rememberId'>
            <input type="checkbox" onChange={handleRememberId} value={rememberId} id="rememberId"/>
            아이디 기억하기
          </label>
          <br />
          <span onClick={onClickForgotPw} className='forgotPw'>비밀번호를 잊어버렸나요?</span>
        </div>

        {/* 로그인 버튼 */}
        <button onClick={onClickSignin} className='primary-btn mg-top-bg'>로그인</button>
    </div>
  )
}

export default Signin