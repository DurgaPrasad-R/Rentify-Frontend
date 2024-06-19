import React from 'react';

const AddUser = () => {
  return (
    <div className='bg-gray-950 bg-opacity-75 rounded-lg p-8 absolute top-0 left-0 bottom-0 right-0 m-auto h-40 w-96'>
      <form className='flex gap-4'>
        <input
          type='text'
          placeholder='Username'
          name='username'
          className='px-4 py-2 rounded-lg bg-gray-800 text-white outline-none'
        />
        <button className='px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700'>
          Search
        </button>
      </form>
      <div className='mt-8 flex items-center justify-center'>
        <div className='flex items-center gap-4'>
          <img src='./avatar.png' className='w-12 h-12 rounded-full object-cover' alt='Avatar' />
          <span>Guna Shekar</span>
        </div>
        <button className='px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700'>
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
