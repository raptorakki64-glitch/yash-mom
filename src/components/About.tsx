/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, UserCheck, Sprout, Heart } from 'lucide-react';

export default function About() {
  const transitionMedium = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: transitionMedium,
    },
  };

  const corePillars = [
    {
      icon: Award,
      title: 'AMI/IMS Guided Faculty',
      desc: 'Our classes are led by highly trained, Association Montessori Internationale (AMI) style experts who understand physical observation and individual guidance.',
      color: 'text-natural-moss bg-natural-moss/10'
    },
    {
      icon: Sprout,
      title: 'Environment of Wood & Natural Craft',
      desc: 'Absolutely no plastic toys or flashing screen tablets. Shelves are stocked with pristine wood boards, physical letters, and decimal cylinder blocks.',
      color: 'text-natural-caramel-dark bg-natural-caramel/10'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic & Child-Sized',
      desc: 'All wash basins, shelves, and chairs are customized to child height, promoting daily handwashing, independence, and full safety assurance.',
      color: 'text-natural-dark bg-natural-sage/50'
    },
    {
      icon: UserCheck,
      title: 'Custom Individualized Trajectory',
      desc: 'We follow our strict 1:8 child-to-adult ratio, ensuring that kids do not wait for the class to catch up. They advance as fast as their curiosity demands.',
      color: 'text-natural-muted bg-natural-border/40'
    }
  ];

  return (
    <section id="about" className="py-24 bg-natural-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading Staggered Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-natural-caramel-dark"
          >
            Our Vision & Philosophy
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl font-bold text-natural-dark tracking-tight"
          >
            Fostering Natural Growth in a Loving Prepared Space
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-[1px] w-20 bg-natural-border mx-auto"
          />
          <motion.p
            variants={itemVariants}
            className="text-natural-muted text-base sm:text-lg leading-relaxed font-sans"
          >
            Burgeon Montessori House of Children follows the precise child-centered insights pioneered by 
            Dr. Maria Montessori. Our environment is not a schoolroom of passive desks, but a bustling, 
            natural laboratory where children lead their own developmental journey.
          </motion.p>
        </motion.div>

        {/* Top Pedagogy Overview Split column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionMedium}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-natural-dark">
              The Montessori Method of Teaching
            </h3>
            
            <p className="text-natural-muted text-base leading-relaxed font-sans">
              Developed over a century ago by Dr. Maria Montessori (Italy’s first female physician), the Montessori method respects the inner spiritual and intellectual blueprint of the child. It recognizes the <strong>"Absorbent Mind"</strong> of early childhood—the unique capacity of an infant to soak up language, physical order, math properties, and culture effortlessly.
            </p>

            <blockquote className="border-l-4 border-natural-caramel pl-4 py-1.5 italic font-serif text-natural-dark bg-natural-caramel/10 rounded-r-lg">
              “Scientific observation has established that education is not what the teacher gives; education is a natural process spontaneously carried out by the human individual.”
              <span className="block text-xs font-semibold uppercase tracking-wider text-natural-muted mt-1 not-italic font-sans">— Dr. Maria Montessori</span>
            </blockquote>

            <p className="text-natural-muted text-base leading-relaxed font-sans">
              At Burgeon, we honor this principle. There are no competitive test grades or static lectures. Instead, we prepare classrooms featuring hundreds of beautiful physical coordinate materials that children work with, naturally developing self-discipline, concentration, and deep logic.
            </p>
          </motion.div>

          {/* Pedagogy Graphic Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transitionMedium}
            className="lg:col-span-6 bg-natural-border/30 p-6 rounded-3xl border border-natural-border"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
                alt="Montessori wooden beds and coordination activities at Burgeon House"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-natural-dark/95 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center space-x-1.5 text-white shadow text-xs uppercase font-sans font-bold tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-natural-caramel stroke-natural-caramel text-natural-caramel" />
                <span>Child-Led Focus</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center divide-x divide-natural-border">
              <div>
                <p className="text-2xl font-serif font-extrabold text-natural-dark">100%</p>
                <p className="text-[10px] uppercase font-sans tracking-widest text-natural-muted font-bold">Wooden Materials</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-extrabold text-natural-dark">1:8</p>
                <p className="text-[10px] uppercase font-sans tracking-widest text-natural-muted font-bold">Child to Guide</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-extrabold text-natural-dark">AMI</p>
                <p className="text-[10px] uppercase font-sans tracking-widest text-natural-muted font-bold">Oriented Pedagogy</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Why Choose Burgeon Montessori core columns */}
        <div className="pt-8">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionMedium}
            className="font-serif text-2xl font-bold text-natural-dark text-center mb-12"
          >
            Why Caring Bengaluru Parents Choose Burgeon HOC
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white border border-natural-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-natural-moss transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.color} shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-natural-dark leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-natural-muted text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
