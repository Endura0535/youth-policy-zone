import React, { useState } from 'react';
import './AlarmBoard.css';
import filledheart from '../../../assets/images/filledheart.png'
import emptyheart from '../../../assets/images/emptyheart.png'
import { useNavigate } from 'react-router-dom';

function AlarmBoardItem(props) {
  const alarm = props.alarm;
  const [isLike, setIsLike] = useState(true);
  const navigate = useNavigate();

  function getDday(endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초를 일로 변환
  
    return daysDiff;
  }

  const handleAlarmType = () => {
    switch (alarm.type) {
      case 'S':
        // 시작 정책
        return ('alert-prompt-wrap');
      case 'N':
        // 새로운 정책
        return ('alert-prompt-wrap');
      case 'E':
        // 마감 정책
        return ('alert-prompt-wrap');
    }
  }

  return (
    <div className="notifications-container">
      <div class="alert">
        <div class="flex">

          {/* 아이콘  */}
          <div class="flex-shrink-0">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 alert-svg">
              <path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fill-rule="evenodd"></path>
            </svg>
          </div>

          {/* 알람 */}
          <div className={handleAlarmType}>
            <p className="text-sm text-yellow-700">{alarm.name}</p>
            <p className="text-sm text-yellow-700">{alarm.endDay}</p>
          </div>
      </div>
      </div>
    </div>

  )
}

export default AlarmBoardItem