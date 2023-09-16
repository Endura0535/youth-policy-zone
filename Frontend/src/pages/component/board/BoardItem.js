import React, { useState } from 'react';
import './Board.css';
import filledheart from '../../../assets/images/filledheart.png'
import emptyheart from '../../../assets/images/emptyheart.png'

function BoardItem(props) {
  const policy = props.policy;
  const [isLike, setIsLike] = useState(true);

  function getDday(endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초를 일로 변환
  
    return daysDiff;
  }

  const dDay = getDday(policy.endDay);

  const handleLikeClick = () => {
    setIsLike(!isLike);
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

          {/* 정책 이름  +  마감 기한  */}
          <div class="alert-prompt-wrap">
            <p class="text-sm text-yellow-700">{policy.name}</p>
            <p class="text-sm text-yellow-700">{policy.endDay}</p>
            <p className="text-sm text-yellow-700">{`D-${dDay}`}</p>
          </div>

          {/* 좋아요 */}
          {isLike ? 
          <div class="like-btn-applied" onClick={handleLikeClick}>
             <img src={filledheart} alt="하트" className="filledheart"/>
          </div> : 
          <div class="like-btn" onClick={handleLikeClick}>
              <img src={emptyheart} alt="하트" className="emptyheart"/>
          </div>}
      </div>
      </div>
    </div>

  )
}

export default BoardItem