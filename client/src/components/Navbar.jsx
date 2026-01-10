import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-red-500 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-1">
              <span className="font-semibold">100% CANADIAN</span>
              <span className="hidden sm:inline">| CREATING BEAUTIFUL SPACES, ONE HOME AT A TIME</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/blog" className="hover:text-red-100 transition">Blog</a>
              <a href="/contact" className="hover:text-red-100 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              
            <img src={logo} className='w-25 '/>

            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-600 font-medium transition">
              Home
            </a>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-600 font-medium transition">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/bathrooms" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition">
                  Bathrooms
                </a>
                <a href="/kitchens" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition">
                  Kitchens
                </a>
                <a href="/legal-basement" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition">
                  Legal Basement
                </a>
              </div>
            </div>

            <a href="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition">
              Gallery
            </a>
            
            <a href="/how-it-works" className="text-gray-700 hover:text-red-600 font-medium transition">
              How It Works
            </a>
            
            <a href="/about" className="text-gray-700 hover:text-red-600 font-medium transition">
              About Us
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:647-686-6313" className="flex items-center text-red-600 font-semibold hover:text-red-700 transition">
              <Phone className="w-4 h-4 mr-2" />
              647-686-6313
            </a>
            <a href="/estimate" className="bg-linear-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-x-0.5 hover:scale-105 transition-all duration-200">
              Get an Estimate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition">
              Home
            </a>
            
            <div>
              <button
                onClick={() => handleDropdown('services')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/bathrooms" className="block px-4 py-2 text-gray-600 hover:text-red-600 transition">
                    Bathrooms
                  </a>
                  <a href="/kitchens" className="block px-4 py-2 text-gray-600 hover:text-red-600 transition">
                    Kitchens
                  </a>
                  <a href="/legal-basement" className="block px-4 py-2 text-gray-600 hover:text-red-600 transition">
                    Legal Basement
                  </a>
                </div>
              )}
            </div>

            <a href="/gallery" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition">
              Gallery
            </a>
            
            <a href="/how-it-works" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition">
              How It Works
            </a>
            
            <a href="/about" className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition">
              About Us
            </a>

            <div className="pt-4 space-y-3">
              <a href="tel:647-686-6313" className="flex items-center justify-center px-4 py-3 text-red-600 border-2 border-red-600 rounded-full font-semibold hover:bg-red-50 transition">
                <Phone className="w-4 h-4 mr-2" />
                647-686-6313
              </a>
              <a href="/estimate" className="block text-center px-4 py-3 bg-linear-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 duration-300 transition-all">
                Get an Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}