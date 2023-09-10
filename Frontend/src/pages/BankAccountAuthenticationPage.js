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

  const onClickAuthRequestButton = () => {

  }

  return (
    <div>
      <div><button onClick={onClickBackButton}>{"<"}</button>계좌인증</div>
      {/* 계좌번호 */}
      <div>
        <input type="text" onChange={onBankAccountChanged} value={bankAccount} id="bankAccount" disabled={accountChange} />
        <span onClick={onHandleAccountChange}>{accountChange? "변경" : "확인"}</span>
      </div>
      <div>입력하신 계좌가 회원님 계좌가 맞는지 확인하기 위해 청정지역이 1원을 보내볼게요.</div>
      {/* GIF */}
      <div>
        <div>gif...</div>
      </div>
      {/* 요청 전송 버튼 */}
      <button type="button" onClick={onClickAuthRequestButton}>내 계좌로 1원 보내기</button>
    </div>
  )
}

export default BankAccountAuthenticationPage