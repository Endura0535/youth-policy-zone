import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMember } from '../MemberContext';
import BankAccountAuthenticationRequest from './component/BankAccountAuthenticationRequest';
import BankAccountAuthenticationResponse from './component/BankAccountAuthenticationResponse';

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
    <div>
      <div><button onClick={onClickBackButton}>{"<"}</button>계좌인증</div>
      {/* 계좌번호 */}
      <div>
        <input type="text" onChange={onBankAccountChanged} value={bankAccount} id="bankAccount" disabled={accountChange} />
        {!isRequested && <span onClick={onHandleAccountChange}>{accountChange? "변경" : "확인"}</span>}
      </div>
      {isRequested? <BankAccountAuthenticationResponse /> : <BankAccountAuthenticationRequest setIsRequested={setIsRequested}/>}
    </div>
  )
}

export default BankAccountAuthenticationPage