import React from 'react'
import { Link } from 'react-router-dom'
import { useMember } from '../../MemberContext'

function Navbar() {
  const { doSignout } = useMember();

  return (
    <div>
      <div><Link to={`/`}>Welcome</Link></div>
      <div><Link to={`/home`}>홈</Link></div>
      <div><Link to={`/profile`}>profile</Link></div>
      <div><button onClick={doSignout}>로그아웃</button></div>
    </div>
  )
}

export default Navbar