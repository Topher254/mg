import React from 'react';
import { Shield, FileCheck, Ruler, Zap, Wind, DoorOpen, Droplets, AlertCircle } from 'lucide-react';

export default function Bhero() {
  const heroImages = [
    'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop'
  ];

  const services = [
    {
      icon: FileCheck,
      title: "Permit Navigation",
      description: "We handle the bureaucracy so you don't have to. From initial applications to final inspections, we manage every regulatory requirement.",
      features: ["Zoning verification", "Building permit acquisition", "Code compliance review", "Inspection scheduling"]
    },
    {
      icon: DoorOpen,
      title: "Egress & Safety",
      description: "Legal basements require proper emergency exits. We install code-compliant egress windows and separate entrances.",
      features: ["Window well installation", "Emergency escape routes", "Fire-rated doors", "Independent access points"]
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete electrical infrastructure to support independent living spaces with proper capacity and safety measures.",
      features: ["Panel upgrades", "Circuit distribution", "Smoke detectors & alarms", "Lighting installation"]
    },
    {
      icon: Wind,
      title: "HVAC & Ventilation",
      description: "Climate control and air quality systems that meet residential standards for comfortable, healthy living.",
      features: ["Independent heating", "Fresh air intake", "Proper ventilation", "Temperature control"]
    },
    {
      icon: Droplets,
      title: "Plumbing & Drainage",
      description: "Full plumbing systems for bathroom facilities, including proper drainage and water supply lines.",
      features: ["Bathroom rough-in", "Drainage systems", "Water supply lines", "Fixture installation"]
    },
    {
      icon: Ruler,
      title: "Space Optimization",
      description: "Strategic framing and layout design to maximize usable space while maintaining code requirements for ceiling heights and room sizes.",
      features: ["Ceiling height compliance", "Room layout planning", "Storage solutions", "Functional design"]
    }
  ];

  const legalRequirements = [
    "Minimum 7-foot ceiling height in living areas",
    "Egress windows meeting size requirements",
    "Separate entrance from main dwelling",
    "Independent HVAC and electrical systems",
    "Proper fire separation between units",
    "Adequate natural light and ventilation"
  ];

  return (
    <div className="bg-neutral-50">
      {/* Minimal Hero */}
      <div className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 text-sm text-neutral-600">
              <span>Legal Basement Conversions</span>
            </div>
            <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-6">
              Turn your basement into a legal rental unit
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Navigate permits, pass inspections, and create compliant rental income. We handle the technical complexity while you focus on the return.
            </p>
          </div>
        </div>
      </div>

      {/* Image Grid - Asymmetric */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 h-96 bg-neutral-200 overflow-hidden">
            <img src={heroImages[0]} alt="Basement project" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-5 h-96 bg-neutral-200 overflow-hidden">
            <img src={heroImages[1]} alt="Basement project" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-5 h-64 bg-neutral-200 overflow-hidden">
            <img src={heroImages[2]} alt="Basement project" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-7 h-64 bg-neutral-200 overflow-hidden">
            <img src={heroImages[3]} alt="Basement project" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Services - Clean List Layout */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-neutral-900 mb-16">What we handle</h2>
        
        <div className="space-y-1">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="border-t border-neutral-200 py-8 group">
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-4">
                    <div className="flex items-start gap-3">
                      {/* <IconComponent className="w-5 h-5 text-neutral-900 mt-1 flex-shrink-0" /> */}
                      <h3 className="text-xl font-medium text-neutral-900">{service.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-neutral-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-neutral-500">— {feature}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legal Requirements - Side by Side */}
      <div className="bg-red-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5" />
                <h2 className="text-2xl font-light">Legal requirements matter</h2>
              </div>
              <p className="text-white-400 leading-relaxed mb-8">
                Illegal basement apartments put homeowners at risk of fines, insurance voidance, and liability. They also create unsafe conditions for tenants. A legal conversion protects everyone and maximizes property value.
              </p>
              <p className="text-white-400 leading-relaxed">
                The permit process exists for safety—proper egress, structural integrity, fire separation, and livable conditions. We ensure your basement meets every standard.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-6 text-neutral-300">Code compliance checklist</h3>
              <div className="space-y-3">
                {legalRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 text-white">
                    <div className="w-1 h-1 bg-neutral-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}