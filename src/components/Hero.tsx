/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sprout, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

interface HeroProps {
  onTourClick: () => void;
  onProgramsClick: () => void;
}

export default function Hero({ onTourClick, onProgramsClick }: HeroProps) {
  // Anim options [ease, duration] matching parent-friendly goals
  const transitionMedium = { duration: 1.0, ease: [0.22, 1, 0.36, 1] };
  const transitionSlow = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: transitionMedium
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-natural-bg"
    >
      {/* Background Soft Parallax Drift Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-natural-earth/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[5%] w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-natural-caramel/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Text Frame */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-natural-caramel/10 text-natural-caramel-dark px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <Sprout className="w-3.5 h-3.5 text-natural-caramel-dark" />
              <span>Authentic Montessori Education</span>
            </motion.div>

            {/* School Main Headings */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl md:text-[56px] text-natural-dark tracking-tight leading-[1.1] font-semibold"
              >
                Nurturing the <br/><span className="italic text-natural-moss">Natural Spark</span> of Every Child.
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="font-serif text-base sm:text-lg italic text-[#8B7E66] font-medium"
              >
                “While play is child’s work, the child learns how to learn.”
              </motion.p>
            </div>

            {/* Welcome Brief Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-natural-muted max-w-xl text-base sm:text-lg leading-relaxed font-sans"
            >
              Welcome to <strong>Burgeon Montessori</strong>, a heartwarming organic sanctuary in HSR Layout where children build foundational independence, critical mathematics logic, and deep bilingual articulation through hand-crafted tactile materials.
            </motion.p>

            {/* Credibility Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-sm pt-2"
            >
              <div className="flex items-center space-x-2 text-natural-text/85">
                <ShieldCheck className="w-4 h-4 text-natural-moss" />
                <span className="text-xs font-semibold tracking-wide font-sans">AMI / IMS Oriented</span>
              </div>
              <div className="flex items-center space-x-2 text-natural-text/85">
                <ShieldCheck className="w-4 h-4 text-natural-moss" />
                <span className="text-xs font-semibold tracking-wide font-sans">Strict 1:8 Ratio Support</span>
              </div>
            </motion.div>

            {/* Action Buttons Frame */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                onClick={onTourClick}
                className="flex items-center justify-center space-x-2 bg-natural-moss text-white hover:bg-[#4A5A4D] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-semibold shadow-xl shadow-natural-moss/20 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Book Campus Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onProgramsClick}
                className="flex items-center justify-center space-x-2 bg-white border border-natural-border text-natural-moss hover:bg-[#FAF8F5] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer text-center"
              >
                <BookOpen className="w-4 h-4" />
                <span>Our Curriculum</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transitionSlow}
              className="relative rounded-[40px] overflow-hidden bg-natural-border/30 p-3 shadow-2xl border border-natural-border/50 rotate-[-1.5deg]"
            >
              {/* Classroom child photo container */}
              <div className="relative rounded-2xl overflow-hidden depth-container aspect-square md:aspect-[4/5] lg:aspect-square bg-natural-moss/10">
                <img
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop"
                  alt="Child with beautiful wooden sensory materials at Burgeon Montessori schoolroom"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay Badge */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-natural-dark/80 via-natural-dark/30 to-transparent flex flex-col justify-end">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 px-4 py-3 rounded-xl max-w-xs self-start text-left">
                    <p className="text-[10px] uppercase font-sans tracking-widest text-[#E9EDC9] font-bold">Safe & Authentic</p>
                    <p className="text-xs font-medium text-white">Natural, toxic-free wood environment for pure tactile growth.</p>
                  </div>
                </div>
              </div>

              {/* Float Card Indicator Decimals floating layer */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-white border border-natural-border p-3 rounded-2xl shadow-md hidden sm:flex items-center space-x-3 max-w-xs text-left"
              >
                <div className="w-9 h-9 rounded-full bg-natural-caramel flex items-center justify-center text-white text-xs font-extrabold shadow-sm">
                  10
                </div>
                <div>
                  <p className="text-[10px] font-sans text-natural-muted uppercase font-bold tracking-wider leading-none">Mathematic Journey</p>
                  <p className="text-xs font-semibold text-natural-dark leading-tight">Golden Bead Beads Decimal</p>
                </div>
              </motion.div>
              
              {/* Float Card Indicator Language */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-[#2D3A30] border border-[#2D3A30]/50 p-3 rounded-2xl shadow-md hidden sm:flex items-center space-x-3 max-w-xs text-left"
              >
                <div className="w-9 h-9 rounded-full bg-[#526555] flex items-center justify-center text-white text-base font-bold shadow-sm font-serif">
                  A
                </div>
                <div>
                  <p className="text-[10px] font-sans text-[#E9EDC9] uppercase font-bold tracking-wider leading-none">Language Discovery</p>
                  <p className="text-xs font-semibold text-white leading-tight">Sandpaper Letters Writing</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
