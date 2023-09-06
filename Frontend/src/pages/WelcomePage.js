import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div>
      <Link to={`/home`}>Home</Link>
      <div>WelcomePage</div>
    </div>
  )
}

export default WelcomePage