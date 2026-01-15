import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function CTAFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    budget: '',
    projectDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email content
    const emailSubject = `New Estimate Request - ${formData.firstName} ${formData.lastName}`;
    
    const emailBody = `
New Estimate Request Details:
─────────────────────────────

 CLIENT INFORMATION
─────────────────────────────
• First Name: ${formData.firstName}
• Last Name: ${formData.lastName}
• Phone: ${formData.phone}
• Email: ${formData.email}

 BUDGET
─────────────────────────────
• Budget Range: ${formData.budget}

 PROJECT DETAILS
─────────────────────────────
• Project Description:
${formData.projectDescription}

─────────────────────────────
 Request Submitted: ${new Date().toLocaleString()}
 Service Area: Brampton & GTA
Contact Back: ${formData.phone}
 Email: ${formData.email}
─────────────────────────────

This estimate request was submitted through the MG Tile & Stone website.
Please follow up within 24 hours as promised.

`;

    // Create mailto link
    const mailtoLink = `mailto:info@mgtileandstone.ca?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        budget: '',
        projectDescription: ''
      });
      setIsSubmitting(false);
      
      // Show success message
      alert('Thank you! Your email client should open with your request. Please send the email to receive your free estimate.');
    }, 500);
  };

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-600 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">FREE ESTIMATE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready To Start Your Renovation in Brampton?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a free, no-obligation estimate today! Our experts are ready to transform your space.
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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Bathroom & Legal Basement Specialists</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <a href="tel:647-686-6313" className="flex items-center gap-2 text-white hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">Prefer to call?</p>
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
                  <img src={logo} className='w-35 my-4' alt="MG Tile & Stone Logo" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get Your Free Estimate</h3>
              <p className="text-gray-600 text-center">Fill out the form below and we'll email you back within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="(647) 123-4567" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address*
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john.doe@example.com" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Budget
                </label>
                <select 
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select your budget range</option>
                  <option value="$10,000 - $15,000">$10,000 - $15,000</option>
                  <option value="$15,000 - $20,000">$15,000 - $20,000</option>
                  <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                  <option value="$30,000 - $40,000">$30,000 - $40,000</option>
                  <option value="$40,000+">$40,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description*
                </label>
                <textarea 
                  name="projectDescription"
                  rows="4" 
                  placeholder="Tell us about your project... Include details like:
• Type of renovation (Bathroom / Legal Basement)
• Room size / dimensions
• Desired timeline
• Specific requirements or special requests"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none resize-none"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Please specify if it's a bathroom renovation or legal basement project
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-red-400' : 'bg-red-500 hover:bg-red-600'} text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl transform hover:scale-105 duration-300`}
              >
                {isSubmitting ? 'Opening Email...' : 'Get My Free Estimate →'}
              </button>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">How it works:</span> After submitting, your email client will open with your request pre-filled. Simply click "Send" to submit your estimate request to <span className="text-red-600">info@mgtileandstone.ca</span>
                </p>
              </div>

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