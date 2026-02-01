
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Sparkles, Code, Layout, ShieldCheck } from 'lucide-react';

const HireMe: React.FC = () => {
  const services = [
    { title: 'Web Development', icon: <Globe className="w-6 h-6" />, desc: 'Modern and fast web experiences.' },
    { title: 'Full Stack Development', icon: <Code className="w-6 h-6" />, desc: 'End-to-end scalable solutions.' },
    { title: 'Application Development', icon: <Layout className="w-6 h-6" />, desc: 'User-centric mobile & desktop apps.' },
    { title: 'Software Development', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Robust software with clean architecture.' },
  ];

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Hire Me</h1>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I am a dedicated and reliable developer who builds high-quality software and applications with modern technologies and clean architecture.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Sparkles className="text-primary-600" /> Why Hire Me?
          </h2>
          <div className="space-y-6">
            {[
              "Strong foundation in BS Software Engineering",
              "Expertise in Agentic AI and Full Stack Development",
              "Commitment to clean architecture and code quality",
              "Proven track record in remote internships",
              "Problem-solving mindset and continuous learner",
              "Located in the tech hub of Karachi, Pakistan"
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/40 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8">My Services</h2>
          <div className="grid gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-5 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-bold">{service.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        whileInView={{ scale: 1.02 }}
        className="p-12 md:p-20 bg-gray-900 dark:bg-primary-600 rounded-[3rem] text-white text-center shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2] rotate-12">
          <Phone className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8">Ready to start your next project?</h3>
          <p className="text-gray-400 dark:text-primary-100 mb-12 text-lg max-w-xl mx-auto">
            Let's discuss how my skills in Full Stack and AI can benefit your organization or personal business.
          </p>
          <a 
            href="tel:03161841492" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl"
          >
            <Phone className="w-8 h-8 text-primary-600" /> 0316-1841492
          </a>
          <p className="mt-8 text-sm text-gray-500 dark:text-primary-200 opacity-60">Based in Karachi, Pakistan</p>
        </div>
      </motion.div>
    </div>
  );
};

// Internal icon proxy for consistency
const Globe: React.FC<{ className?: string }> = ({ className }) => <span className={className}>🌐</span>;

export default HireMe;
