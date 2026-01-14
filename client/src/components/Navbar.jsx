import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NavLink, Link } from 'react-router'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Active link style function for desktop
  const activeLink = ({ isActive }) =>
    `relative font-semibold ${
      isActive
        ? 'text-red-600 after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-red-600'
        : 'text-gray-700'
    }`

  // Active link style function for mobile
  const activeLinkMobile = ({ isActive }) =>
    `block py-3 px-4  font-semibold border-b border-gray-200 ${
      isActive
        ? ' text-red-500'
        : 'text-gray-700 hover:bg-gray-50'
    }`

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm">
          <span className="font-semibold">100% CANADIAN</span>
          <div className="space-x-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="w-24" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/bathrooms" className={activeLink}>
            Bathrooms
          </NavLink>
          <NavLink to="/legal-basement" className={activeLink}>
            Legal Basement
          </NavLink>
          <NavLink to="/gallery" className={activeLink}>
            Gallery
          </NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:647-686-6313" className="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            647-686-6313
          </a>

          <Link
            to="/estimate"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Get an Estimate
          </Link>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <NavLink 
              to="/bathrooms" 
              className={activeLinkMobile}
              onClick={handleLinkClick}
            >
              Bathrooms
            </NavLink>
            <NavLink 
              to="/legal-basement" 
              className={activeLinkMobile}
              onClick={handleLinkClick}
            >
              Legal Basement
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={activeLinkMobile}
              onClick={handleLinkClick}
            >
              Gallery
            </NavLink>
            
            {/* Mobile CTA Section */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
              <a 
                href="tel:647-686-6313" 
                className="flex items-center justify-center text-red-600 font-semibold py-3 px-4  rounded-lg hover:bg-red-100 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                647-686-6313
              </a>

              <Link
                to="/estimate"
                className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all"
                onClick={handleLinkClick}
              >
                Get an Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}