/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Compass, Image, Sparkles } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  const filterCategories = [
    { name: 'All Photos', filter: 'all' },
    { name: 'Practical Life', filter: 'practical-life' },
    { name: 'Sensorial', filter: 'sensorial' },
    { name: 'Language', filter: 'language' },
    { name: 'Mathematics', filter: 'math' },
    { name: 'Cultural / Science', filter: 'culture' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const triggerLightbox = (src: string, title: string) => {
    setLightboxSrc(src);
    setLightboxTitle(title);
  };

  const transitionMedium = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="gallery" className="py-24 bg-natural-bg border-y border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-natural-caramel-dark">Visual Insights</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-natural-dark tracking-tight">
            Our Loving Prepared Classrooms
          </h2>
          <div className="h-[1px] w-20 bg-natural-border mx-auto" />
          <p className="text-natural-muted text-base sm:text-lg leading-relaxed font-sans">
            A window into the daily activities at Burgeon Montessori. View our wooden layouts, pouring stations, geography puzzle maps, and tactile bead setups.
          </p>
        </div>

        {/* Filter Selection Tabs (Mobile scrollable) */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-1 overflow-x-auto pb-3 sm:pb-0 scrollbar-none no-scrollbar max-w-full px-2 sm:px-0">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.filter;
              return (
                <button
                  key={cat.filter}
                  onClick={() => setActiveCategory(cat.filter)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none min-h-[38px] flex items-center justify-center ${
                    isActive
                      ? 'bg-natural-moss text-white border-natural-moss shadow-sm font-bold'
                      : 'bg-white text-natural-text border-natural-border hover:bg-natural-moss-light/30 hover:text-natural-dark'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Display with AnimatePresence layouts */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  layout
                  id={`gallery-card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white p-3.5 rounded-3xl border border-natural-border shadow-sm overflow-hidden hover:border-natural-moss/20 transition-colors"
                >
                  {/* Photo Frame with Capped Zoom */}
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100">
                    <motion.img
                      src={item.imageSrc}
                      alt={item.alt}
                      whileHover={{ scale: 1.03 }} // Limited to 1.03
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover rounded-2xl cursor-pointer"
                      onClick={() => triggerLightbox(item.imageSrc, item.title)}
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover Inspect badge Overlay */}
                    <div
                      onClick={() => triggerLightbox(item.imageSrc, item.title)}
                      className="absolute inset-0 bg-natural-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-auto cursor-pointer"
                    >
                      <div className="bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center space-x-2 text-natural-dark shadow-md">
                        <Eye className="w-4 h-4 text-natural-moss" strokeWidth={2.5} />
                        <span className="text-xs font-bold uppercase tracking-wider">Inspect Material</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption area */}
                  <div className="pt-4 px-1 text-left flex items-start justify-between">
                    <div>
                      <p className="text-[9.5px] uppercase font-sans tracking-widest text-natural-caramel-dark font-bold font-sans">
                        {item.category.replace('-', ' ')}
                      </p>
                      <h4 className="font-serif text-sm font-bold text-natural-dark line-clamp-1 mt-0.5">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Popover Component */}
        <AnimatePresence>
          {lightboxSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-natural-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightboxSrc(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                onClick={() => setLightboxSrc(null)}
                aria-label="Close Lightbox view"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="max-w-4xl w-full flex flex-col items-center bg-transparent relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-2xl overflow-hidden bg-white/5 p-2 border border-white/10 max-h-[75vh]">
                  <img
                    src={lightboxSrc}
                    alt={lightboxTitle}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Visual Label inside Overlay */}
                <div className="mt-4 text-center text-white max-w-lg space-y-1">
                  <p className="font-serif text-lg font-bold tracking-tight">{lightboxTitle}</p>
                  <p className="text-xs text-natural-moss/60 font-sans tracking-wide">Burgeon Montessori House of Children — HSR Bangalore</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
