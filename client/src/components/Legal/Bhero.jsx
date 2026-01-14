import React from 'react';
import { Home, FileText, Wrench, UtensilsCrossed, Lightbulb, Hammer } from 'lucide-react';

export default function Bhero() {
  const services = [
    {
      icon: Home,
      title: "Legal Basement Apartments",
      description: "Complete basement conversions with all permits and inspections handled. Create a fully legal rental unit."
    },
    {
      icon: FileText,
      title: "Permit & Inspection Services",
      description: "We navigate city requirements, pull permits, and ensure your basement meets all building codes."
    },
    {
      icon: Wrench,
      title: "Full Renovations",
      description: "From framing to finishing, we handle every aspect of your basement transformation."
    },
    {
      icon: UtensilsCrossed,
      title: "Kitchen & Bathroom",
      description: "Expert plumbing and installation for basement kitchens and full bathrooms."
    },
    {
      icon: Lightbulb,
      title: "Electrical & HVAC",
      description: "Proper electrical panels, lighting, heating, and ventilation for comfortable living."
    },
    {
      icon: Hammer,
      title: "Custom Tile & Stone",
      description: "Premium tile and stone work for floors, backsplashes, and feature walls."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Basement Renovation Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From permits to finishing touches, we provide end-to-end basement renovation services that meet all legal requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}