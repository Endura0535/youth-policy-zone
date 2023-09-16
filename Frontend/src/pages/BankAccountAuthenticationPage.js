import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMember } from '../MemberContext';
import BankAccountAuthenticationRequest from './component/BankAccountAuthenticationRequest';
import BankAccountAuthenticationResponse from './component/BankAccountAuthenticationResponse';
import { CSSTransition } from 'react-transition-group';
import { IoIosArrowBack } from 'react-icons/io';

import './BankAccountAuthentication.css';
import globelogo from '../assets/images/globelogo.png';

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
      <div className='default-container'>

        {/* HEADER */}
        <div className='header'>
          <div onClick={onClickBackButton} class='header-back-btn'>
            <IoIosArrowBack />
          </div>
          계좌인증
        </div>
        
        {/* 계좌번호 입력 */}
        <div className="account-input-container mg-top-bg">
            <div className='account-input-logo'>
               <img src={globelogo} alt="글로브로고" className="globelogo"/>
            </div>

            <input 
              type="account" 
              name="search" 
              placeholder="신한은행 계좌번호를 입력하세요" 
              className="input"
              id="bankAccount" 
              onChange={onBankAccountChanged} 
              value={bankAccount} 
              disabled={accountChange}
            />

            <div className='account-input-change'>
              {!isRequested && <span onClick={onHandleAccountChange}>{accountChange? "변경하기" : "입력완료"}</span>}
            </div>
        </div>
        
        {/* 계좌번호 입력창 <-> 계좌번호 인증 완료 창전환 */}
        {isRequested? <BankAccountAuthenticationResponse /> : <BankAccountAuthenticationRequest setIsRequested={setIsRequested}/>}
      </div>
    </CSSTransition>
  )
}

export default BankAccountAuthenticationPage