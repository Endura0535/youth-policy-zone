import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMember } from '../MemberContext';

function BankAccountAuthenticationPage() {
  const { bankAccount, onBankAccountChanged } = useMember();
  const [ accountChange, setAccountChange ] = useState(true);
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
      <div>
        <div>
          <input type="text" onChange={onBankAccountChanged} value={bankAccount} id="bankAccount" disabled={accountChange} />
          <span onClick={onHandleAccountChange}>{accountChange? "변경" : "확인"}</span>
        </div>
      </div>
    </div>
  )
}

export default BankAccountAuthenticationPage