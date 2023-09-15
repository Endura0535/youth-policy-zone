import React from 'react'
import { Link } from 'react-router-dom'
import shinhanlogo from '../assets/images/shinhanlogo.png';
import youthimage from '../assets/images/youth.png';

function WelcomePage() {
  return (
    <div class="welcome-container">
      <div>
        <div class='brand'>
            <img src={shinhanlogo} alt="신한로고" class="logoimage"/>
            <div class="brand-letter">
              청<span class="sm-letter">년</span>정<span class="sm-letter">책</span>지역
            </div>
        </div>
        <div class='cover-image'>
            <img src={youthimage} alt="청년" class="youthimage"/>
        </div>
      </div>
      <Link to={`/auth`} style={{ textDecoration: 'none' }} class='welcome-btn'>
        <div className='primary-btn'>숨은 청년정책 찾으러 가기</div>
      </Link>
    </div>
  )
}

export default WelcomePage