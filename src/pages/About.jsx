import React, { useRef } from 'react';
import VideoBackground from "../components/VideoBackground"
const About = () => {
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

  const scrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToTop = () => {
    topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="relative w-full h-full">
      <VideoBackground/>
      <div ref={topSectionRef} className="relative w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4 p-4">Welcome to My Website</h1>
          <p className="mb-4">Explore the amazing features...</p>
          <button onClick={scrollToBottom} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-300">
            Explore now
          </button>
        </div>
      </div>

      <div ref={bottomSectionRef} className="relative w-full h-screen p-8  flex flex-col items-center justify-center">
        <input type="text" placeholder="Search..." className="px-4 py-2 mb-4 text-black rounded" />
        <div className="flex gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">Block 1</div>
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">Block 2</div>
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">Block 3</div>
        </div>
        <button onClick={scrollToTop} className="mt-8 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-300">
          Back to top
        </button>
      </div>
    </div>
  );
};

export default About;
