import React from "react";
import { useMember } from "../../MemberContext";
import axios from "axios";
import fakeimage from '../../assets/images/fake.png';

function BankAccountAuthenticationRequest({ setIsRequested }) {
  const { email, bankAccount } = useMember();

  const onClickAuthRequestButton = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/bank-account-authentication`,
        {
          memberId: email,
          accountNo: bankAccount,
        }
      )
      .then((response) => {
        console.log("인증번호 생성됨:", response.data);
        setIsRequested(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div className="center">
      <div className="info-card mg-top-bg"> 
        본인 확인을 위해 회원님께서 입력하신 은행 계좌로 
        <span className="shinhan-color">1원</span>
        을 보내볼께요. 본인 명의의 신한은행 계좌번호가 맞는지 한번 더 확인해 주세요.
      </div>

      <img src={fakeimage} alt="fake" className="fakeimage mg-top-sm"/>

      <button type="button" className='primary-btn mg-top-bg' onClick={onClickAuthRequestButton}>
        내 계좌로 1원 보내기
      </button>
    </div>
  );
}

export default BankAccountAuthenticationRequest;
