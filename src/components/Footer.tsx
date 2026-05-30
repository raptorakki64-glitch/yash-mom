/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Sprout, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
    }, 1000);
  };

  // Helper scrollTo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-natural-dark text-[#FAF8F5]/90 pt-20 pb-8 relative overflow-hidden text-left">
      
      {/* Absolute design accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-natural-moss/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Upper Column Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#FAF8F5]/10 pb-16">
          
          {/* Logo Brand Brand Section (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 cursor-pointer text-left focus:outline-none focus:ring-1 focus:ring-natural-caramel rounded"
              aria-label="Scroll back to top of Burgeon Montessori page"
            >
              <div className="w-10 h-10 rounded-full bg-natural-moss flex items-center justify-center text-white shadow-sm">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Burgeon Montessori
                </span>
                <span className="text-[9px] tracking-[0.15em] uppercase font-sans text-[#E3DCD2] font-bold block leading-none">
                  House of Children
                </span>
              </div>
            </button>

            <p className="text-sm text-[#FAF8F5]/70 font-sans leading-relaxed">
              Cultivating dynamic independence, math sensorial systems, and phonetic speech for early children in HSR Layout, Sector 7, Bangalore.
            </p>

            <div className="flex items-center space-x-3 text-xs text-[#FAF8F5]/80">
              <ShieldCheck className="w-4 h-4 text-natural-caramel shrink-0" />
              <span>AMI Oriented Classrooms • Government Registered</span>
            </div>
          </div>

          {/* Quick Contacts Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Official Contact Helpdesk
            </h4>
            
            <ul className="space-y-4 text-sm font-sans text-[#FAF8F5]/85">
              
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-natural-caramel shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#FAF8F5]/80">
                  No. 53, 9th A Main Road, Sector 7, <br />
                  HSR Layout, Bengaluru, <br />
                  Karnataka 560102 — India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-4.5 h-4.5 text-natural-caramel shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919108174844" className="hover:text-natural-caramel font-semibold transition-colors">
                    +91 91081 74844
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-natural-caramel shrink-0" />
                <a href="mailto:info@burgeonmontessorihoc.com" className="hover:text-natural-caramel font-semibold transition-colors break-all">
                  info@burgeonmontessorihoc.com
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Clock className="w-4.5 h-4.5 text-natural-caramel shrink-0" />
                <span className="text-[#FAF8F5]/80">Toddler: 09:00 AM – 12:00 PM <br />Primary: 09:00 AM – 01:30 PM</span>
              </li>

            </ul>
          </div>

          {/* Newsletter and stylized Map Vector (4 columns) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Subscribe to Daily Newsletter
            </h4>
            
            <p className="text-xs text-[#FAF8F5]/60 leading-relaxed font-sans">
              Receive milestones, Montessori parenting tips, upcoming vacancies, and articles on emotional intelligence.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="newsletter-form"
                  onSubmit={handleSubscribe}
                  className="flex space-x-2 w-full pt-1"
                >
                  <label htmlFor="newsletterEmail" className="sr-only">Newsletter Email</label>
                  <input
                    id="newsletterEmail"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/10 text-white placeholder-[#FAF8F5]/40 text-xs px-4 py-3 rounded-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-natural-caramel font-sans grow"
                    placeholder="Caregiver's Email Address..."
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-natural-caramel text-natural-dark hover:bg-natural-caramel-dark p-3 rounded-full flex items-center justify-center cursor-pointer focus:ring-1 focus:ring-natural-caramel uppercase tracking-widest text-[10px]"
                    aria-label="Subscribe to newsletter"
                  >
                    {submitting ? (
                      <div className="w-4 h-4 border-2 border-natural-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-natural-dark" />
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-natural-moss/20 border border-natural-moss/30 p-3.5 rounded-xl flex items-start space-x-3 text-xs text-natural-moss-dark"
                >
                  <Heart className="w-4 h-4 shrink-0 mt-0.5 fill-natural-caramel text-natural-caramel" />
                  <div className="text-left text-[#FAF8F5]">
                    <p className="font-bold text-natural-caramel">Successfully Subscribed!</p>
                    <p className="text-[11px] text-[#FAF8F5]/70 mt-0.5 font-sans">Thank you for joining our circular. Checking eligibility brief has been dispatched.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated Campus Layout Mini map indicator */}
            <div className="pt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]/40 font-sans mb-2">Our Campus Grid</p>
              <div className="w-full h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3 text-natural-caramel/20 select-none overflow-hidden hover:bg-white/10 transition-colors">
                <svg className="w-full h-full text-natural-caramel/10 hover:text-natural-caramel/20 transition-all duration-300" viewBox="0 0 100 40">
                  <path d="M 0,20 Q 25,10 50,20 T 100,20 M 20,0 L 20,40 M 80,0 L 80,40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2"/>
                  <circle cx="50" cy="20" r="4" fill="#E8B06C" />
                  <text x="56" y="24" fill="#FAF8F5" fontSize="7" fontWeight="bold">Burgeon Campus</text>
                </svg>
              </div>
            </div>

          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 space-y-3 sm:space-y-0 font-sans">
          <p>© {new Date().getFullYear()} Burgeon Montessori House of Children. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-natural-caramel transition-colors">AMI Values</a>
            <span>•</span>
            <a href="#programs" className="hover:text-natural-caramel transition-colors">Class Calendars</a>
            <span>•</span>
            <a href="#admissions" className="hover:text-natural-caramel transition-colors">Bengaluru Admissions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
