import React from 'react'
import '../HomePage.css';
import globelogo from '../../assets/images/globelogo.png';
import ypclogo from '../../assets/images/ypclogo.png';

function Header() {
  return (
    <div className='home-header-container'>
        <img src={globelogo} alt="신한로고" className="home-header-logo"/>
        <img src={ypclogo} alt="ypc로고" className="home-header-ypclogo"/>
    </div>
  );
}

export default Header