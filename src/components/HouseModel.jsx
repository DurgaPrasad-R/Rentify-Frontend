import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function HouseModel(props) {
  const { scene } = useGLTF('/sci_fi_house.glb'); // Adjust the path relative to the public directory
  const modelRef = useRef();

  // Optional: add some animation to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the model for a simple animation
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

export default HouseModel;
