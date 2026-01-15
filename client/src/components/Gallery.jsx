import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

// Bathroom Images
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
import bath16 from '../assets/bat16.jpeg';
import bath17 from '../assets/bat17.jpeg';

// Legal Basement Images
import legal1 from '../assets/legal1.jpg';
import legal2 from '../assets/legal2.jpg';
import legal3 from '../assets/legal3.jpg';
import legal4 from '../assets/legal4.jpg';
import legal5 from '../assets/legal5.jpg';
import legal6 from '../assets/legal6.jpg';
import legal7 from '../assets/legal7.jpg';
import legal8 from '../assets/legal8.jpg';
import legal9 from '../assets/legal9.jpg';
import legal10 from '../assets/legal10.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Project data
  const projects = [
    // Bathroom Projects
    { id: 1, title: "Modern Minimalist Bathroom", category: "bathroom", image: bath1, description: "Contemporary bathroom with clean lines and neutral tones", tags: ["modern", "minimalist", "tile"] },
    { id: 2, title: "Luxury Master Bathroom", category: "bathroom", image: bath2, description: "Spacious master bathroom with premium fixtures", tags: ["luxury", "master", "premium"] },
    { id: 3, title: "Compact Bathroom Makeover", category: "bathroom", image: bath3, description: "Smart space utilization in a small bathroom", tags: ["compact", "small-space", "smart"] },
    { id: 4, title: "Traditional Elegant Bathroom", category: "bathroom", image: bath4, description: "Classic design with timeless appeal", tags: ["traditional", "elegant", "classic"] },
    { id: 5, title: "Spa-Inspired Retreat", category: "bathroom", image: bath5, description: "Relaxing spa atmosphere with natural elements", tags: ["spa", "relaxing", "natural"] },
    { id: 6, title: "Modern Black & White Bathroom", category: "bathroom", image: bath6, description: "Bold contrast with contemporary fixtures", tags: ["modern", "contrast", "black-white"] },
    { id: 7, title: "Accessible Bathroom Design", category: "bathroom", image: bath7, description: "Barrier-free design with safety features", tags: ["accessible", "safety", "universal"] },
    { id: 8, title: "Glamorous Ensuite", category: "bathroom", image: bath8, description: "Luxurious ensuite with custom cabinetry", tags: ["glam", "ensuite", "custom"] },
    { id: 9, title: "Rustic Farmhouse Bathroom", category: "bathroom", image: bath9, description: "Warm farmhouse style with reclaimed materials", tags: ["rustic", "farmhouse", "warm"] },
    { id: 10, title: "Industrial Chic Bathroom", category: "bathroom", image: bath10, description: "Raw materials with sophisticated finishing", tags: ["industrial", "chic", "urban"] },
    { id: 11, title: "Transitional Style Bathroom", category: "bathroom", image: bath11, description: "Blend of traditional and contemporary elements", tags: ["transitional", "balanced", "elegant"] },
    { id: 12, title: "Maximalist Powder Room", category: "bathroom", image: bath12, description: "Bold patterns and vibrant colors", tags: ["maximalist", "bold", "colorful"] },
    { id: 13, title: "Zen Bathroom Oasis", category: "bathroom", image: bath13, description: "Calming space with Asian-inspired elements", tags: ["zen", "calming", "asian"] },
    { id: 14, title: "Art Deco Revival", category: "bathroom", image: bath14, description: "Geometric patterns and luxurious materials", tags: ["art-deco", "geometric", "luxury"] },
    { id: 15, title: "Coastal Inspired Bathroom", category: "bathroom", image: bath15, description: "Beachside vibes with light and airy feel", tags: ["coastal", "beach", "airy"] },
    { id: 16, title: "Modern Victorian Bathroom", category: "bathroom", image: bath16, description: "Classic elegance meets modern functionality", tags: ["victorian", "modern", "elegant"] },
    { id: 17, title: "Minimalist Wet Room", category: "bathroom", image: bath17, description: "Seamless design with level-access shower", tags: ["wet-room", "minimalist", "seamless"] },

    // Legal Basement Projects
    { id: 18, title: "Modern Basement Apartment", category: "legal-basement", image: legal1, description: "Complete legal basement conversion with separate entrance", tags: ["apartment", "rental", "modern"] },
    { id: 19, title: "Family Entertainment Basement", category: "legal-basement", image: legal2, description: "Multi-functional space with home theater", tags: ["entertainment", "family", "theater"] },
    { id: 20, title: "Compact Basement Suite", category: "legal-basement", image: legal3, description: "Efficient use of space in smaller basement", tags: ["compact", "efficient", "suite"] },
    { id: 21, title: "Luxury Basement Retreat", category: "legal-basement", image: legal4, description: "High-end finishes and custom features", tags: ["luxury", "retreat", "custom"] },
    { id: 22, title: "Open Concept Basement", category: "legal-basement", image: legal5, description: "Spacious layout with modern amenities", tags: ["open-concept", "spacious", "modern"] },
    { id: 23, title: "Basement Home Office Suite", category: "legal-basement", image: legal6, description: "Professional workspace with separate living area", tags: ["office", "work", "professional"] },
    { id: 24, title: "Contemporary Basement Design", category: "legal-basement", image: legal7, description: "Clean lines and modern aesthetics", tags: ["contemporary", "clean", "sleek"] },
    { id: 25, title: "Traditional Basement Conversion", category: "legal-basement", image: legal8, description: "Warm and inviting basement space", tags: ["traditional", "warm", "inviting"] },
    { id: 26, title: "Basement Gym & Spa", category: "legal-basement", image: legal9, description: "Wellness-focused basement design", tags: ["gym", "spa", "wellness"] },
    { id: 27, title: "Industrial Style Basement", category: "legal-basement", image: legal10, description: "Urban loft-style basement conversion", tags: ["industrial", "loft", "urban"] },
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Open image modal
  const openModal = (index) => {
    setSelectedImage(filteredProjects[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Navigate to next/previous image
  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex, filteredProjects]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Browse through our collection of stunning bathroom renovations and legal basement conversions in Brampton and the GTA
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-red-600 px-4 py-2 rounded-full">17+ Bathroom Projects</span>
            <span className="bg-green-600 px-4 py-2 rounded-full">10+ Legal Basements</span>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-0 z-10 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full transition-all ${selectedCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedCategory('bathroom')}
                className={`px-4 py-2 rounded-full transition-all ${selectedCategory === 'bathroom' ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                Bathrooms
              </button>
              <button
                onClick={() => setSelectedCategory('legal-basement')}
                className={`px-4 py-2 rounded-full transition-all ${selectedCategory === 'legal-basement' ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                Legal Basements
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by style, feature, or keyword..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {selectedCategory === 'all' ? 'All Projects' : 
             selectedCategory === 'bathroom' ? 'Bathroom Renovations' : 'Legal Basement Conversions'}
          </h2>
          <p className="text-gray-600">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No projects found matching your criteria. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'bathroom' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
                      {project.category === 'bathroom' ? 'Bathroom' : 'Legal Basement'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inspired by our work? Let's discuss transforming your space with our expert renovation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6476866313"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span className="mr-2">📞</span> Call Now: 647-686-6313
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative max-w-6xl mx-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-lg mb-4">{selectedImage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full ${selectedImage.category === 'bathroom' ? 'bg-red-600' : 'bg-green-600'}`}>
                  {selectedImage.category === 'bathroom' ? 'Bathroom Renovation' : 'Legal Basement'}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-sm">
              {currentIndex + 1} of {filteredProjects.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;