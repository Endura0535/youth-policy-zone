import axios from 'axios';
import React, { useState } from 'react'
import { useMember } from '../../MemberContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const { succeededSignin, setMemberId } = useMember();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwVisibility, setPwVisibility] = useState({
    type: 'password',
    visible: false,
  });
  const [rememberId, setRememberId] = useState(false);
  const navigate = useNavigate();


  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  const onPwChanged = (e) => {
    setPw(e.target.value);
  }

  const handlePwVisibility = (e) => {
    setPwVisibility(() => {
      if (!pwVisibility.visible) {
        return {type: "text", visible: true};
      }
      else {
        return {type: "password", visible: false};
      }
    })
  }

  // 아이디 기억하기
  const handleRememberId = () => {
    setRememberId(!rememberId);
  }

  // 비밀번호 초기화
  const onClickForgotPw = () => {
    alert('비밀번호 초기화')
  }

  // 로그인 버튼 클릭
  const onClickSignin = () => {
    setMemberId(email);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
      "memberId": email,
      "password": pw,
    }).then((response) => {
      succeededSignin(response.data.token);
      navigate('/home');
    }).catch((err)=> {
      console.log(err);
      alert(err.response.data);
    });
  }

  return (
    <div>
        {/* 이메일 입력 */}
        <div class="input-container">
          <div><label htmlFor="email">이메일 주소</label></div>
          <input placeholder="Enter email" type="email" onChange={onEmailChanged} value={email} id="email"/>
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
        </div>

        {/* 비밀번호 입력 */}
        <div class="input-container">
          <div><label htmlFor="pw">비밀번호</label></div>
          <input placeholder="Enter password" type={pwVisibility.type} onChange={onPwChanged} value={pw} id="pw" />

          <span onClick={handlePwVisibility}>
            {/* <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg> */}
            {pwVisibility.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          </span>
        </div>

        <div>
          <label htmlFor='rememberId'>
            <input type="checkbox" onChange={handleRememberId} value={rememberId} id="rememberId"/>
            아이디 기억하기
          </label>
          <br />
          <span onClick={onClickForgotPw}>비밀번호를 잊어버렸나요?</span>
        </div>

        {/* 로그인 버튼 */}
        <button onClick={onClickSignin} class='primary-btn'>로그인</button>
    </div>
  )
}

export default Signin