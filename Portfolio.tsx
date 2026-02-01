
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="py-12">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">My Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my journey in full stack development and AI solution building.
        </p>
      </header>

      <div className="grid gap-20">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="w-full lg:w-3/5">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl group">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-lg tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
                >
                  <Github className="w-5 h-5" /> View Github
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center p-16 bg-gray-50 dark:bg-gray-900/30 rounded-[3rem] border border-dashed border-gray-300 dark:border-gray-800">
        <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
        <p className="text-gray-600 dark:text-gray-400">
          I'm currently working on several Agentic AI and Full Stack applications. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
