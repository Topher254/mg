import React, { useState } from 'react';
import bath1 from '../assets/bat1.jpeg'
import bath2 from '../assets/bat10.jpeg'
import bath3 from '../assets/bat3.jpeg'

export default function WhatsNew() {
  const [budget, setBudget] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('0.0');

  const calculateEstimate = (amount) => {
    setBudget(amount);
    // Simple calculation: rough estimate based on budget ranges
    // For bathroom renovation, typical cost is $200-300 per sq ft
    // Average bathroom is 40-100 sq ft
    if (amount) {
      const value = parseFloat(amount);
      if (value < 5000) {
        setEstimatedTime('1-2 weeks');
      } else if (value < 15000) {
        setEstimatedTime('2-4 weeks');
      } else if (value < 30000) {
        setEstimatedTime('4-6 weeks');
      } else {
        setEstimatedTime('6-8 weeks');
      }
    } else {
      setEstimatedTime('0.0');
    }
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What's New</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest initiatives, and services that have been innovated to transform the homes of Brampton residents and beyond.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Special Offer */}
          <div className="bg-red-500 rounded-lg shadow-lg overflow-hidden text-white">
            <div className="h-64 bg-white/10">
              <img 
                src={bath3}
                alt="Winter Special Promotion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">Winter Special</h3>
                <h4 className="text-xl font-semibold">2025 Renovation Event</h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-lg font-semibold">
                  Book Your Bathroom Renovation. Get Premium Upgrades. Save Big!
                </p>
                <p className="text-sm">
                  Schedule your consultation and renovation between January 12th and March 31st, 2026 and receive exclusive benefits.
                </p>
              </div>

              <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Find Out More
              </button>
            </div>
          </div>

          {/* Card 2 - Free Estimate */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img src={bath2} className='w-full object-cover h-full'/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Cost Estimate</h3>
              <p className="text-gray-700 mb-4">
                Get a comprehensive, no-obligation quote for your bathroom renovation project
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Call us at <span className="font-semibold text-red-500">647-686-6313</span> to schedule your free consultation
              </p>
              <button className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                Get Your Estimate
              </button>
            </div>
          </div>

       {/* What's New Component */}
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="p-6">
    <h3 className="text-2xl font-bold text-red-500 mb-4">
      What's New at MG Tile & Stone
    </h3>

    <p className="text-gray-700 mb-6">
      Explore our latest initiatives and innovative services transforming the homes of Brampton residents and beyond.
    </p>

    {/* Winter Special Promotion */}
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-t-4 border-red-500">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Winter Special Promotion</h4>
      <p className="text-gray-700 mb-2">
        Book your bathroom renovation between <span className="font-bold">Jan 12 – Mar 31, 2026</span> and enjoy premium upgrades while saving big!
      </p>
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-colors">
        Find Out More
      </button>
    </div>

    {/* Free Cost Estimate */}
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-b-4 border-red-500">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Free Cost Estimate</h4>
      <p className="text-gray-700 mb-2">
        Get a comprehensive, no-obligation quote for your bathroom renovation project.
      </p>
      <p className="text-gray-700 mb-2">
        Call us at <span className="font-bold">647-686-6313</span> to schedule your free consultation.
      </p>
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-colors">
        Get Your Estimate
      </button>
    </div>

  
  </div>
</div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready To Start Your Bathroom Renovation in Brampton?
          </h3>
          <p className="text-gray-600 mb-6">
            Transform your bathroom into the paradise you deserve with Brampton's trusted renovation experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
              Get an Estimate
            </button>
            <span className="text-gray-600">or call us:</span>
            <a href="tel:647-686-6313" className="text-red-500 font-bold text-lg hover:text-red-600">
              647-686-6313
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}