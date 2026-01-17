import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const navItems = ['about', 'experience', 'projects', 'skills', 'education', 'resume'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo scrolls to hero */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-display text-gradient cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            LSK
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'resume') {
                    setShowResume(true);
                  } else {
                    scrollToSection(item);
                  }
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item && item !== 'resume'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item && item !== 'resume' && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === 'resume') {
                        setShowResume(true);
                      } else {
                        scrollToSection(item);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`text-lg font-medium text-left ${
                      activeSection === item ? 'text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              className="relative bg-slate-900 rounded-xl shadow-xl w-[90vw] h-[80vh] max-w-4xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 px-2 py-1 text-xs rounded bg-white/10 text-slate-200 hover:bg-white/20"
                onClick={() => setShowResume(false)}
              >
                Close
              </button>

              {/* PDF in public/resume.pdf */}
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}