import React from "react";

// components/ColorPicker.jsx
const ColorPicker = ({ 
  colors, 
  activeFeature, 
  setActiveFeature, 
  colorOptions, 
  onColorChange 
}) => {
  const features = [
    { id: 'wallTile', label: 'Wall Tiles', icon: '🧱' },
    { id: 'floorTile', label: 'Floor Tiles', icon: '⬜' },
    { id: 'vanity', label: 'Vanity', icon: '🪑' },
    { id: 'accessories', label: 'Fixtures', icon: '🚰' }
  ];

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Feature Selector */}
          <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                  activeFeature === feature.id
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{feature.icon}</span>
                <span className="font-medium">{feature.label}</span>
              </button>
            ))}
          </div>

          {/* Color Options */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Select {features.find(f => f.id === activeFeature)?.label}
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {colorOptions[activeFeature].map((option) => (
                <button
                  key={option.name}
                  onClick={() => onColorChange(activeFeature, option.value)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  style={{
                    backgroundColor: colors[activeFeature] === option.value ? '#eff6ff' : 'transparent'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 shadow-md"
                    style={{ backgroundColor: option.value }}
                  />
                  <span className="text-sm font-medium text-gray-700">{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Selection Display */}
          <div className="md:w-48 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-700 mb-3">Current Selection</h4>
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>{feature.icon}</span>
                    <span className="text-sm text-gray-600">{feature.label}</span>
                  </div>
                  <div 
                    className="w-6 h-6 rounded border border-gray-300"
                    style={{ backgroundColor: colors[feature.id] }}
                  />
                </div>
              ))}
            </div>
            <button 
              className="mt-4 w-full bg-red-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
              onClick={() => alert('Design saved! Contact us for a quote.')}
            >
              Save Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;