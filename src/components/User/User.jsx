import React from 'react'
import { useParams } from 'react-router-dom'  // ye url mn jo id ya koi r pass kro us ka access deta ha


function User() {
    const {userid}= useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User