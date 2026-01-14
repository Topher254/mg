import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="MG Tile & Stone Logo" className="w-40" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MG Tile & Stone simplifies renovations by combining design, sourcing, and management under one roof.
              </p>
              <p className="text-gray-600 text-sm">
                2 County Court Blvd., Suite 400, Brampton, Ontario, L6W 3W8
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/how-it-works" className="text-gray-600 hover:text-red-500 transition">How it works</Link></li>
                <li><Link to="/gallery" className="text-gray-600 hover:text-red-500 transition">Gallery</Link></li>
                <li><Link to="/testimonials" className="text-gray-600 hover:text-red-500 transition">Testimonials</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-red-500 transition">Blog</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-red-500 transition">About Us</Link></li>
                <li><Link to="/sitemap" className="text-gray-600 hover:text-red-500 transition">Sitemap</Link></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/bathrooms" className="text-gray-600 hover:text-red-500 transition">Bathrooms</Link></li>
                <li><Link to="/kitchens" className="text-gray-600 hover:text-red-500 transition">Kitchens</Link></li>
                <li><Link to="/legal-basement" className="text-gray-600 hover:text-red-500 transition">Legal Basements</Link></li>
                <li><Link to="/condos" className="text-gray-600 hover:text-red-500 transition">Condos</Link></li>
                <li><Link to="/flooring" className="text-gray-600 hover:text-red-500 transition">Flooring</Link></li>
                <li><Link to="/design" className="text-gray-600 hover:text-red-500 transition">Design Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4 text-white">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                    <Facebook className="w-5 h-5 text-white"/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                    <Instagram className="w-5 h-5 text-white"/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                    <Twitter className="w-5 h-5 text-white"/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                    <Youtube className="w-5 h-5 text-white"/>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                    <Linkedin className="w-5 h-5 text-white"/>
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-600 text-sm">© Copyright 2026 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom CTA Bar */}
      <div className="bg-gray-100 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            <p className="text-sm md:text-base">
              <span className="font-bold text-red-500">Book a next day</span> <span className="font-semibold">appointment!</span>
            </p>

            <div className="flex items-center gap-4 text-red-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className=" font-semibold text-sm md:text-base">0% INTEREST RATE FOR 12 MONTHS</span>
            </div>

            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all hover:shadow-lg">
              Get a Free Estimate!
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Links */}
      <div className="bg-gray-900 border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-red-500 transition">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-red-500 transition">Chat with Our AI assistant</Link>
          </div>
        </div>
      </div>
    </>
  );
}
