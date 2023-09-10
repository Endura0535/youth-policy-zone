import React from 'react'
import { Link } from 'react-router-dom'
import shinhanlogo from '../assets/images/shinhanlogo.png';

function WelcomePage() {
  return (
    <div>
      <img src={shinhanlogo} alt="내 이미지" class="welcomelogo"/>
      <Link to={`/auth`}><div class='primary-btn'>숨은 청년정책 찾으러 가기</div></Link>

        
    </div>
  )
}

export default WelcomePage