import React from 'react'
import AlarmBoardItem from './AlarmBoardItem'

function AlarmBoard(props) {
  const alarmList = props.alarmList;

  return (
    <div className='board'>
      {alarmList !== undefined ? 
        ( alarmList.length !== 0 ? 
          alarmList.map((alarm) => <AlarmBoardItem alarm={alarm}/>)
           : <div className='board-item'>알림이 없습니다.</div>)
            : <div className='board-item'>알림을 불러오는 중입니다.</div>}
    </div>
  )
}

export default AlarmBoard