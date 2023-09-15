import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMember } from '../MemberContext';
import BankAccountAuthenticationRequest from './component/BankAccountAuthenticationRequest';
import BankAccountAuthenticationResponse from './component/BankAccountAuthenticationResponse';
import './BankAccountAuthentication.css'
import { CSSTransition } from 'react-transition-group';

function BankAccountAuthenticationPage() {
  const { bankAccount, onBankAccountChanged } = useMember();
  const [ accountChange, setAccountChange ] = useState(true);
  const [ isRequested, setIsRequested ] = useState(false);
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  }

  const onHandleAccountChange = () => {
    setAccountChange(!accountChange);
  }

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className='auth-container'>
        <div>
          <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" onClick={onClickBackButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
            </svg>
          </button>
          계좌인증
        </div>
        
        {/* 계좌번호 입력 */}
        <div class="account-input-container">
            <div>logo</div>
            <input class="input" type="text" placeholder="신한은행 계좌번호를 입력하세요" onChange={onBankAccountChanged} value={bankAccount} id="bankAccount" disabled={accountChange} />
            {!isRequested && <span onClick={onHandleAccountChange}>{accountChange? "변경" : "확인"}</span>}
        </div>

        
        {isRequested? <BankAccountAuthenticationResponse /> : <BankAccountAuthenticationRequest setIsRequested={setIsRequested}/>}
      </div>
    </CSSTransition>
  )
}

export default BankAccountAuthenticationPage