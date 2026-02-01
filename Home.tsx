
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Mail, Phone, Code2, Cpu, Globe, Rocket } from 'lucide-react';
import { SKILLS, PROJECTS, BLOGS } from '../constants';

const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-32 pb-20 overflow-hidden">
      {/* REVOX STYLE HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-bold tracking-wider uppercase mb-6"
            >
              Available for Hire
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] mb-8 tracking-tighter">
              Full Stack <br />
              <span className="gradient-text">Developer</span> <br />
              & AI Builder
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl font-medium leading-relaxed">
              Building modern, scalable, and intelligent web applications
            </p>
            
            <p className="text-lg text-gray-400 dark:text-gray-500 mb-12 max-w-lg leading-relaxed">
              I am an undergraduate Software Engineering student with a strong passion for full stack development and AI-driven solutions. Currently learning full stack development and Agentic AI to build real-world impactful applications.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/hire" className="group relative px-10 py-5 bg-primary-600 text-white rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary-600/30">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>
              <Link to="/portfolio" className="flex items-center gap-3 px-10 py-5 border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-black text-lg transition-all hover:border-primary-500 hover:text-primary-500">
                Portfolio <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image with Revox Styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[120px] -z-10"></div>
            
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 opacity-60"></div>
              <img 
                src="WhatsApp Image 2026-02-01 at 12.32.42 PM.jpeg" 
                alt="Faiq Ansari" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass p-6 rounded-3xl backdrop-blur-xl border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl">Faiq Ansari</h3>
                    <p className="text-primary-400 text-sm font-medium tracking-wide">Karachi, Pakistan</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center">
                    <Rocket className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Introduction</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Crafting Digital Excellence Through Software Engineering.
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              I am an undergraduate student pursuing a Bachelor of Science in Software Engineering at Sindh Madarsatul Islam University. Passionate about technology, problem-solving, and innovation, I am constantly exploring new ideas and expanding my knowledge in software development.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-2">SE</h4>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Candidate</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-2">1+</h4>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Project Base</p>
              </div>
            </div>
            <Link to="/about" className="group flex items-center gap-4 text-lg font-black text-primary-600">
              LEARN MORE ABOUT ME 
              <span className="w-12 h-px bg-primary-600 transition-all group-hover:w-16"></span>
            </Link>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-darkLighter p-1">
               <img src="https://nabcoit.com/wp-content/uploads/2024/06/2-1.jpg" alt="Workspace" className="w-full h-full object-cover rounded-[2.8rem]" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl border-primary-500/20 shadow-2xl max-w-[200px] hidden md:block">
              <Cpu className="w-10 h-10 text-primary-500 mb-4" />
              <p className="text-sm font-bold leading-tight">Aspiring Agentic AI Developer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="bg-gray-50 dark:bg-darkLighter/50 py-24 rounded-[3rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Mastery</h2>
            <h3 className="text-4xl md:text-5xl font-black">Core Competencies</h3>
          </div>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {SKILLS.map((skill) => (
              <motion.div 
                key={skill}
                variants={item}
                className="group p-8 glass rounded-[2rem] text-center transition-all hover:-translate-y-2 hover:bg-primary-600 hover:border-primary-600"
              >
                <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-primary-600 transition-colors">
                  <Code2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg group-hover:text-white transition-colors">{skill}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black">Featured Projects</h3>
          </div>
          <Link to="/portfolio" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black hover:scale-105 transition-all">
            VIEW ALL PROJECTS
          </Link>
        </div>
        <div className="grid gap-12">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="group grid lg:grid-cols-2 gap-12 p-8 lg:p-12 glass rounded-[3rem] hover:bg-gray-50 dark:hover:bg-darkLighter transition-all"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-video shadow-xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-black uppercase tracking-widest text-primary-500 bg-primary-500/10 px-4 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-black mb-6">{project.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold text-sm hover:scale-105 transition-all">
                    LIVE PREVIEW <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center gap-2 px-6 py-3 glass rounded-xl font-bold text-sm hover:scale-105 transition-all">
                    DETAILS
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Journal</h2>
          <h3 className="text-4xl md:text-5xl font-black">Latest Blog Posts</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.article 
              key={blog.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 shadow-lg relative">
                 <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                 <div className="absolute top-6 left-6 px-4 py-1.5 glass backdrop-blur-md rounded-lg text-xs font-black uppercase text-white tracking-widest">
                  {blog.category}
                 </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                <span>By Faiq Ansari</span>
                <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                <span>{blog.date}</span>
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-primary-500 transition-colors leading-tight">
                {blog.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {blog.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CONTACT & HIRE ME CTA (Revox Dynamic Style) */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group p-12 lg:p-16 bg-primary-600 rounded-[3.5rem] overflow-hidden text-white flex flex-col justify-between min-h-[450px]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <Mail className="w-12 h-12 mb-8 opacity-50" />
              <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-[1.1]">Have a project in mind?</h3>
              <p className="text-xl text-primary-100 mb-10 max-w-xs">
                I am ready to build your next big idea with modern tech.
              </p>
            </div>
            <Link to="/contact" className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-white text-primary-600 rounded-2xl font-black text-lg transition-transform group-hover:scale-105 active:scale-95 shadow-xl">
              Send a Message
            </Link>
          </div>
          
          <div className="relative group p-12 lg:p-16 bg-darkLighter border border-gray-800 rounded-[3.5rem] overflow-hidden text-white flex flex-col justify-between min-h-[450px]">
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-600/10 rounded-full blur-[80px]"></div>
             <div className="relative z-10">
                <Rocket className="w-12 h-12 mb-8 opacity-30 text-primary-500" />
                <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-[1.1]">Let's build together</h3>
                <p className="text-xl text-gray-400 mb-10 max-w-xs leading-relaxed">
                  Dedicated and reliable developer for high-quality solutions.
                </p>
             </div>
             <Link to="/hire" className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white rounded-2xl font-black text-lg transition-transform group-hover:scale-105 active:scale-95 shadow-xl shadow-primary-600/20">
               Hire Me Today
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
