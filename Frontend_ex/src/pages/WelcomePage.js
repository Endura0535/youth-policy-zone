import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div>
      <Link to={`/auth`}>시작하기</Link>
      <div>WelcomePage</div>
    </div>
  )
}

export default WelcomePage