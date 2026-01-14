import React from 'react';
import { Shield, FileCheck, Clock } from 'lucide-react';
import bath2 from '../../assets/legal1.webp';
import { Link } from 'react-router';

export default function Ahero() {


  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bath2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
         

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Transform Your Basement Into a
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-6">
            Legal Living Space
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
            Expert basement renovations in Brampton & Mississauga. We handle permits, inspections, and everything in between to create your perfect legal basement apartment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
          <Link to='/contact'>
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2">
              Get Your Free Quote
              <span>→</span>
            </button>
            </Link>
            <Link to='/gallery'>
            <button className="bg-transparent cursor-pointer hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full border border-white/30 transition-colors">
              View Our Work
            </button>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
}