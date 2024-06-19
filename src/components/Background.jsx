import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HouseModel from './HouseModel';

const Background = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <HouseModel position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Background;
