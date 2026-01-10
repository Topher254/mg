import React from 'react';
import logo from '../assets/logo.png'


export default function CTAFormSection() {
  return (
    <section className="relative bg-linear-to-br from-red-600 via-red-500 to-red-600 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready To Start Your Bathroom Renovation in Brampton?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a free, no-obligation estimate today! Our experts are ready to transform your space into the bathroom of your dreams.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Fast response within 24 hours</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Free 3D design visualization</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">No pressure, honest pricing</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <a href="tel:647-686-6313" className="flex items-center gap-2 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">Or Call Us:</p>
                  <p className="text-xl font-bold">647-686-6313</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <div className="mb-6 items-center">
            <div className="flex justify-center items-center">
                        <a href="/" className="flex items-center space-x-2">
                          
                        <img src={logo} className='w-35 my-4'/>
            
                        </a>
                      </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Estimate</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name*</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number*</label>
                <input 
                  type="tel" 
                  placeholder="(647) 123-4567" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address*</label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Budget</label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none">
                  <option>Select your budget range</option>
                  <option>$10,000 - $20,000</option>
                  <option>$20,000 - $30,000</option>
                  <option>$30,000 - $40,000</option>
                  <option>$40,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description*</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your bathroom renovation project..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-500 duration-300 cursor-pointer hover:bg-red-600 text-white px-8 py-4 rounded-full cursor-pointer font-bold text-lg transition-all hover:shadow-xl transform hover:scale-105"
              >
                Get My Free Estimate →
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}