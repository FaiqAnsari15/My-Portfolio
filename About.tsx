
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Heart, User, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">About Me</h1>
          <div className="w-32 h-2 bg-primary-600 rounded-full mb-12"></div>
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed mb-8">
                I am an undergraduate student pursuing a Bachelor of Science in Software Engineering at Sindh Madarsatul Islam University.
              </p>
              <div className="prose prose-xl dark:prose-invert max-w-none text-gray-500 dark:text-gray-400 space-y-6">
                 <p>
                  Passionate about technology, problem-solving, and innovation, I am constantly exploring new ideas and expanding my knowledge in software development. Alongside my studies, I am learning full stack development and Agentic AI to create practical and valuable solutions.
                </p>
                <p>
                  My goal is to push the boundaries of what's possible with software, integrating AI seamlessly into everyday tools to enhance productivity and solve complex problems.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="glass p-8 rounded-[2rem] border-primary-500/10">
                <h4 className="text-sm font-black uppercase tracking-widest text-primary-500 mb-6">Personal Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="font-bold">Karachi, Pakistan</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="font-bold">Faiq Ansari</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Target className="w-5 h-5 text-gray-400" />
                    <span className="font-bold">Software Engineer</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-600 p-8 rounded-[2rem] text-white shadow-2xl">
                 <h4 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Current Focus</h4>
                 <p className="text-xl font-black">Agentic AI & Full Stack Systems</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="p-10 glass rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-24 h-24" />
            </div>
            <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4">Education</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Undergraduate in Software Engineering. Aspiring Agentic AI Developer.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="p-10 glass rounded-[2.5rem] relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <Briefcase className="w-24 h-24" />
            </div>
            <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4">Experience</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Completed a remote internship with CodeAlpha, delivering projects and gaining practical industry experience.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="p-10 glass rounded-[2.5rem] relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <Heart className="w-24 h-24" />
            </div>
            <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4">Summary</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Motivated to grow as a developer and contribute meaningful solutions through technology.
            </p>
          </motion.div>
        </div>

        <section className="py-24 bg-darkLighter/30 rounded-[3rem] px-12 border border-gray-100 dark:border-gray-800">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 text-center">
                 <div className="text-7xl font-black text-primary-600 mb-2">100%</div>
                 <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Dedication</p>
              </div>
              <div className="w-full md:w-2/3">
                 <h3 className="text-3xl font-black mb-6 leading-tight">Driven by Passion and Persistence</h3>
                 <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  I come from a middle-class background in Karachi and have a deep passion for development. This motivation fuels my constant learning and my desire to build impactful applications for the global stage.
                 </p>
              </div>
           </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
