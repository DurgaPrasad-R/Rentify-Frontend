import React from 'react'

const UserInfo = () => {
  return (
    <div className='p-5 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <img src="./avatar.png" alt="" className='w-12 h-12 rounded-full object-cover cursor-pointer'/>
            <h2 className='text-white'>Guna</h2>
        </div>
        <div className='flex gap-5'>
            <img src="./more.png" alt="" className='w-5 h-5 cursor-pointer'/>
            <img src="./video.png" alt="" className='w-5 h-5 cursor-pointer'/>
            <img src="./edit.png" alt="" className='w-5 h-5 cursor-pointer'/>
        </div>
    </div>
  )
}

export default UserInfo
