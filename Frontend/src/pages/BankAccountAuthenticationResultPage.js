import React from "react";
import { Link, useLocation } from "react-router-dom";
import complete from '../assets/images/complete.png';


function BankAccountAuthenticationPage() {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div className='default-container'>
      <div className='auth-result-header mg-top-bg'>
        감사합니다. <br />
        인증이 <span className='shinhan-color'>완료</span>되었습니다.
      </div>

      <div>
        <img src={complete} alt="완료" className="complete"/>
      </div>

      <div className="info-card center">
        <p>
          이제 <span className="shinhan-color">{name}</span>님께서 바로 지원 가능한 청년 정책 정보를 추천받고,
          까먹지 않고 신청할 수 있도록 알림을 받으러 가볼까요?
        </p>
      </div>

      <Link to={`/auth`} style={{ textDecoration: 'none' }} className='instant-extend-two mg-top-bg'>
        <div className='primary-btn'>숨은 청년정책 찾으러 가기</div>
      </Link>
    </div>
  );
}

export default BankAccountAuthenticationPage;
