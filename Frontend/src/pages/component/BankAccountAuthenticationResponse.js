import React, { useRef, useState } from 'react'

function BankAccountAuthenticationResponse({setIsRequested}) {

  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [num3, setNum3] = useState()
  const [num4, setNum4] = useState()

  const onKeyDown = (e, setNum, next) => {
    if(!/^[0-9]+$/.test(e.key)) return;

    setNum(e.key);
    e.preventDefault();
    if (next === '') return;

    document.getElementById(next).focus();
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
          <input type='text' onKeyDown={e => onKeyDown(e, setNum1, 'num2')} value={num1} id='num1'></input>
          <input type='text' onKeyDown={e => onKeyDown(e, setNum2, 'num3')} value={num2} id='num2'></input>
          <input type='text' onKeyDown={e => onKeyDown(e, setNum3, 'num4')} value={num3} id='num3'></input>
          <input type='text' onKeyDown={e => onKeyDown(e, setNum4, '')} value={num4} id='num4'></input>
        </div>
      </div>
      {/* 요청 전송 버튼 */}
      <button type="button" onClick={onClickAuthResponseButton}>인증하기</button>
    </div>
  )
}

export default BankAccountAuthenticationResponse