import React from 'react'
import BoardItem from './BoardItem'

function Board(props) {
  const policies = props.policies;

  return (
    <div className='board'>
      {policies !== undefined && policies.map((policy) => <BoardItem policy={policy}/>)}
    </div>
  )
}

export default Board