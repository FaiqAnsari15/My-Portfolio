
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold tracking-tight mb-6">
          <span className="text-primary-600">FAIQ</span> <span className="text-gray-900 dark:text-white">ANSARI</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Building modern, scalable, and intelligent web applications with a focus on innovation and performance.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:faiqarshad2005@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} Faiq Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
