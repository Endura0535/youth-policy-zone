import React from 'react'

function BoardItem(props) {

  const policy = props.policy;

  console.log(policy);

  return (
    <div>
      <div>
        <div>{policy.name}</div>
        {/* <div>tags</div> */}
      </div>
      <div>
        <div>
          <div>마감임박</div>
          <div>{policy.applicationEnd.slice(0, 10)}</div>
        </div>
        <div>
          <div>alarm</div>
          <div>like</div>
        </div>
      </div>
    </div>
  )
}

export default BoardItem