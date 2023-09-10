import React from 'react'
import { useNavigate } from 'react-router-dom'

function BankAccountAuthenticationResult({setIsRequested}) {
  const navigate = useNavigate();

  const onClickGoSigninButton = () => {
    navigate("/signin");
  }

  return (
    <div>
      <div>
        입력하신 계좌로 1원을 보내드렸습니다. <br />
        계좌의 입금내역에 표시된 숫자 4자리를 입력해주세요. <br />
        입금내역이 없다면 등록하신 계좌 정보를 다시 확인해주세요.
      </div>
      <div>
        <div>Image</div>
        <div>
        </div>
      </div>
      {/* 요청 전송 버튼 */}
      <button type="button" onClick={onClickGoSigninButton}>로그인하고 숨은 정책 찾기</button>
    </div>
  )
}

export default BankAccountAuthenticationResult