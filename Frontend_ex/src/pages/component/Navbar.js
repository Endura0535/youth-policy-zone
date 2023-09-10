import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div><Link to={`/`}>Welcome</Link></div>
      <div><Link to={`/home`}>홈</Link></div>
      <div><Link to={`/profile`}>profile</Link></div>
    </div>
  )
}

export default Navbar