import React from 'react';
import SpinningCarousel from './SpinningCarousel';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bathroom Renovations,<br />Made Easy
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Bathroom Renovation Brampton and the GTA
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-red-600 shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Bathroom remodeling from <span className="text-red-600 font-semibold">$9,900</span> and kitchens from <span className="text-red-600 font-semibold">$10,900</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-red-600 shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Total design, materials, and construction handling
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-red-600 shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Fast Turnaround – average <span className="text-red-600 font-semibold">7-day bathrooms, 3-week kitchens</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full cursor-pointer font-semibold text-lg transition-all hover:shadow-lg">
                Get Your Free Estimate!
              </button>
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full cursor-pointer font-semibold text-lg transition-all">
                Schedule a call
              </button>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="text-red-600 shrink-0">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">REFER & EARN UPTO <span className="text-red-600">$3,000 CASHBACK!</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-12">
    <div className="rounded-xl overflow-hidden  bg-transparent">
      <div className="aspect-square w-full">
        <SpinningCarousel/>
      </div>
    </div>
  </div>
            
            
        </div>
      </div>

      {/* Features Section Below */}
    <div className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4 text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                FAIR PRICING
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in fair pricing and delivering the worth against what we charge.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4 text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                COMPREHENSIVE PACKAGE
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete service from design to premium finishing and after-sales support.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4 text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                USE OF TECHNOLOGY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Latest software for design and 3D modeling to create your perfect space.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4 text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                QUALITY MATERIALS
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High-quality materials from trusted vendors for lasting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}