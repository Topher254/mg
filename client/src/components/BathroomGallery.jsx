import React, { useState, useEffect } from 'react';
// Import your images from assets
import bath1 from '../assets/bat1.jpeg';
import bath2 from '../assets/bat2.jpeg';
import bath3 from '../assets/bat3.jpeg';
import bath4 from '../assets/bat4.jpeg';
import bath5 from '../assets/bat5.jpeg';
import bath6 from '../assets/bat6.jpeg';
import bath7 from '../assets/bat7.jpeg';
import bath8 from '../assets/bat8.jpeg';
import bath9 from '../assets/bat9.jpeg';
import bath10 from '../assets/bat10.jpeg';
import bath11 from '../assets/bat11.jpeg';
import bath12 from '../assets/bat12.jpeg';
import bath13 from '../assets/bat13.jpeg';
import bath14 from '../assets/bat14.jpeg';
import bath15 from '../assets/bat15.jpeg';

export default function BathroomGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Images array using local assets
  const images = [
    bath1, bath2, bath3, bath4, bath5,
    bath6, bath7, bath8, bath9, bath10,
    bath11, bath12, bath13, bath14, bath15
  ];

  const galleryItems = [
    {
      id: 1,
      image: images[0],
      title: "Modern Minimalist Suite",
      category: "modern",
      description: "Sleek design with premium fixtures"
    },
    {
      id: 2,
      image: images[1],
      title: "Luxury Spa Retreat",
      category: "luxury",
      description: "High-end materials and finishes"
    },
    {
      id: 3,
      image: images[2],
      title: "Classic Elegance",
      category: "classic",
      description: "Timeless traditional styling"
    },
    {
      id: 4,
      image: images[3],
      title: "Contemporary Comfort",
      category: "modern",
      description: "Smart storage solutions"
    },
    {
      id: 5,
      image: images[4],
      title: "Master Bath Transformation",
      category: "luxury",
      description: "Complete renovation showcase"
    },
    {
      id: 6,
      image: images[5],
      title: "Small Space Solution",
      category: "modern",
      description: "Maximizing compact bathrooms"
    },
    {
      id: 7,
      image: images[6],
      title: "Custom Tile Artistry",
      category: "classic",
      description: "Intricate tile patterns"
    },
    {
      id: 8,
      image: images[7],
      title: "Walk-In Shower Design",
      category: "luxury",
      description: "Frameless glass enclosure"
    },
    {
      id: 9,
      image: images[8],
      title: "Double Vanity Setup",
      category: "modern",
      description: "Custom cabinetry work"
    },
    {
      id: 10,
      image: images[9],
      title: "Accessible Bathroom",
      category: "modern",
      description: "Safety-focused design"
    },
    {
      id: 11,
      image: images[10],
      title: "Natural Stone Features",
      category: "luxury",
      description: "Marble and granite accents"
    },
    {
      id: 12,
      image: images[11],
      title: "Full Renovation",
      category: "classic",
      description: "Before and after transformation"
    },
    {
      id: 13,
      image: images[12],
      title: "Modern Minimalist",
      category: "modern",
      description: "Clean lines and simple elegance"
    },
    {
      id: 14,
      image: images[13],
      title: "Spa-Inspired Luxury",
      category: "luxury",
      description: "Resort-style bathroom retreat"
    },
    {
      id: 15,
      image: images[14],
      title: "Traditional Charm",
      category: "classic",
      description: "Classic design with modern amenities"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'modern', label: 'Modern' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'classic', label: 'Classic' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Split items into two layers
  const topLayerItems = filteredItems.slice(0, Math.ceil(filteredItems.length / 2));
  const bottomLayerItems = filteredItems.slice(Math.ceil(filteredItems.length / 2));

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      setIsAnimating(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Transform Your Space
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our gallery of stunning bathroom renovations completed across Brampton. Each project showcases our commitment to quality craftsmanship, innovative design, and customer satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">3+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">5★</div>
            <div className="text-gray-600 text-sm">Customer Reviews</div>
          </div>
        </div>

        {/* Two Layer Gallery */}
        <div className="relative mb-16 overflow-hidden">
          {/* Top Layer - Flowing from left to right */}
          <div className={`flex gap-6 mb-6 ${
            isAnimating 
              ? 'animate-[flowRight_25s_linear_infinite]' 
              : 'animate-[flowRight_30s_linear_infinite]'
          }`}>
            {topLayerItems.concat(topLayerItems).map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                    <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Layer - Flowing from right to left (staggered) */}
          <div className={`flex gap-6 ${
            isAnimating 
              ? 'animate-[flowLeft_30s_linear_infinite]' 
              : 'animate-[flowLeft_35s_linear_infinite]'
          }`}>
            {bottomLayerItems.concat(bottomLayerItems).map((item, index) => (
              <div
                key={`bottom-${item.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                    <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-gray-300">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}

       

      
      </div>

      {/* Add CSS animation keyframes in style tag */}
      <style jsx>{`
        @keyframes flowRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes flowLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[flowRight_25s_linear_infinite\\],
          .animate-\\[flowRight_30s_linear_infinite\\],
          .animate-\\[flowLeft_30s_linear_infinite\\],
          .animate-\\[flowLeft_35s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}