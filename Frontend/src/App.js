import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import { MemberProvider } from './MemberContext'
import BankAccountAuthenticationPage from './pages/BankAccountAuthenticationPage'
import BankAccountAuthenticationResultPage from './pages/BankAccountAuthenticationResultPage'
import { HomeProvider } from './HomeContext'
import PolicyDetail from './pages/component/PolicyDetail'
import ChatgptApi from './pages/component/chatgpt/ChatgptApi'
// React Icons

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <MemberProvider>
          <HomeProvider>
            <div className="main-container">
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/account-auth" element={<BankAccountAuthenticationPage />} />
                <Route path="/signup-result" element={<BankAccountAuthenticationResultPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/policy/:id" element={<PolicyDetail />} />
              </Routes>
            </div>
          </HomeProvider>
        </MemberProvider>
    </BrowserRouter>
    )
  }
}

export default App