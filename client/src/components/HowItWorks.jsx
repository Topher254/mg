import React from 'react';
import bath1 from '../assets/estimate.jpg';
import bath2 from '../assets/material.jpg';
import bath3 from '../assets/bath3.jpg';
import bath4 from '../assets/bat11.jpeg';
import bath5 from '../assets/bat10.jpeg';

const HowItWorks = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How Does it Work?
          </h2>
          <p className="text-lg text-gray-600">
            Experience the Most Seamless and Stress-Free Renovation Services
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img 
                src={bath1} 
                alt="Get an Estimate"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                01
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 mt-6">
              Get an Estimate
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discuss your project with our consultants and receive a free, fast quote. Our streamlined approach provides prompt and accurate pricing.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img 
                src={bath2} 
                alt="Construction Planning"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                02
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 mt-6">
              Construction and Materials Planning
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our designers plan your construction. Select from pre-designed alternatives or personalized fixtures and finishes from our collection.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img 
                src={bath3} 
                alt="Confirm Design"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                03
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 mt-6">
              Confirm your Design
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our 3D renders allow you to visualize your space. Our tools let you visualize and improve your ideal makeover, ensuring that it stays within your budget.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img 
                src={bath4} 
                alt="Efficient Delivery"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                04
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 mt-6">
              Efficient Fixtures and Finishes Delivery
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Avoid traditional retail inconveniences as our team orders supplies directly from vendors, resulting in quicker delivery and cost savings for you.
            </p>
          </div>

          {/* Step 5 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <img 
                src={bath5} 
                alt="Expert Installation"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                05
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 mt-6">
              Let our Experts Bring your Vision to Life
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Count on our experienced personnel for high-quality workmanship. Our staff has over 30 years of experience and assures great results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;