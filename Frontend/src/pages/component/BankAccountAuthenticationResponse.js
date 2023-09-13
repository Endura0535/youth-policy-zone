import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useMember } from '../../MemberContext'

function BankAccountAuthenticationResponse({setIsRequested}) {
  const { apiClient } = useMember()
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');

  useEffect(() => {
    if (num1.length !== 1) {
      document.getElementById('num1').focus();
      return;
    }
    if (num2.length !== 1) {
      document.getElementById('num2').focus();
      return;
    }
    if (num3.length !== 1) {
      document.getElementById('num3').focus();
      return;
    }
    if (num4.length !== 1) {
      document.getElementById('num4').focus();
      return;
    }
    onClickAuthResponseButton();
  }, [num4]);

  const onKeyUp = (e, next) => {
    if(!/^[0-9]+$/.test(e.key)) return;

    e.target.value = e.key;
    // e.preventDefault();
    if (next === '') return;

    document.getElementById(next).focus();
  }

  const onClickAuthResponseButton = () => {
    // 인증번호 전송
    // 회원가입 완료 페이지로 이동
    console.log('인증번호 전송');
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
          <input type='text' onChange={e => setNum1(e.target.value)} onKeyUp={e => onKeyUp(e, 'num2')} value={num1} id='num1'></input>
          <input type='text' onChange={e => setNum2(e.target.value)} onKeyUp={e => onKeyUp(e, 'num3')} value={num2} id='num2'></input>
          <input type='text' onChange={e => setNum3(e.target.value)} onKeyUp={e => onKeyUp(e, 'num4')} value={num3} id='num3'></input>
          <input type='text' onChange={e => setNum4(e.target.value)} onKeyUp={e => onKeyUp(e, 'authResponse')} value={num4} id='num4'></input>
        </div>
      </div>
      {/* 요청 전송 버튼 */}
      <button type="button" onClick={onClickAuthResponseButton} id='authResponse'>인증하기</button>
    </div>
  )
}

export default BankAccountAuthenticationResponse