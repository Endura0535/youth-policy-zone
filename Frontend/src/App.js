import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import { MemberProvider } from './MemberContext'
import BankAccountAuthenticationPage from './pages/BankAccountAuthenticationPage'

function App() {
  return (
    <BrowserRouter>
      <MemberProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/account-auth" element={<BankAccountAuthenticationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </MemberProvider>
    </BrowserRouter>
  )
}

export default App