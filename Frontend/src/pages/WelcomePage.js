import React from 'react'
import { Link } from 'react-router-dom'
import shinhanlogo from '../assets/images/shinhanlogo.png';

function WelcomePage() {
  return (
    <div>
      <div class='brand yflex'>
        <img src={shinhanlogo} alt="내 이미지" class="welcomelogo"/>
        <div class="brand-letter">
          청<span class="sm-letter">년</span>정<span class="sm-letter">책</span>지역
        </div>
      </div>
      <Link to={`/auth`}><div class='primary-btn'>숨은 청년정책 찾으러 가기</div></Link>

        
    </div>
  )
}

export default WelcomePage