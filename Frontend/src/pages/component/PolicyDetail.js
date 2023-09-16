import React from 'react'
import { useParams } from 'react-router-dom';

function PolicyDetail() {
  const params = useParams();

  const id = params.id;

  return (
    <div>PolicyDetail {id}</div>
  )
}

export default PolicyDetail