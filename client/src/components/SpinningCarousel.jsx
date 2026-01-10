// components/StackedImagesCarousel.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import bath1 from '../assets/bath1.jpg';
import bath2 from '../assets/bath2.jpg';
import bath3 from '../assets/bath3.jpg';
import bath4 from '../assets/bath4.jpg';
import bath5 from '../assets/bath5.jpg';

const BATHROOM_IMAGES = [bath1, bath2, bath3, bath4, bath5];

// Pre-defined irregular offsets for a natural stack look
const STACK_OFFSETS = [
  { x: 0, y: 0, z: 0, rotation: 0, scale: 1.0 },      // Top
  { x: -0.12, y: -0.08, z: -0.2, rotation: -0.08, scale: 0.98 },  // Second
  { x: 0.08, y: -0.16, z: -0.4, rotation: 0.05, scale: 0.96 },    // Third
  { x: -0.05, y: -0.24, z: -0.6, rotation: -0.03, scale: 0.94 },  // Fourth
  { x: 0.10, y: -0.32, z: -0.9, rotation: 0.06, scale: 0.92 },    // Fifth
];

function StackImage({ imageUrl, offset }) {
  const texture = useTexture(imageUrl);
  
  return (
    <mesh
      position={[offset.x, offset.y, offset.z]}
      rotation={[0, 0, offset.rotation]}
      scale={[offset.scale, offset.scale, 1]}
    >
      <planeGeometry args={[3.5, 2.6]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function StackedImagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show top 3 images in the stack
  const visibleImages = [];
  for (let i = 0; i < Math.min(3, BATHROOM_IMAGES.length); i++) {
    const imgIndex = (currentIndex + i) % BATHROOM_IMAGES.length;
    visibleImages.push({
      imageUrl: BATHROOM_IMAGES[imgIndex],
      offset: STACK_OFFSETS[i],
    });
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % BATHROOM_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + BATHROOM_IMAGES.length) % BATHROOM_IMAGES.length);
  };

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0.3, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        
        {visibleImages.map((img, idx) => (
          <StackImage
            key={idx}
            imageUrl={img.imageUrl}
            offset={img.offset}
          />
        ))}
      </Canvas>

      {/* Minimal Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prevImage}
          className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow-sm"
        >
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-1">
          {BATHROOM_IMAGES.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextImage}
          className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow-sm"
        >
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}