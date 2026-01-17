import React, { useState, useEffect } from 'react';
import { Shield, FileCheck, Hammer, Clock, Award, Users, Building, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import legal2 from '../../assets/legal2.jpeg';
import legal3 from '../../assets/legal6.jpeg';
import legal4 from '../../assets/legal4.jpeg';
import legal5 from '../../assets/legal5.jpeg';
import legal1vid from '../../assets/legal1.mp4';
import legal2vid from '../../assets/legal2.mp4';
import legal3vid from '../../assets/legal3.mp4';

export default function TrustedExperts() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [legal1vid, legal2vid, legal3vid];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const legalCompliance = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Every project backed by comprehensive liability insurance and valid contractor licenses. Your investment is protected from day one.",
      highlight: "WSIB Compliant"
    },
    {
      icon: FileCheck,
      title: "Permit Specialists",
      description: "We handle all municipal permits, building code compliance, and inspection scheduling. Zero hassle for you.",
      highlight: "100% Approval Rate"
    },
    {
      icon: Building,
      title: "Code-Compliant Construction",
      description: "Egress windows, proper ceiling height, electrical, plumbing—every detail meets or exceeds Ontario Building Code requirements.",
      highlight: "OBC Certified"
    }
  ];

  const processCards = [
    {
      step: "01",
      title: "Site Assessment",
      description: "We evaluate your basement's structural integrity, measure ceiling heights, check for moisture issues, and identify any code compliance challenges before starting.",
      icon: AlertCircle,
      image: legal2
    },
    {
      step: "02",
      title: "Design & Permits",
      description: "Custom layout designed to maximize space while meeting all legal requirements. We submit and manage all permit applications with the city.",
      icon: FileCheck,
      image: legal3
    },
    {
      step: "03",
      title: "Expert Construction",
      description: "Our licensed team handles framing, electrical, plumbing, HVAC, insulation, drywall, and finishing—all to code, all on schedule.",
      icon: Hammer,
      image: legal4
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "We coordinate all required inspections, address any feedback immediately, and don't finish until you have full certification and approval.",
      icon: CheckCircle,
      image: legal5
    }
  ];

  const expertise = [
    {
      icon: Users,
      title: "Dedicated Project Manager",
      detail: "Single point of contact throughout your renovation"
    },
    {
      icon: Clock,
      title: "Timeline Guarantee",
      detail: "Clear milestones with completion date commitments"
    },
    {
      icon: Award,
      title: "Warranty Protection",
      detail: "Comprehensive coverage on all workmanship and materials"
    },
    {
      icon: Zap,
      title: "Fast-Track Permits",
      detail: "Established relationships with local building departments"
    }
  ];

  return (
    <div className="">
      {/* Video Showcase Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Legal Basement Renovations Done Right
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Fully permitted, code-compliant transformations that add real value to your home. We don't cut corners—we build legal living spaces that protect your investment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-600">15+ years transforming basements across the GTA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-600">Licensed contractors & full permit handling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-600">Ontario Building Code experts</span>
                </div>
              </div>
            </div>

            {/* Right - Rotating Videos */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              {videos.map((video, idx) => (
                <video
                  key={idx}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    activeVideo === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <source src={video} type="video/mp4" />
                </video>
              ))}
              <div className="absolute bottom-6 left-6 flex gap-2">
                {videos.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${
                      activeVideo === idx ? 'w-12 bg-red-600' : 'w-8 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Cards */}
      <section className="py-24 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className=" text-xl mb-16 text-center">
            Why Legal Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {legalCompliance.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-3xl border-red-500 border-2 p-8 hover:border-red-600 transition-all group">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Cards - Different Designs */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl mb-4 text-center">
            Our Process
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            From initial assessment to final inspection, we manage every detail of your legal basement renovation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processCards.map((card, idx) => {
              const Icon = card.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`group ${isEven ? 'md:translate-y-12' : ''}`}>
                  {/* Card Style 1 - Clean with Side Image */}
                  {idx === 0 && (
                    <div className=" border border-zinc-800 rounded-3xl overflow-hidden h-96 flex">
                      <div className="w-2/5 relative">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                          
                        </div>
                      </div>
                      <div className="w-3/5 p-8 flex flex-col justify-center">
                        <span className="text-sm font-bold text-red-600 mb-2">STEP {card.step}</span>
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Card Style 2 - Minimal with Top Badge */}
                  {idx === 1 && (
                    <div className=" border-2 border-red-600 rounded-3xl p-8 h-96 relative overflow-hidden">
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-5xl font-black text-red-600">{card.step}</span>
                          
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                      </div>
                      <div className=" w-full p-4 h-48 ">
                        <img src={card.image} alt={card.title} className="w-full h-full rounded-xl object-cover" />
                      </div>
                    </div>
                  )}

                  {/* Card Style 3 - Horizontal Split */}
                  {idx === 2 && (
                    <div className=" border border-zinc-800 rounded-3xl overflow-hidden h-96 flex flex-col">
                      <div className="flex-1 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="text-xs font-bold text-red-600 mb-2 block">STEP {card.step}</span>
                            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                          </div>
                          
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                      </div>
                      <div className="h-32">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}

                  {/* Card Style 4 - Large Number Design */}
                  {idx === 3 && (
                    <div className="border border-zinc-800 rounded-3xl p-8 h-96 relative overflow-hidden hover:border-red-600 transition-all">
                      <div className="absolute -top-4 -right-4 text-[200px] font-black text-red-500/30 leading-none">
                        {card.step}
                      </div>
                      <div className="relative z-10">
                       
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>
                        <div className="w-full h-48 rounded-xl overflow-hidden">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl mb-16 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="border border-zinc-800 rounded-2xl p-6 hover:border-red-600 transition-all group">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
    </div>
  );
}