import { createContext, useContext, useRef } from "react";

const MemberContext = createContext("member");

export function MemberProvider({ children }) {

  const accessToken = useRef();

  return (
    <MemberContext.Provider value={{ accessToken }}>
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