import axios from "axios";
import { createContext, useContext, useRef } from "react";

const MemberContext = createContext("member");

export function MemberProvider({ children }) {

  const accessToken = useRef("");
  const memberInfo = useRef({});
  const apiClient = useRef(null);

  const succeededSignin = (token) => {
    // 엑세스토큰 설정
    accessToken.current = token;
    apiClient.current = apiClient.current = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Authorization': `Bearer ${accessToken.current}`
      }
    });
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
    apiClient.get(`/member/${memberInfo.current.memberId}`)
      .then((response) => {
      memberInfo.current = response.data;
    });
  }

  return (
    <MemberContext.Provider value={{ 
      accessToken, memberInfo, succeededSignin, setMemberId
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