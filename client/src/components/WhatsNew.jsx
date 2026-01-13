import React from 'react';
import bath1 from '../assets/bath5.jpg';
import bath2 from '../assets/bat16.jpeg';
import bath3 from '../assets/bat1.jpeg';

export default function WhatsNew() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What’s New at MG Tile & Stone
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest offers, services, and renovation solutions designed to elevate homes across Brampton and the GTA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-60">
              <img
                src={bath3}
                alt="Winter Renovation Special"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Winter Renovation Special
              </h3>
              <p className="text-gray-700 mb-4">
                Planning a bathroom renovation this winter? Schedule your project between
                <span className="font-semibold"> January 12 and March 31, 2026</span> and enjoy premium upgrades with added value.
              </p>
             
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-60">
              <img
                src={bath2}
                alt="Free Bathroom Estimate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Free Cost Estimate
              </h3>
              <p className="text-gray-700 mb-4">
                Receive a detailed, no-obligation estimate for your bathroom renovation.
                Our team will walk you through design options, timelines, and budget planning.
              </p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-60">
              <img
                src={bath1}
                alt="Bathroom Renovation Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smarter Renovation Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                We continue to improve how we deliver bathroom renovations—from
                3D design previews to streamlined material sourcing and efficient project management.
              </p>
              
            </div>
          </div>

        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Renovation Made Simple and Reliable
          </h3>
          <p className="text-gray-600">
            MG Tile & Stone delivers professional bathroom renovations with a focus on quality,
            transparency, and long-term value for homeowners in Brampton and surrounding areas.
          </p>
        </div>

      </div>
    </section>
  );
}
