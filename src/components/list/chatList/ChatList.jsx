import React, { useState } from 'react'
import AddUser from './addUser/addUser'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  
  return (
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>
      <div className='flex items-center gap-5 p-5'>
        <div className='flex-1 bg-rgba(17,25,40,0.5) bg-opacity-50 backdrop-blur-lg flex items-center gap-5 rounded-lg p-2'>
          <img src='/search.png' className='w-5 h-5' />
          <input type='text' placeholder='Search' className='bg-transparent border-none outline-none text-white flex-1' />
        </div>
        <img 
          src={addMode ? "./minus.png" : "./plus.png"} 
          className='w-9 h-9 bg-gray-700 bg-opacity-50 backdrop-blur-lg p-2 rounded-lg cursor-pointer' 
          onClick={() => setAddMode(prev => !prev)} 
        />
      </div>

      <div className='border-b border-gray-400 p-5 cursor-pointer flex items-center gap-5'>
        <img src='./avatar.png' className='w-12 h-12 rounded-full object-cover' />
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>Uday Babu</span>
          <p className='text-sm font-light'>Hello ra puka</p>
        </div>
      </div>

      <div className='border-b border-gray-400 p-5 cursor-pointer flex items-center gap-5'>
        <img src='./avatar.png' className='w-12 h-12 rounded-full object-cover' />
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>Durga Prasad</span>
          <p className='text-sm font-light'>Hello How are You</p>
        </div>
      </div>

      <div className='border-b border-gray-400 p-5 cursor-pointer flex items-center gap-5'>
        <img src='./avatar.png' className='w-12 h-12 rounded-full object-cover' />
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>Gopi Varun</span>
          <p className='text-sm font-light'>Hello</p>
        </div>
      </div>

      <div className='border-b border-gray-400 p-5 cursor-pointer flex items-center gap-5'>
        <img src='./avatar.png' className='w-12 h-12 rounded-full object-cover' />
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>Guna Shekar</span>
          <p className='text-sm font-light'>Hello 😎😏👽</p>
        </div>
      </div>

      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
