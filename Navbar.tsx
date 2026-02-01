
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-[2rem] ${
          scrolled ? 'glass shadow-2xl backdrop-blur-2xl border-white/5' : 'bg-transparent'
        }`}>
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
            <span className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">F</span>
            <span className="hidden sm:block">FAIQ<span className="text-primary-600">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 text-sm font-bold tracking-widest uppercase transition-all rounded-xl ${
                    isActive ? 'text-primary-600' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl glass hover:bg-primary-500/10 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
            <Link to="/hire" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-black text-sm hover:scale-105 active:scale-95 shadow-lg shadow-primary-600/30 transition-all">
              HIRE ME <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-gray-600 dark:text-gray-400 glass rounded-xl"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-dark p-8 pt-32 animate-fade-in flex flex-col">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-4xl font-black tracking-tighter transition-all ${
                    isActive ? 'text-primary-600 scale-105' : 'text-gray-300 dark:text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/hire" 
              onClick={() => setIsOpen(false)}
              className="inline-block text-4xl font-black tracking-tighter text-gray-300 dark:text-gray-700 hover:text-primary-600"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
