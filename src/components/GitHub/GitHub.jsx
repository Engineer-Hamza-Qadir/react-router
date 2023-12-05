import React, { useEffect, useState } from 'react'


function GitHub() {
    const [data,setData]= useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Engineer-Hamza-Qadir')
        .then(response=> response.json()).then(data=> setData(data)) 
      }, [])
  return (
    <div className=' bg-gray-500 text-white text-center text-3xl m-4 p-4'>
        GitHub Followers: {data.following}
        <img className='' src={data.avatar_url} alt="githubimg" width={300} />
    </div>
  )
}

export default GitHub