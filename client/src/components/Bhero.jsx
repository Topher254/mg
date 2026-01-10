// components/BathroomHero.jsx
import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import BathroomModel from './BathroomModel';
import ColorPicker from './ColorPicker';

const BathroomHero = () => {
  const [colors, setColors] = useState({
    wallTile: '#f0f0f0',
    floorTile: '#6b7280',
    vanity: '#8b7355',
    accessories: '#cbd5e1'
  });

  const [activeFeature, setActiveFeature] = useState('wallTile');

const colorOptions = {
  wallTile: [
    { name: 'White', value: '#ffffff' },
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#008000' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Orange', value: '#ff7f00' }
  ],

  floorTile: [
    { name: 'Black', value: '#000000' },
    { name: 'Brown', value: '#8b4513' },
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#008000' },
    { name: 'Yellow', value: '#ffff00' }
  ],

  vanity: [
    { name: 'White', value: '#ffffff' },
    { name: 'Black', value: '#000000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#008000' },
    { name: 'Orange', value: '#ff7f00' },
    { name: 'Yellow', value: '#ffff00' }
  ],

  accessories: [
    { name: 'Silver', value: '#c0c0c0' },
    { name: 'Gold', value: '#ffd700' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' }
  ]
};


  const handleColorChange = (colorType, colorValue) => {
    setColors(prev => ({
      ...prev,
      [colorType]: colorValue
    }));
  };

  return (
    <section className="relative min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0">
        <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <BathroomModel colors={colors} />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              zoomSpeed={0.6}
              panSpeed={0.5}
              rotateSpeed={0.8}
              minDistance={3}
              maxDistance={10}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Transform Your
            <span className="block text-red-600">Bathroom</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Customize and visualize your dream bathroom with our interactive 3D designer.
            Click and drag to explore, change colors to match your style.
          </p>
        </div>
      </div>

      <ColorPicker
        colors={colors}
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
        colorOptions={colorOptions}
        onColorChange={handleColorChange}
      />
    </section>
  );
};

export default BathroomHero;