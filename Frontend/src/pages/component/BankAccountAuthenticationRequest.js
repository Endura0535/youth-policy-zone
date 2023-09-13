import React from 'react'
import { useMember } from '../../MemberContext';
import axios from 'axios';

function BankAccountAuthenticationRequest({setIsRequested}) {
  const { email, bankAccount } = useMember();

  const onClickAuthRequestButton = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/bank-account-authentication`, {
      memberId: email,
      accountNo: bankAccount,
    }).then((response) => {
      console.log('request ok');
      setIsRequested(true);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
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

export default BankAccountAuthenticationRequest