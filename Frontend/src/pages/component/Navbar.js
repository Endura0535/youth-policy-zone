import React from 'react'
import { useHome } from '../../HomeContext';


function Navbar() {
  const { setNavIdx } = useHome();

  return (
    <div className="home-navbar-container">
      <div className='navbar-button'>
        <button onClick={() => {setNavIdx(0)}}>추천정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setNavIdx(1)}}>전체정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setNavIdx(2)}}>찜한정책</button>
      </div>

      <div className='navbar-button'>
        <button onClick={() => {setNavIdx(3)}}>내 정보</button>
      </div>

    </div>
  )
}

export default Navbar