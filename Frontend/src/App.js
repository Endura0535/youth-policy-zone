import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import { MemberProvider } from './MemberContext'
import BankAccountAuthenticationPage from './pages/BankAccountAuthenticationPage'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/account-auth" element={<BankAccountAuthenticationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
    </BrowserRouter>
    )
  }
}



export default App