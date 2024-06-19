import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    </div>
  );
};

export default VideoBackground;
