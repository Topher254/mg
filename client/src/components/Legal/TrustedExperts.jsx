import React from 'react';
import { Check, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router';

export default function TrustedExperts() {
  const features = [
    { text: "Licensed & fully insured contractors" },
    { text: "15+ years of basement renovation experience" },
    { text: "Complete permit handling & code compliance" },
    { text: "Transparent pricing with no hidden fees" },
    { text: "Quality materials & expert craftsmanship" },
    { text: "On-time project completion guarantee" },
    { text: "Full warranty on all workmanship" },
    { text: "Local team serving Brampton & Mississauga" }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Permit Approval" },
    { value: "5★", label: "Customer Rating" }
  ];

  const serviceAreas = [
    {
      city: "Brampton",
      icon: MapPin,
      locations: [
        "Heart Lake",
        "Downtown Brampton",
        "Castlemore",
        "Bramalea",
        "Springdale",
        "Gore Road"
      ]
    },
    {
      city: "Mississauga",
      icon: MapPin,
      locations: [
        "Square One",
        "Streetsville",
        "Erin Mills",
        "Port Credit",
        "Meadowvale",
        "Clarkson"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Trusted Experts Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Basement Renovation Experts
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              MG Tile & Stone has been transforming basements into beautiful, legal living spaces for over 15 years. We understand the unique requirements of basement renovations in Ontario and ensure every project meets or exceeds building codes.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Get an Estimate
            </button>
            </Link>
          </div>

          {/* Right Stats Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              SERVICE AREAS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proudly Serving the GTA
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in legal basement renovations throughout Brampton, Mississauga, and surrounding areas in the Greater Toronto Area.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {serviceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.city}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {area.locations.map((location, locIndex) => (
                      <div key={locIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center text-gray-600">
            Don't see your area? We may still service your location.{' '}
            <Link to="/contact" className="text-red-600 font-semibold hover:underline">
              Contact us to confirm.
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}