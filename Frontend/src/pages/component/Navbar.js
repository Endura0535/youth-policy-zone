import React from 'react'
import { useHome } from '../../HomeContext';
import recommend from '../../assets/images/recommend.png';
import alarm from '../../assets/images/alarm.png';
import like from '../../assets/images/like.png'
import profile from '../../assets/images/profile.png'

function Navbar() {
  const { setNavIdx } = useHome();

  return (
    <div>
        <div className="home-navbar-container">
          <button className="navbar-button" onClick={() => {setNavIdx(0)}}>
            <img src={recommend} alt="추천 이미지" />
          </button>

          <button className="navbar-button" onClick={() => {setNavIdx(1)}}>
            <img src={alarm} alt="추천 이미지" />
          </button>

          <button className="navbar-button" onClick={() => {setNavIdx(2)}}>
            <img src={like} alt="추천 이미지" />
          </button>

          <button className="navbar-button" onClick={() => {setNavIdx(3)}}>
            <img src={profile} alt="추천 이미지" />
          </button>
          <button className="navbar-button" onClick={() => {setNavIdx(4)}}>
            챗봇
          </button>
        </div>

        <div className="home-navbar-description-container mg-top-sm">
           <p>추천 정책</p>
           <p>내 알림</p>
           <p>찜한 정책</p>
           <p>내 정보</p>
        </div>
    </div>
  )
}

export default Navbar