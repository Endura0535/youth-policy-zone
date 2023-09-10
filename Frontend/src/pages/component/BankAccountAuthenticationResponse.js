import React from 'react'

function BankAccountAuthenticationResponse({setIsRequested}) {

  const onKeyDown = (e) => {
    console.log(e);
  }

  const onClickAuthResponseButton = () => {
    // 인증번호 전송
    // 회원가입 완료 페이지로 이동
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
          {/* 인증번호 입력 */}
          <input type='text' onKeyDown={onKeyDown}></input>
          <input type='text' onKeyDown={onKeyDown}></input>
          <input type='text' onKeyDown={onKeyDown}></input>
          <input type='text' onKeyDown={onKeyDown}></input>
        </div>
      </div>
      {/* 요청 전송 버튼 */}
      <button type="button" onClick={onClickAuthResponseButton}>인증하기</button>
    </div>
  )
}

export default BankAccountAuthenticationResponse