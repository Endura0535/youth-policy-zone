import React from 'react'
import BoardItem from './BoardItem'

function Board(props) {
  const policies = props.policies;

  return (
    <div className='board'>
      {policies !== undefined ? 
        ( policies.length !== 0 ? 
          policies.map((policy) => <BoardItem policy={policy}/>)
           : <div className='board-item'>계좌 내역이 적어 추천할 수 없습니다.</div>)
            : <div className='board-item'>정책을 불러오는 중입니다.</div>}
    </div>
  )
}

export default Board