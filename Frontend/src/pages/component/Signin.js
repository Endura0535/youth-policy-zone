import React, { useState } from 'react'

function Signin() {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });


  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  const onPwChanged = (e) => {
    setPw(e.target.value);
  }

  const handlePwType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return {type: "text", visible: true};
      }
      else {
        return {type: "password", visible: false};
      }
    })
  }

  return (
    <div>
        <div><label htmlFor="id">Email : <input type="email" onChange={onEmailChanged} value={email} id='id'/></label></div>
        <div>
          <label htmlFor="pw">Password : <input type={pwType.type} onChange={onPwChanged} value={pw} id='pw'/></label>
          <span onClick={handlePwType}>
            {pwType.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          </span>
        </div>
    </div>
  )
}

export default Signin