import React from 'react'
import { Link } from 'react-router-dom'
import { useMember } from '../../MemberContext'
import { useHome } from '../../HomeContext';

function Navbar() {
  const { setTabIdx } = useHome();

  return (
    <div>
      <button onClick={() => {setTabIdx(0)}}>추천 정책</button>
      <button onClick={() => {setTabIdx(1)}}>전체 정책</button>
      <button onClick={() => {setTabIdx(2)}}>찜한 정책</button>
      <button onClick={() => {setTabIdx(3)}}>내 정보</button>
    </div>
  )
}

export default Navbar