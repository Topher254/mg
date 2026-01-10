// components/BathroomModel.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BathroomModel = ({ colors }) => {
  const groupRef = useRef();

  // Add gentle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Room Structure */}
      <mesh position={[0, 2.5, -3]} castShadow receiveShadow>
        <boxGeometry args={[6, 5, 0.2]} />
        <meshStandardMaterial color={colors.wallTile} roughness={0.4} />
      </mesh>

      {/* Side Walls */}
      <mesh position={[-3, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 5, 0.2]} />
        <meshStandardMaterial color={colors.wallTile} roughness={0.4} />
      </mesh>

      <mesh position={[3, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 5, 0.2]} />
        <meshStandardMaterial color={colors.wallTile} roughness={0.4} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial 
          color={colors.floorTile} 
          roughness={0.7}
          map={tileTexture(colors.floorTile)}
        />
      </mesh>

      {/* Vanity */}
      <mesh position={[-1.5, 0.8, -2.2]} castShadow>
        <boxGeometry args={[1.5, 1.6, 0.6]} />
        <meshStandardMaterial color={colors.vanity} roughness={0.6} />
      </mesh>

      {/* Sink */}
      <mesh position={[-1.5, 1.2, -2.2]} castShadow>
        <cylinderGeometry args={[0.4, 0.35, 0.1, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>

      {/* Shower Area */}
      <mesh position={[2, 1, -2.5]} castShadow>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color={colors.accessories} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Toilet */}
      <mesh position={[0, 0.4, -2]} castShadow>
        <boxGeometry args={[0.5, 0.8, 0.7]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>

      {/* Bathtub */}
      <mesh position={[2, 0.3, 1]} castShadow>
        <boxGeometry args={[1.8, 0.6, 3]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>

      {/* Mirror */}
      <mesh position={[-1.5, 1.8, -2.2]} castShadow>
        <boxGeometry args={[1.2, 1, 0.05]} />
        <meshStandardMaterial 
          color="#e5e5e5" 
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Lighting */}
      <pointLight position={[0, 4, 0]} intensity={1} color="#ffffff" />
    </group>
  );
};

// Helper function for tile texture
const tileTexture = (baseColor) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  
  // Create tile pattern
  const tileSize = 32;
  for (let x = 0; x < canvas.width; x += tileSize) {
    for (let y = 0; y < canvas.height; y += tileSize) {
      ctx.fillStyle = baseColor;
      ctx.fillRect(x, y, tileSize - 1, tileSize - 1);
      ctx.strokeStyle = '#00000010';
      ctx.strokeRect(x, y, tileSize, tileSize);
    }
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  
  return texture;
};

export default BathroomModel;