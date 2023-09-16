import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMember } from "../../MemberContext";
import { useNavigate } from "react-router-dom";

function BankAccountAuthenticationResponse({ setIsRequested }) {
  const { email, pw, bankAccount } = useMember();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onClickAuthResponseButton();
  }, [num4]);

  const setNum = (val, id) => {
    if (!/^[0-9]$/.test(val)) {
      switch (id) {
        case "num1":
          setNum1('');
          break;
        case "num2":
          setNum2('');
          break;
        case "num3":
          setNum3('');
          break;
        case "num4":
          setNum4('');
          break;
        default:
      }
      document.getElementById(id).focus();
      return;
    }
    // e.preventDefault();
    switch(id) {
    case 'num1': 
      setNum1(val);
      document.getElementById('num2').focus();
      break;
    case 'num2': 
      setNum2(val);
      document.getElementById("num3").focus();
      break;
    case 'num3': 
      setNum3(val);
      document.getElementById("num4").focus();
      break;
    case 'num4': 
      setNum4(val);
      break;
      default:
    }
  };

  const onClickAuthResponseButton = () => {
    // 인증번호 전송
    // 회원가입 완료 페이지로 이동
    if (num1.length !== 1) {
      setNum1("");
      document.getElementById("num1").focus();
      return;
    }
    if (num2.length !== 1) {
      setNum2("");
      document.getElementById("num2").focus();
      return;
    }
    if (num3.length !== 1) {
      setNum3("");
      document.getElementById("num3").focus();
      return;
    }
    if (num4.length !== 1) {
      setNum4("");
      document.getElementById("num4").focus();
      return;
    }
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/auth/bank-account-authentication`,
        {
          memberId: email,
          accountNo: bankAccount,
          code: num1 + num2 + num3 + num4,
        }
      )
      .then((response) => {
        if (!response.data.result) {
          // 인증실패
          console.log(`인증실패: ${response.data.message}`);
          alert(response.data.message);
          setNum1("");
          setNum2("");
          setNum3("");
          setNum4("");
          document.getElementById("num1").focus();
          return;
        }

        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
            memberId: email,
            password: pw,
            accountNo: bankAccount,
            name: response.data.message,
          })
          .then((response) => {
            if (response.status === 409) {
              alert("이미 가입된 계정입니다. 로그인해주세요.");
              navigate("/signin");
              return;
            }
            else {
              navigate("/signup-result", {
                state: {
                  name: response.data,
                },
              });
            }
          });
      })
  };

  return (
    <div className="center">
      <div className="info-card mg-top-bg">
        입력하신 계좌로 1원을 보내드렸어요. 계좌의 입금내역에 표시된 <span className="shinhan-color">숫자 4자리</span>를 입력해주세요. 내역이 없다면 등록하신 계좌 정보를 다시 확인해주세요.
      </div>

      <div className="bear-loader mg-top-sm"></div>

      <div>  
        <div className="mg-top-sm">
          {/* 인증번호 입력 */}
          <input
            type="text"
            onChange={(e) => setNum(e.target.value, "num1")}
            value={num1}
            id="num1"
            className="code-input-box"
          ></input>
          <input
            type="text"
            onChange={(e) => setNum(e.target.value, "num2")}
            value={num2}
            id="num2"
            className="code-input-box"
          ></input>
          <input
            type="text"
            onChange={(e) => setNum(e.target.value, "num3")}
            value={num3}
            id="num3"
            className="code-input-box"
          ></input>
          <input
            type="text"
            onChange={(e) => setNum(e.target.value, "num4")}
            value={num4}
            id="num4"
            className="code-input-box"
          ></input>
        </div>
      </div>


      {/* 요청 전송 버튼 */}
      <button
        type="button"
        onClick={onClickAuthResponseButton}
        id="authResponse"
        className="primary-btn mg-top-bg"
      >
        인증하기
      </button>
    </div>
  );
}

export default BankAccountAuthenticationResponse;
