import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMember } from "../MemberContext";
import BankAccountAuthenticationRequest from "./component/BankAccountAuthenticationRequest";
import BankAccountAuthenticationResponse from "./component/BankAccountAuthenticationResponse";

function BankAccountAuthenticationPage() {
  const name = { ...location.state };
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {name}님, 청년 정책 정보를 추천받고, 잊지 않고 신청할 수 있도록 알림을
        받으러 가볼까요?
      </div>
      <Link to={`/auth`} style={{ textDecoration: "none" }} class="cover-btn">
        <div className="primary-btn">로그인하고 숨은 정책 찾기</div>
      </Link>
    </div>
  );
}

export default BankAccountAuthenticationPage;
