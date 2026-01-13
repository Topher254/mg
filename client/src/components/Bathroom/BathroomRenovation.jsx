import React, { useState } from 'react';
import bath1 from '../../assets/bath1.jpg';
import bath2 from '../../assets/bath2.jpg';
import bath3 from '../../assets/bath3.jpg';
import bath4 from '../../assets/bath4.jpg';
import bath5 from '../../assets/bath5.jpg';

const BathroomRenovation = () => {
  const [activeTab, setActiveTab] = useState('common');

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Craftsmen' }
  ];

  const gallery = [bath1, bath2, bath3, bath4, bath5];

  return (
    <div className="min-h-screen 0">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-slate-900 to-black opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bath1})`, mixBlendMode: 'overlay' }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
           
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              On a mission to<br />
              <span className="text-red-500">Creating Beautiful Spaces</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Brampton's Bathroom Renovation Experts
            </p>
            <p className="text-lg text-gray-400 max-w-2xl">
              We don't just boast about our services. We do what we preach. Experience our bathroom renovations and witness the change.
            </p>
          </div>
        </div>
      </div>

     

      {/* Mission Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold  mb-6">
                Our <span className="text-red-500">Mission</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We love to walk the talk. Are you searching for reliable bathroom remodeling services? Your never-ending search for promising services ends here!
                </p>
                <p>
                  With years of experience and expertise in delivering bathroom transformation services to the loving people of Brampton, we are on top!
                </p>
                <p>
                  We use premium tools and techniques to deliver great and satisfactory results. You can stay relaxed while choosing us.
                </p>
                <p>
                  Our craftsmen mix their expertise with exclusive tools and methods to bring astonishing outcomes. Time is a more valuable resource than any other; we understand its importance, hence we deliver on time without being complacent about the quality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={bath2} alt="Bathroom" className="rounded-lg w-full h-64 object-cover" />
              <img src={bath3} alt="Bathroom" className="rounded-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default BathroomRenovation;