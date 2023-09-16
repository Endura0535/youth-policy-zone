import React from 'react'
import { Link } from 'react-router-dom'
import shinhanlogo from '../assets/images/shinhanlogo.png';
import youthimage from '../assets/images/youth.png';

function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className='brand'>
          <img src={shinhanlogo} alt="신한로고" className="logoimage"/>
          <div className="brand-letter">
            청<span className="sm-letter">년</span>정<span className="sm-letter">책</span>지역
          </div>
      </div>
      <div className='cover-image'>
          <img src={youthimage} alt="청년" className="youthimage"/>
      </div>

      <Link to={`/auth`} style={{ textDecoration: 'none' }} className='instant-extend'>
        <div className='primary-btn'>숨은 청년정책 찾으러 가기</div>
      </Link>
    </div>
  )
}

export default WelcomePage