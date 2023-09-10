import React, { useState } from 'react'
import Signin from './component/Signin';
import Signup from './component/Signup';
import './AuthPage.css'

function AuthPage() {

  const [tab, setTabs] = useState(0);


  return (
    <div>
      <div>신한은행</div>
      <div>청년정책지역</div>
      <div>이곳은 청년 정책 지역, 청정지역입니다.</div>
      <div>
        <button onClick={() => setTabs(0)}>로그인</button>
        <button onClick={() => setTabs(1)}>회원가입</button>
      </div>
      {tab === 0 && <Signin />}
      {tab === 1 && <Signup />}
    </div>
  )
}

export default AuthPage