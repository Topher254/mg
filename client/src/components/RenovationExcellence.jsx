import React from 'react';
import bath1 from '../assets/bat1.jpeg';
import bath2 from '../assets/bat11.jpeg';
import bath3 from '../assets/bat3.jpeg';
import bath4 from '../assets/bat14.jpeg';
import bath5 from '../assets/bat13.jpeg';
import bath6 from '../assets/bath5.jpg';

export default function RenovationExcellence() {
  const services = [
    {
      id: 1,
      image: bath1,
      title: "Complete Bathroom Remodeling",
      description: "Transform your entire bathroom space with our comprehensive remodeling services. From floor to ceiling, we handle every aspect of your renovation project with precision and care. Our expert craftsmen deliver stunning results that enhance both functionality and aesthetics.",
      features: ["Custom Design", "Premium Materials", "Professional Installation"]
    },
    {
      id: 2,
      image: bath2,
      title: "Luxury Tile & Stone Installation",
      description: "Elevate your bathroom with exquisite tile and stone work from MG Tile & Stone. We specialize in premium material selection and flawless installation techniques. Our team brings years of expertise in creating beautiful, durable surfaces that stand the test of time.",
      features: ["Marble & Granite", "Porcelain & Ceramic", "Custom Patterns"]
    },
    {
      id: 3,
      image: bath3,
      title: "Modern Fixture Upgrades",
      description: "Upgrade your bathroom fixtures with contemporary designs that blend style and functionality. We offer a wide selection of high-quality faucets, showerheads, vanities, and lighting solutions. Keep up to date with the latest trends while ensuring water efficiency and longevity.",
      features: ["Eco-Friendly Options", "Designer Collections", "Smart Technology"]
    },
    {
      id: 4,
      image: bath4,
      title: "Custom Vanity Design",
      description: "Create the perfect vanity solution tailored to your space and storage needs. Our custom vanity designs maximize functionality while adding elegance to your bathroom. From traditional to contemporary styles, we craft vanities that become the centerpiece of your renovation.",
      features: ["Bespoke Cabinetry", "Quartz Countertops", "Integrated Storage"]
    },
    {
      id: 5,
      image: bath5,
      title: "Shower & Tub Renovation",
      description: "Experience spa-like luxury with our shower and tub renovation services. Whether you're converting a tub to a walk-in shower or installing a luxurious soaking tub, we deliver exceptional results. Our installations prioritize safety, accessibility, and aesthetic appeal.",
      features: ["Walk-In Showers", "Frameless Glass", "Therapeutic Tubs"]
    },
    {
      id: 6,
      image: bath6,
      title: "Accessible Bathroom Solutions",
      description: "Design a bathroom that's beautiful and accessible for everyone in your Brampton home. Our accessible bathroom renovations incorporate safety features without compromising on style. We specialize in creating barrier-free spaces that enhance independence and peace of mind.",
      features: ["Grab Bars & Rails", "Non-Slip Flooring", "Comfort Height Fixtures"]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-red-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-red-600 text-sm font-bold tracking-widest uppercase">Excellence in Every Detail</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Renovation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get all the information you need about our comprehensive bathroom renovation services. 
            Explore our year-over-year commitment to delivering exceptional transformations.
          </p>
        </div>

        {/* Service 1 - Diagonal Split Design */}
        <div className="mb-16 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 md:h-auto overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${services[0].image})`,
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
              <div className="absolute top-8 left-8 w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-xl">
                <span className="text-white text-3xl font-bold">01</span>
              </div>
            </div>
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {services[0].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[0].description}
              </p>
              <div className="space-y-3">
                {services[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-45 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 - Overlapping Image & Content */}
        <div className="mb-16 relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-2xl font-bold">02</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {services[1].title}
                  </h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {services[1].description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {services[1].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-white font-semibold text-sm">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:-ml-8 relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={services[1].image} alt={services[1].title} className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 - Card with Side Image Strip */}
        <div className="mb-16 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-10 md:p-12">
              <div className="flex items-start mb-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold mr-4">03</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {services[2].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {services[2].description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {services[2].features.map((feature, index) => (
                  <div key={index} className="bg-red-50 text-red-700 px-6 py-3 rounded-full font-semibold border-2 border-red-200">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 relative">
              <div 
                className="h-full min-h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${services[2].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4 - Floating Card Over Image */}
        <div className="mb-16 relative h-96 rounded-3xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${services[3].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative h-full flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-8 md:p-10 max-w-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold mb-4">04</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[3].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[3].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[3].features.map((feature, index) => (
                  <span key={index} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service 5 - Zigzag Layout */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-3xl transform -rotate-12"></div>
                <img 
                  src={services[4].image} 
                  alt={services[4].title}
                  className="relative z-10 rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <span className="text-red-600 text-4xl font-bold">05</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {services[4].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[4].description}
              </p>
              <div className="space-y-3">
                {services[4].features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service 6 - Split Diagonal Reverse */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold mb-4 w-fit">06</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                {services[5].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[5].description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {services[5].features.map((feature, index) => (
                  <div key={index} className="flex items-center  backdrop-blur-sm rounded-xl p-4 border border-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 md:h-auto overflow-hidden order-1 md:order-2">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${services[5].image})`,
                  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}