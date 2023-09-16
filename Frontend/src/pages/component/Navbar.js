import React from 'react'
import { Link } from 'react-router-dom'
import { useMember } from '../../MemberContext'
import { useHome } from '../../HomeContext';

function Navbar() {
  const { setNavIdx } = useHome();

  return (
    <div>
      <button onClick={() => {setNavIdx(0)}}>추천 정책</button>
      <button onClick={() => {setNavIdx(1)}}>전체 정책</button>
      <button onClick={() => {setNavIdx(2)}}>찜한 정책</button>
      <button onClick={() => {setNavIdx(3)}}>내 정보</button>
    </div>
  )
}

export default Navbar