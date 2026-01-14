import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in real app, this would come from an API
  const post = {
    id: 1,
    title: "2025 Bathroom Renovation Trends in Brampton & Mississauga",
    author: "MG Tile & Stone",
    date: "January 15, 2025",
    readTime: "7 min read",
    category: "bathroom",
    image: "bath1",
    content: `
      <h2>Introduction</h2>
      <p>The world of bathroom design is evolving rapidly, especially in the Brampton and Mississauga areas. Homeowners are seeking spaces that combine luxury with functionality, and technology with sustainability.</p>
      
      <h2>Smart Bathroom Technology</h2>
      <p>Smart bathrooms are no longer a luxury—they're becoming standard in modern GTA homes. We're seeing increased demand for:</p>
      <ul>
        <li>Digital shower controls with temperature memory</li>
        <li>Smart mirrors with built-in lighting and displays</li>
        <li>Voice-activated fixtures and lighting</li>
        <li>Water usage monitoring systems</li>
      </ul>
      
      <h2>Sustainable Materials</h2>
      <p>Brampton homeowners are increasingly conscious of their environmental impact. Popular sustainable choices include:</p>
      <ul>
        <li>Recycled glass tiles</li>
        <li>Low-flow toilets and faucets</li>
        <li>Bamboo vanities</li>
        <li>Energy-efficient LED lighting</li>
      </ul>
      
      <h2>Spa-Inspired Retreats</h2>
      <p>The bathroom is transforming from a purely functional space to a personal sanctuary. Features like:</p>
      <ul>
        <li>Freestanding tubs</li>
        <li>Steam showers</li>
        <li>Heated floors</li>
        <li>Integrated sound systems</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Whether you're planning a complete remodel or updating key elements, these trends can help guide your decisions for a bathroom that's both beautiful and functional.</p>
    `,
    tags: ["Trends", "Design", "Modern", "Technology", "Sustainable"]
  };

  const relatedPosts = [
    { id: 2, title: "Small Bathroom Renovation Ideas", category: "bathroom" },
    { id: 4, title: "Basement Waterproofing Essentials", category: "basement" },
    { id: 5, title: "Luxury Bathroom Features", category: "bathroom" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="flex items-center text-sm text-gray-600 mb-4">
            <Link to="/blog" className="hover:text-red-600">← Back to Blog</Link>
          </nav>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span className={`px-3 py-1 rounded-full text-white ${
              post.category === 'bathroom' ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {post.category === 'bathroom' ? 'Bathroom Renovation' : 'Legal Basement'}
            </span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
              MG
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-600">Home Renovation Specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="lg:flex gap-8">
          {/* Article Content */}
          <article className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={`../../assets/${post.image}.jpeg`}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Article Body */}
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    MG
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">About MG Tile & Stone</h3>
                    <p className="text-gray-600">Serving Brampton & Mississauga since 2005</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  With over 15 years of experience in home renovations, our team specializes in creating beautiful, 
                  functional spaces that meet all local building codes and regulations. We're committed to delivering 
                  exceptional quality on every project.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Table of Contents */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">In This Article</h3>
              <nav className="space-y-2">
                <a href="#smart-tech" className="block text-gray-600 hover:text-red-600 transition-colors">
                  Smart Bathroom Technology
                </a>
                <a href="#sustainable" className="block text-gray-600 hover:text-red-600 transition-colors">
                  Sustainable Materials
                </a>
                <a href="#spa-retreats" className="block text-gray-600 hover:text-red-600 transition-colors">
                  Spa-Inspired Retreats
                </a>
                <a href="#conclusion" className="block text-gray-600 hover:text-red-600 transition-colors">
                  Conclusion
                </a>
              </nav>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map(related => (
                  <Link 
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group block"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        related.category === 'bathroom' ? 'bg-blue-500' : 'bg-green-500'
                      }`}></div>
                      <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                        {related.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Need a Bathroom Renovation?</h3>
              <p className="text-red-100 mb-4">
                Get a free consultation with our Brampton & Mississauga renovation experts.
              </p>
              <button className="w-full py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                Book Free Consultation
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;