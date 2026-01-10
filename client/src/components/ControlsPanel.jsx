import React from "react";

// components/ControlsPanel.jsx
const ControlsPanel = () => {
  return (
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-3">Controls</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            🖱️
          </div>
          <span>Drag to rotate view</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            🔍
          </div>
          <span>Scroll to zoom</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            👆
          </div>
          <span>Click items to select</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1">
          <span>Reset View</span>
          <span>↺</span>
        </button>
      </div>
    </div>
  );
};

export default ControlsPanel;