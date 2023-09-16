import axios from "axios";
import { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberContext = createContext("member");

export function MemberProvider({ children }) {

  const accessToken = useRef("");
  const memberInfo = useRef({});
  const navigate = useNavigate();
  const apiClient = useRef(null);

  // AuthPage
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwVisibility, setPwVisibility] = useState({
    type: 'password',
    visible: false,
  });
  const [bankAccount, setBankAccount] = useState('');

  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  const onPwChanged = (e) => {
    setPw(e.target.value);
  }

  const handlePwVisibility = (e) => {
    setPwVisibility(() => {
      if (!pwVisibility.visible) {
        return {type: "text", visible: true};
      }
      else {
        return {type: "password", visible: false};
      }
    })
  }

  const onBankAccountChanged = (e) => {
    setBankAccount(e.target.value);
  }

  // AuthPage //

  const setAccessToken = (token) => {
    // 엑세스토큰 설정
    accessToken.current = token;
    if (token === null) return;

    apiClient.current = apiClient.current = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Authorization': `Bearer ${accessToken.current}`
      }
    });
  }

  const succeededSignin = (token) => {
    setAccessToken(token);
    // 멤버정보 설정
    setMemberInfo();
  }

  const setMemberId = (memberId) => {
    memberInfo.current = {
      ...memberInfo.current,
      memberId
    }
  }

  const setMemberInfo = () => {
    if (accessToken.current === null || apiClient.current === null) return false;

    // 회원 정보 설정
    apiClient.current.get(`/member`)
      .then((response) => {
      memberInfo.current = response.data;
      console.log(memberInfo.current);
    });
    return true;
  }

  const doSignout = () => {
    setAccessToken(null);
    memberInfo.current = null;
    navigate('/');
  }

  return (
    <MemberContext.Provider value={{ 
      accessToken, memberInfo, succeededSignin, setMemberId, doSignout, setMemberInfo,
      email, setEmail, pw, pwVisibility, setPwVisibility, bankAccount, setBankAccount,
      onEmailChanged, onPwChanged, handlePwVisibility, onBankAccountChanged,
      tab, setTab
    }}>
      {children}
    </MemberContext.Provider>
  );
}

export const useMember = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error('useMember must be used within a MemberProvider');
  }
  return context;
}