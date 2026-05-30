/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, BookOpen, Hash, Globe, Clock, Baby, ChevronRight, Check } from 'lucide-react';
import { programs, montessoriAreas } from '../data';

export default function Programs() {
  const [selectedArea, setSelectedArea] = useState<string>('practical-life');
  const transitionMedium = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  // Map icon names dynamically with selection support
  const getIcon = (name: string, isSelected: boolean) => {
    const colorClass = isSelected ? "text-white" : "text-natural-moss";
    switch (name) {
      case 'Sparkles': return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      case 'Eye': return <Eye className={`w-5 h-5 ${colorClass}`} />;
      case 'BookOpen': return <BookOpen className={`w-5 h-5 ${colorClass}`} />;
      case 'Hash': return <Hash className={`w-5 h-5 ${colorClass}`} />;
      case 'Globe': return <Globe className={`w-5 h-5 ${colorClass}`} />;
      default: return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#FAF8F5] border-y border-natural-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-natural-caramel-dark">Explore Our Offerings</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-natural-dark tracking-tight">
            Nurturing Communities Built Upon Your Child’s Age & Stage
          </h2>
          <div className="h-[1px] w-20 bg-natural-border mx-auto" />
          <p className="text-natural-muted text-base sm:text-lg leading-relaxed font-sans">
            Our curriculum matches the childhood steps of development. Each session meets safety and international AMI standards, supporting HSR Layout kids with gentle care.
          </p>
        </div>

        {/* Programs Listing Grid */}
        <div id="curriculum" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {programs.map((prog) => {
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={transitionMedium}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-natural-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Upper Body Area */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1 text-natural-moss text-xs font-semibold uppercase tracking-wide">
                      <Baby className="w-3.5 h-3.5" />
                      <span>{prog.ageGroup}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-natural-caramel/30 bg-natural-caramel/10 text-natural-caramel-dark">
                      Admissions Open
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-natural-dark">
                      {prog.title}
                    </h3>
                    <p className="text-natural-muted text-sm leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  {/* Staged Learning Areas List */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E66]">Core Sub-Curriculums</p>
                    <ul className="space-y-2">
                      {prog.learningAreas.map((area, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2.5 text-xs text-natural-text/85">
                          <Check className="w-4 h-4 text-natural-moss shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Schedule Block */}
                <div className="p-6 bg-natural-bg-alt border-t border-natural-border flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-natural-text/85">
                    <Clock className="w-4 h-4 text-natural-moss" />
                    <span className="font-medium">{prog.schedule}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-natural-moss/60" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Montessori Areas Interactive Tabs Showcase */}
        <div className="bg-white border border-natural-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-natural-dark">
              The Five Pillars of Traditional Montessori Curriculum
            </h3>
            <p className="text-sm text-natural-muted mt-1">
              Select any learning area below to explore how physical exercises teach concrete mathematics, phonetic spelling, and geographic wonders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar select buttons list (Lg is left 5-cols, Right is 7-cols) */}
            <div className="lg:col-span-5 space-y-2">
              {montessoriAreas.map((area) => {
                const isSelected = selectedArea === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`w-full text-left p-4 rounded-xl flex items-center space-x-4 transition-all duration-300 relative focus:outline-none cursor-pointer ${
                      isSelected
                        ? 'bg-natural-moss-light text-natural-dark shadow-sm border border-natural-border'
                        : 'hover:bg-natural-moss-light/50 text-natural-text/70'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCurriculumIndicator"
                        className="absolute inset-0 bg-natural-moss/5 rounded-xl z-0"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center relative z-10 shrink-0 ${
                      isSelected ? 'bg-natural-moss shadow' : 'bg-natural-border/30'
                    }`}>
                      {getIcon(area.iconName, isSelected)}
                    </span>
                    <div className="relative z-10">
                      <p className="font-serif text-sm font-bold text-natural-dark">{area.title}</p>
                      <p className="text-[10px] text-natural-muted truncate max-w-[200px] sm:max-w-xs">{area.shortDesc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Content Preview Frame with Stunny transitions */}
            <div className="lg:col-span-7 bg-natural-bg-alt border border-natural-border p-6 sm:p-8 rounded-2xl min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {montessoriAreas.map((area) => {
                  if (area.id !== selectedArea) return null;
                  return (
                    <motion.div
                      key={area.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="inline-block px-3 py-1 bg-natural-moss/10 text-natural-moss-dark rounded text-[10px] uppercase font-bold tracking-widest font-sans">
                        Montessori Area of Study
                      </div>
                      
                      <h4 className="font-serif text-2xl font-bold text-natural-dark">
                        {area.title}
                      </h4>
                      
                      <p className="text-natural-muted leading-relaxed text-sm font-sans">
                        {area.fullDesc}
                      </p>

                      <div className="pt-4 border-t border-natural-border grid grid-cols-2 gap-4">
                        <div className="text-left">
                          <p className="text-[11px] font-sans text-natural-muted uppercase font-bold tracking-wider leading-none font-sans">Focus Goal</p>
                          <p className="text-xs font-semibold text-natural-dark mt-1">Autonomous mastery and order</p>
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-sans text-natural-muted uppercase font-bold tracking-wider leading-none font-sans">Observation Metric</p>
                          <p className="text-xs font-semibold text-natural-dark mt-1">Individual repetition curves</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
