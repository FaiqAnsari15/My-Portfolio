
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOGS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="py-12">
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog & Insights</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Development-related blogs covering full stack development, AI, modern web technologies, and best coding practices.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOGS.map((blog, idx) => (
          <motion.article 
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col h-full bg-white dark:bg-gray-800/20 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs font-bold text-primary-600 uppercase mb-4">
                <span>{blog.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="flex items-center gap-1 text-gray-500"><Calendar className="w-3 h-3" /> {blog.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-primary-600" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 py-16 bg-primary-600 rounded-3xl text-white px-8 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Want to stay updated?</h2>
        <p className="text-primary-100 mb-8 max-w-xl mx-auto">Subscribe to my newsletter to get the latest articles on Full Stack and AI Development delivered to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:bg-white/20 transition-all placeholder:text-primary-200" 
          />
          <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:scale-105 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
