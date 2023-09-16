import React, { useState } from 'react'
import BoardItem from './BoardItem'

function Board(props) {
  const policies = props.policies;

  console.log(props);
  console.log(policies);

  return (
    <div>
      {policies.map((policy) => <BoardItem policy={policy}/>)}
    </div>
  )
}

export default Board