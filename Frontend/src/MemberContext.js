import axios from "axios";
import { createContext, useContext, useRef } from "react";

const MemberContext = createContext("member");

export function MemberProvider({ children }) {

  const accessToken = useRef("");
  const memberInfo = useRef({});

  const succeededSignin = (token) => {
    // 엑세스토큰 설정
    accessToken.current = token;
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
    console.log(accessToken.current);
    axios.get(`http://localhost:8080/member/${memberInfo.current.memberId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken.current}`
      }
    }).then((response) => {
      memberInfo.current = response.data;
      console.log(memberInfo.current);
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