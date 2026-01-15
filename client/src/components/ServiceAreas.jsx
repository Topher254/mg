import React, { useState } from 'react';
import { MapPin, Phone, Navigation, ExternalLink} from 'lucide-react';
import { Link } from 'react-router';

export default function ServiceAreas() {
  const [hoveredCity, setHoveredCity] = useState(null);

  const offices = [
    {
      name: "MG Tile and Stone Office",
      type: "(by appt. only)",
      phone: "647-686-6313",
      address: "2 County Court Blvd., Suite 400, Brampton, Ontario, L6W 3W8"
    },
    {
      name: "Bathroom Showroom",
      type: "(by appt. only)",
      phone: "647-686-6313",
      address: "2 County Court Blvd., Suite 400, Brampton, Ontario, L6W 3W8"
    },
    {
      name: "Legal Basement Office",
      type: "(by appt. only)",
      phone: "647-686-6313",
      address: "2 County Court Blvd., Suite 400, Brampton, Ontario, L6W 3W8"
    }
  ];

  const cities = [
    "Ajax", "Aurora", "Barrie", "Bolton", "Bowmanville", "Bradford", 
    "Brampton", "Brantford", "Brooklin", "Burlington", "Caledon", 
    "Courtice", "Etobicoke", "Georgetown", "Hamilton", "Innisfil", 
    "King City", "Kleinburg", "Markham", "Milton", "Mississauga", 
    "Newmarket", "North York", "Oakville", "Orangeville", "Oshawa", 
    "Pickering", "Richmond Hill", "Scarborough", "Stouffville", 
    "Toronto", "Unionville", "Uxbridge", "Vaughan", "Whitby", "Woodbridge"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop" 
            alt="GTA Map" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-16">
          <div className="flex items-center gap-2 mb-4 text-red-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Coverage Area</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            Servicing the Greater<br />Toronto Area
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Professional renovations across the GTA. From permits to finishing, we bring quality to your neighborhood.
          </p>
        </div>
      </div>

      {/* Office Locations */}
      <div className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-light text-neutral-900 mb-12">Our locations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group">
                <div className="border border-neutral-200 p-6 hover:border-red-600 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-neutral-900 mb-1">
                      {office.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{office.type}</p>
                  </div>
                  
                  <a 
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 text-neutral-900 hover:text-red-600 transition-colors mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{office.phone}</span>
                  </a>
                  
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {office.address}
                  </p>
                  
                  <a 
                    href="https://share.google/GLhKWDL07HRbRHOxB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-900 hover:text-red-600 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-neutral-900 mb-4">
            Cities we serve
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            Providing renovation services throughout the Greater Toronto Horseshoe Area. If your city isn't listed, contact us—we likely service your area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {cities.map((city, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
              className={`
                border border-neutral-200 p-6 text-center transition-all cursor-default
                ${hoveredCity === city ? 'bg-red-600 text-white border-red-600' : 'bg-white text-neutral-900 hover:border-red-600'}
              `}
            >
              <span className="text-sm font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Don't see your area?
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We're constantly expanding our service coverage. Contact us to discuss your basement renovation project—we may be able to accommodate your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:647-686-6313"
                className="bg-red-600 rounded-full text-white px-8 py-3 text-sm tracking-wide hover:bg-red-700 transition-colors"
              >
                CALL 647-686-6313
              </a>
              <Link to='/contact'>
              <button className="border rounded-full border-neutral-900 text-neutral-900 px-8 py-3 text-sm tracking-wide  hover:text-gray-600 transition-colors">
                REQUEST CONSULTATION
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 bg-neutral-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290686436!2d-79.51814385!3d43.718401699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        ></iframe>
      </div>
    </div>
  );
}