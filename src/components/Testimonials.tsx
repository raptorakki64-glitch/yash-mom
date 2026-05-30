/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const transitionMedium = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="feedback" className="py-24 bg-gradient-to-b from-white to-natural-bg-alt relative overflow-hidden">
      
      {/* Decorative quotes background graphic */}
      <div className="absolute top-10 left-10 text-natural-moss/5 rotate-12 scale-150 pointer-events-none select-none">
        <Quote className="w-48 h-48" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-natural-caramel-dark">Heartfelt Echoes</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-natural-dark tracking-tight">
            Parents’ Honest Feedbacks
          </h2>
          <div className="h-[1px] w-20 bg-natural-border mx-auto" />
          <p className="text-natural-muted text-sm sm:text-base font-sans font-sans">
            Hear from families on how our quiet environments supported independent habits, arithmetic concept understanding, and multilingual confidence.
          </p>
        </div>

        {/* Main Testimonial Carousel Container */}
        <div className="relative bg-white border border-natural-border rounded-3xl p-6 sm:p-12 shadow-sm max-w-3xl mx-auto overflow-hidden">
          
          <div className="absolute top-6 left-6 text-natural-moss/10 pointer-events-none">
            <Quote className="w-12 h-12" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={transitionMedium}
              className="space-y-6 text-left"
            >
              {/* Star Rating Panel */}
              <div className="flex items-center space-x-1 justify-start">
                {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-natural-caramel stroke-natural-caramel text-natural-caramel" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-natural-dark text-base sm:text-lg italic leading-relaxed">
                “{testimonials[currentIndex].text}”
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-natural-border flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-natural-dark">
                    {testimonials[currentIndex].parentName}
                  </h4>
                  <p className="text-xs text-natural-muted font-sans mt-0.5">
                    {testimonials[currentIndex].relationship} • <span className="font-medium text-natural-moss">{testimonials[currentIndex].childAge}</span>
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-natural-moss-light flex items-center justify-center text-natural-dark">
                  <MessageSquareQuote className="w-5 h-5 text-natural-moss" />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Manual Controllers buttons */}
          <div className="flex items-center justify-end space-x-2.5 mt-8 border-t border-natural-border pt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-natural-moss-light/50 hover:bg-natural-moss-light text-natural-dark flex items-center justify-center transition-colors focus:outline-none min-w-[40px] min-h-[40px] cursor-pointer border border-natural-border"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Index Tracker indicators */}
            <div className="flex items-center space-x-1.5 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === idx ? 'bg-natural-moss w-4' : 'bg-natural-border'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-natural-moss-light/50 hover:bg-natural-moss-light text-natural-dark flex items-center justify-center transition-colors focus:outline-none min-w-[40px] min-h-[40px] cursor-pointer border border-natural-border"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
