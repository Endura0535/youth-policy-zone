import React from 'react'
import { useMember } from '../../MemberContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { email, pw, pwVisibility, bankAccount, onEmailChanged, onPwChanged, handlePwVisibility,
    onBankAccountChanged
  } = useMember();
  const navigate = useNavigate();

  const onClickNextButton = (e) => {
    navigate("/account-auth");
  }

  return (
    <div>
      <form>
        <div>
          <div><label htmlFor="email">이메일 주소</label></div>
          <div><input type="email" onChange={onEmailChanged} value={email} id="email"/></div>
        </div>
        <div>
          <div><label htmlFor="pw">비밀번호</label></div>
          <div>
            <input type={pwVisibility.type} onChange={onPwChanged} value={pw} id="pw"
              autoComplete='false'
            />
            <span onClick={handlePwVisibility}>
              {pwVisibility.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
            </span>
          </div>
        </div>
        <div>
          <div><label htmlFor="bankAccount">신한은행 계좌번호</label></div>
          <div><input type="text" onChange={onBankAccountChanged} value={bankAccount} id="bankAccount"/></div>
        </div>
        <div>청정지역은 신한은행 고객만 이용 가능한 서비스입니다. <br />계좌번호를 입력하여 본인인증해주세요.</div>
        <button type="button" onClick={onClickNextButton}>다음</button>
      </form>
    </div>
  )
}

export default Signup