import React from 'react';
import bath1 from '../assets/bat1.jpeg';
import bath2 from '../assets/bat2.jpeg';
import bath3 from '../assets/bat3.jpeg';
import bath4 from '../assets/bat4.jpeg';
import bath5 from '../assets/bat5.jpeg';
import bath6 from '../assets/bat6.jpeg';

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
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Renovation Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get all the information you need about our comprehensive bathroom renovation services. Explore our year-over-year commitment to delivering exceptional bathroom transformations in Brampton and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Get an Estimate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Fraud Awareness Style */}
        <div className="border-t-2 border-gray-200 pt-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Quality Assurance & Customer Protection
            </h2>
            <p className="text-lg text-gray-600">
              Beware of unlicensed contractors and remain vigilant by understanding the standards of professional bathroom renovation services and the tips on how to choose the right contractor for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src={bath1}
                  alt="Licensed Contractors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Licensed & Insured Professionals
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Work with fully licensed and insured bathroom renovation contractors. MG Tile & Stone ensures all craftsmen are certified professionals with over 30 years of combined experience in the Brampton area.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors text-sm">
                  Get an Estimate
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src={bath2}
                  alt="Transparent Pricing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Transparent & Fair Pricing
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Avoid hidden costs and price changes with our upfront, transparent pricing model. We provide detailed quotes with no surprises. Get a free cost estimate and understand exactly what you're paying for before work begins.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors text-sm">
                  Get an Estimate
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src={bath3}
                  alt="Quality Materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Authentic Quality Materials
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beware of substandard materials and shortcuts. We source only authentic, high-quality materials from trusted vendors. Every product comes with manufacturer warranties and our commitment to excellence in your bathroom renovation.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors text-sm">
                  Get an Estimate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Brampton's Best Bathroom Renovation Services?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who have transformed their bathrooms with MG Tile & Stone. Contact us today for your free consultation and cost estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
              Get an Estimate
            </button>
            <span className="text-gray-600">or call us today:</span>
            <a 
              href="tel:647-686-6313" 
              className="text-red-500 font-bold text-xl hover:text-red-600 transition-colors"
            >
              647-686-6313
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}