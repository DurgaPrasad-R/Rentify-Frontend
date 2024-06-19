import React from 'react';

const Detail = () => {
  return (
    <div className="flex-1">
      <div className="user p-8 flex flex-col items-center gap-4 border-b border-gray-400">
        <img src='./avatar.png' className="w-24 h-24 rounded-full object-cover" alt="User Avatar" />
        <h2 className="text-xl font-bold">Uday Babu</h2>
        <p className="text-sm text-center text-gray-400">Uday The Lover Boy ❤️🥰😍</p>
      </div>
      <div className="info p-6 flex flex-col gap-6">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="font-bold">Chat Settings</span>
            <img src='./arrowUp.png' className="w-8 h-8 bg-gray-500 rounded-full p-2 cursor-pointer" alt="Toggle Icon" />
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="font-bold">Privacy & Help</span>
            <img src='./arrowUp.png' className="w-8 h-8 bg-gray-500 rounded-full p-2 cursor-pointer" alt="Toggle Icon" />
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="font-bold">Shared Photos</span>
            <img src='./arrowDown.png' className="w-8 h-8 bg-gray-500 rounded-full p-2 cursor-pointer" alt="Toggle Icon" />
          </div>
          <div className="photos flex flex-col gap-4 mt-4">
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-4">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHI-ymESogHGtpe885b3KTLjg1QwmB36-jA&s' className="w-10 h-10 rounded-lg object-cover" alt="Photo" />
                <span className="text-sm text-gray-400">photo_2024-06-15.png</span>
              </div>
              <img src='./download.png' className="w-8 h-8 bg-gray-500 rounded-full p-2 cursor-pointer" alt="Download Icon" />
            </div>
            
            {/* Repeat the above structure for other photos */}
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="font-bold">Shared Files</span>
            <img src='./arrowUp.png' className="w-8 h-8 bg-gray-500 rounded-full p-2 cursor-pointer" alt="Toggle Icon" />
          </div>
        </div>
        <button className="py-4 px-6 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 cursor-pointer">Block User</button>
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 cursor-pointer">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
