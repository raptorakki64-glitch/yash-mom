/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Active section scroll indicator tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // offset benchmark
      const sections = ['home', 'about', 'curriculum', 'programs', 'admissions', 'gallery', 'feedback', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial trigger
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler to slide to admissions enquiry form
  const handleScrollToAdmissions = () => {
    const admissionsElement = document.getElementById('admissions');
    if (admissionsElement) {
      admissionsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handler to slide to programs/curriculum area
  const handleScrollToPrograms = () => {
    const programsElement = document.getElementById('programs');
    if (programsElement) {
      programsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-natural-bg text-natural-text selection:bg-natural-sage selection:text-natural-dark font-sans">
      
      {/* Sticky Header Nav */}
      <Header activeSection={activeSection === 'curriculum' ? 'programs' : activeSection} />

      {/* Main Single Page Sections */}
      <main>
        
        <Hero 
          onTourClick={handleScrollToAdmissions} 
          onProgramsClick={handleScrollToPrograms} 
        />
        
        <About />
        
        <Programs />
        
        <Admissions />
        
        <Gallery />
        
        <Testimonials />

      </main>

      {/* Static Parent Footer */}
      <Footer />

    </div>
  );
}
