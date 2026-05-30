/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sprout, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset of the header bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Programs', id: 'programs' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Feedback', id: 'feedback' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-xl shadow-sm border-b border-natural-border py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 cursor-pointer group text-left focus:outline-none"
            aria-label="Burgeon Montessori homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-natural-moss flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Sprout className="w-5 h-5 relative z-10" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-natural-dark block">
                Burgeon Montessori
              </span>
              <span className="text-[10px] tracking-widest uppercase font-sans text-natural-muted font-semibold block leading-none">
                House of Children
              </span>
            </div>
          </button>

          {/* Desktop Navigation Linkages */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors cursor-pointer ${
                    isActive ? 'text-natural-dark' : 'text-natural-text/70 hover:text-natural-moss'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-natural-moss/10 rounded-md z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Subtle Underline hover trace */}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-natural-moss scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300 pointer-events-none rounded" />
                </button>
              );
            })}
          </nav>

          {/* Right Enrollment CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={() => scrollToSection('admissions')}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="flex items-center space-x-2 bg-natural-moss text-white hover:bg-natural-moss-dark px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg shadow-natural-moss/20 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Enquire Now</span>
            </motion.button>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-natural-dark hover:bg-natural-moss/10 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu Collapsible */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-natural-bg/95 border-b border-natural-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left block px-4 py-3 rounded-lg text-base font-medium ${
                      isActive
                        ? 'bg-natural-moss-light text-natural-dark font-semibold'
                        : 'text-natural-text/70 hover:bg-natural-moss-light hover:text-natural-dark'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  onClick={() => scrollToSection('admissions')}
                  className="w-full flex items-center justify-center space-x-2 bg-natural-moss text-white py-3 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md shadow-natural-moss/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
