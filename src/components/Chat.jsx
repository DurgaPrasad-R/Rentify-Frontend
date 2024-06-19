import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);

  return (
    <div className="flex flex-col border-l border-r border-gray-400 h-full max-w-screen-lg mx-auto">
      <div className="p-5 flex items-center justify-between border-b border-gray-400">
        <div className="flex items-center gap-5">
          <img src="./avatar.png" className="w-16 h-16 rounded-full object-cover" alt="User Avatar" />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">Uday Babu</span>
            <p className="text-sm font-light text-gray-400">uday ❤️ sahiti</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src="./phone.png" className="w-5 h-5" alt="Phone Icon" />
          <img src="./video.png" className="w-5 h-5" alt="Video Icon" />
          <img src="./info.png" className="w-5 h-5" alt="Info Icon" />
        </div>
      </div>
      <div className="p-5 flex-1 overflow-y-auto flex flex-col gap-5 scrollbar">
        <div className="max-w-[60%] flex gap-5">
          <img src="./avatar.png" className="w-8 h-8 rounded-full object-cover" alt="User Avatar" />
          <div className="flex flex-col gap-1">
            <p className="p-5 bg-gray-700 bg-opacity-80 rounded-md">sahiti nenu prati roju gabi gibi</p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[60%] self-end flex gap-5">
          <div className="flex flex-col gap-1">
            <p className="p-5 bg-blue-600 rounded-md text-white">sahiti nenu prati roju gabi gibi</p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[60%] flex gap-5">
          <img src="./avatar.png" className="w-8 h-8 rounded-full object-cover" alt="User Avatar" />
          <div className="flex flex-col gap-1">
            <p className="p-5 bg-gray-700 bg-opacity-80 rounded-md">sahiti nenu prati roju gabi gibi</p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[60%] self-end flex gap-5">
          <div className="flex flex-col gap-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHI-ymESogHGtpe885b3KTLjg1QwmB36-jA&s"
              className="w-full h-80 rounded-md object-cover"
              alt="Message Image"
            />
            <p className="p-5 bg-blue-600 rounded-md text-white">sahiti nenu prati roju gabi gibi</p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="p-5 flex items-center justify-between border-t border-gray-400 gap-5 mt-auto">
        <div className="flex gap-5">
          <img src="./img.png" className="w-5 h-5 cursor-pointer" alt="Image Icon" />
          <img src="./camera.png" className="w-5 h-5 cursor-pointer" alt="Camera Icon" />
          <img src="./mic.png" className="w-5 h-5 cursor-pointer" alt="Mic Icon" />
        </div>
        <input
          type="text"
          placeholder="type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-gray-700 bg-opacity-80 border-none outline-none text-white p-5 rounded-md text-base"
        />
        <div className="relative">
          <img
            src="./emoji.png"
            onClick={() => setOpen((prev) => !prev)}
            className="w-5 h-5 cursor-pointer"
            alt="Emoji Icon"
          />
          {open && (
            <div className="absolute bottom-12 left-0">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="bg-blue-600 text-white p-2.5 px-5 rounded-md cursor-pointer">Send</button>
      </div>
    </div>
  );
};

export default Chat;
