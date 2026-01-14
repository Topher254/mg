import React, { useState } from 'react';
import bath1 from '../../assets/bat1.jpeg';
import bath2 from '../../assets/bat2.jpeg';
import bath3 from '../../assets/bat3.jpeg';
import bath4 from '../../assets/bat4.jpeg';
import bath5 from '../../assets/bat5.jpeg';
import { Link } from 'react-router';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'bathroom', name: 'Bathroom Renovations' },
    { id: 'basement', name: 'Legal Basements' },
    { id: 'kitchen', name: 'Kitchen Remodels' },
    { id: 'trends', name: 'Design Trends' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "2025 Bathroom Renovation Trends in Brampton & Mississauga",
      excerpt: "Discover the latest bathroom design trends that are transforming homes in the GTA. From smart bathrooms to sustainable materials.",
      category: 'bathroom',
      readTime: '7 min read',
      date: 'Jan 15, 2025',
      featured: true,
      image: bath1,
      author: 'MG Tile & Stone',
      tags: ['Trends', 'Design', 'Modern'],
      content: "Smart bathrooms with integrated technology are becoming standard in Brampton homes. Heated floors, digital shower controls, and smart mirrors are no longer luxury items..."
    },
    {
      id: 2,
      title: "Complete Guide to Legal Basement Requirements 2025",
      excerpt: "Everything you need to know about converting your basement into a legal rental unit in Peel Region.",
      category: 'basement',
      readTime: '10 min read',
      date: 'Jan 10, 2025',
      featured: true,
      image: bath3,
      author: 'MG Tile & Stone',
      tags: ['Legal', 'Safety', 'Compliance'],
      content: "Understanding the specific requirements for legal basement apartments in Brampton and Mississauga. From ceiling heights to egress windows..."
    },
    {
      id: 3,
      title: "Small Bathroom Renovation: Maximizing Space in GTA Homes",
      excerpt: "Creative solutions for renovating small bathrooms without compromising on style or functionality.",
      category: 'bathroom',
      readTime: '6 min read',
      date: 'Jan 5, 2025',
      featured: false,
      image: bath2,
      author: 'MG Tile & Stone',
      tags: ['Small Space', 'Design', 'Storage'],
      content: "Vertical storage, wall-mounted fixtures, and light color palettes can make even the smallest bathroom feel spacious and luxurious..."
    },
    {
      id: 4,
      title: "Basement Waterproofing: Essential for Legal Conversions",
      excerpt: "Why proper waterproofing is the foundation of any legal basement apartment in Brampton's climate.",
      category: 'basement',
      readTime: '8 min read',
      date: 'Dec 28, 2024',
      featured: false,
      image: bath4,
      author: 'MG Tile & Stone',
      tags: ['Waterproofing', 'Maintenance', 'Safety'],
      content: "Canadian winters require specialized waterproofing solutions. Learn about interior and exterior waterproofing methods that protect your investment..."
    },
    {
      id: 5,
      title: "Luxury Bathroom Features Worth the Investment",
      excerpt: "High-end features that add value to your Brampton home and enhance your daily routine.",
      category: 'bathroom',
      readTime: '9 min read',
      date: 'Dec 20, 2024',
      featured: false,
      image: bath5,
      author: 'MG Tile & Stone',
      tags: ['Luxury', 'Investment', 'Value'],
      content: "From steam showers to custom vanities, discover which luxury features provide the best return on investment in the Mississauga market..."
    },
    {
      id: 6,
      title: "ROI of Legal Basement Apartments in Peel Region",
      excerpt: "Calculate the financial benefits of adding a legal basement suite to your Brampton property.",
      category: 'basement',
      readTime: '11 min read',
      date: 'Dec 15, 2024',
      featured: false,
      image: bath1,
      author: 'MG Tile & Stone',
      tags: ['Investment', 'ROI', 'Finance'],
      content: "With rental demand at an all-time high, legal basement apartments offer significant income potential. We break down the numbers..."
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const popularPosts = [...blogPosts].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MG Tile & Stone Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on bathroom renovations, legal basement apartments, and home remodeling in Brampton & Mississauga
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 bg-white rounded-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles on renovations, basements, design..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-3 focus:ring-red-500"
              />
              <svg className="absolute right-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          {/* Main Blog Content */}
          <div className="lg:w-2/3">
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full transition-all ${selectedCategory === cat.id ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'all' && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                            {post.category === 'bathroom' ? 'Bathroom' : 'Basement'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
                              MG
                            </div>
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">No articles found. Try a different search term.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                            post.category === 'bathroom' ? 'bg-red-600' : 'bg-green-600'
                          }`}>
                            {post.category === 'bathroom' ? 'Bathroom' : 'Basement'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                              MG
                            </div>
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          <button className="text-red-600 text-sm font-semibold hover:text-red-700 transition-colors">
                            Continue Reading
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold mr-3">
                  MG
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">MG Tile & Stone</h3>
                  <p className="text-sm text-gray-600">Home Renovation Experts</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Serving Brampton, Mississauga, and surrounding areas with premium bathroom renovations and legal basement conversions since 2005.
              </p>
              <Link to='/contact'>
              <button className="w-full py-3 cursor-pointer  bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300">
                Get Free Consultation
              </button>
              </Link>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <a key={post.id} href="#" className="group block">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${selectedCategory === cat.id ? 'bg-red-50 text-red-700' : 'hover:bg-gray-50 text-gray-700'}`}
                  >
                    <span className="font-medium">{cat.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {blogPosts.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-red-500 text-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {['Brampton', 'Mississauga', 'Caledon', 'Oakville', 'Vaughan', 'Bolton'].map(city => (
                  <div key={city} className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded text-center text-sm">
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                Free consultations available for all renovation projects in these areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Renovation Tips</h2>
          <p className="text-red-100 mb-6">
            Subscribe to our newsletter for the latest trends in bathroom designs, legal basement requirements, and exclusive offers.
          </p>
          <div className="flex flex-col  rounded-full  sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-full cursor-pointer hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-red-200 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;