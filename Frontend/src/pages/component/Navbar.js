import React from 'react'
import { Link } from 'react-router-dom'
import { useHome } from '../../HomeContext';


function Navbar() {
  const { setTabIdx } = useHome();

  return (
    <div className="home-navbar-container">
      <div className='navbar-button'>
        <button onClick={() => {setTabIdx(0)}}>추천정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setTabIdx(1)}}>전체정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setTabIdx(3)}}>찜한정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setTabIdx(4)}}>내 정보</button>
      </div>

    </div>
  )
}

export default Navbar