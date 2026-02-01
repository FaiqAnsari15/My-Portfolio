
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Simulation)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project or just want to say hi? I'd love to hear from you.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Me</h3>
            <p className="text-gray-600 dark:text-gray-400">faiqarshad2005@gmail.com</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Me</h3>
            <p className="text-gray-600 dark:text-gray-400">0316-1841492</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Karachi, Pakistan</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="p-10 bg-white dark:bg-gray-900/20 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Message</label>
              <textarea 
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..." 
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
