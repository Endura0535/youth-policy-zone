import React from 'react'
import { useMember } from '../../MemberContext'

function Header() {
  const { memberInfo } = useMember();
  
  return (
    <div>
      <div>어서오세요, {memberInfo.current.name}님</div>
      <div>주소</div>
      <div>알림</div>
      <p></p>
    </div>
  );
}

export default Header