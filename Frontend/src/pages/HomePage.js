import React, { useEffect } from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import { useMember } from '../MemberContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { memberInfo } = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if (memberInfo.current === null) {
      console.log('home: memberInfo.current is null');
      navigate("/");
      return;
    }
    console.log('home: memberInfo.current is not null');
  }, []);

  return (
    <div>
      {memberInfo.current !== null && (
        <div>
          <Header />
          <div>HomePage</div>

          <div>
            {memberInfo.current.name.substring(1)}님께 맞는 정책을 추천드릴께요.
          </div>

          <Navbar />
        </div>
      )}
    </div>
  );
}

export default HomePage