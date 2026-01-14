import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
              post.category === 'bathroom' ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {post.category === 'bathroom' ? 'BATHROOM' : 'BASEMENT'}
            </span>
          </div>
          {/* Read Time */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {post.readTime}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-2">
            {post.date}
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Author & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                MG
              </div>
              <span className="text-sm text-gray-700">{post.author}</span>
            </div>
            <span className="text-red-600 text-sm font-semibold group-hover:text-red-700 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;