import React from 'react';
import { MessageSquare, Hammer, CheckCircle, Truck, Workflow,  } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Get an Estimate",
      description: "Discuss your project with our consultants and receive a free, fast quote. Our streamlined approach provides prompt and accurate pricing."
    },
    {
      number: "02",
      icon: Hammer,
      title: "Construction and Materials Planning",
      description: "Our designers plan your construction. Select from pre-designed alternatives or personalized fixtures and finishes from our collection."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Confirm your Design",
      description: "Our 3D renders allow you to visualize your space. Our tools let you visualize and improve your ideal makeover, ensuring that it stays within your budget."
    },
    {
      number: "04",
      icon: Truck,
      title: "Efficient Fixtures and Finishes Delivery",
      description: "Avoid traditional retail inconveniences as our team orders supplies directly from vendors, resulting in quicker delivery and cost savings for you."
    },
    {
      number: "05",
      icon: Workflow,
      title: "Let our Experts Bring your Vision to Life",
      description: "Count on our experienced personnel for high-quality workmanship. Our staff has over 30 years of experience and assures great results."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How Does it Work?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the Most Seamless and Stress-Free Renovation Services
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-12 lg:mb-24">
                <div className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-6xl font-bold text-red-100 group-hover:text-red-200 transition-colors">
                          {step.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 my-8 lg:my-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready To Start Your Bathroom Renovation in Brampton?
            </h3>
            <p className="text-xl mb-8 text-red-50">
              Let's transform your space together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get an Estimate
              </button>
              <div className="flex items-center gap-2 text-white">
                <span className="text-lg">Or Call Us:</span>
                <a href="tel:647-686-6313" className="text-2xl font-bold hover:text-red-100 transition-colors">
                  647-686-6313
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}