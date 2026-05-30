/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, HelpCircle, ArrowRight, ClipboardCheck, Sparkles } from 'lucide-react';
import { timelineSteps } from '../data';
import { EnquiryFormInput } from '../types';

export default function Admissions() {
  const [formData, setFormData] = useState<EnquiryFormInput>({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    programOfInterest: 'primary-program',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<EnquiryFormInput>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<EnquiryFormInput> = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!formData.childAge.trim()) newErrors.childAge = 'Child age is required';
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      newErrors.email = 'A valid email address is required';
    }
    
    // Simple phone pattern
    const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,10}$/;
    if (!formData.phone.trim() || !phonePattern.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Mimic quick, smooth network delay for feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const transitionMedium = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="admissions" className="py-24 bg-natural-bg-alt relative overflow-hidden">
      
      {/* Small design circles for aesthetic background depth */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-natural-earth/15 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-natural-caramel/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-natural-caramel-dark">Secure Your Child’s Seat</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-natural-dark tracking-tight">
            Admissions Process & Inquiry Form
          </h2>
          <div className="h-[1px] w-20 bg-natural-border mx-auto" />
          <p className="text-natural-muted text-base sm:text-lg leading-relaxed font-sans">
            Joining our community is a warm, unhurried experience. Read our sequential roadmap, tour our classrooms, and submit your initial enquiry request below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Timeline Steps (7/12 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-natural-dark mb-3 flex items-center space-x-2">
                <ClipboardCheck className="w-6 h-6 text-natural-moss" />
                <span>Roadmap to Enrollment</span>
              </h3>
              <p className="text-sm text-natural-muted font-sans">
                Each child’s transition is managed phase-by-phase with separation orientation to support parent and toddler emotional security.
              </p>
            </div>

            {/* Vertical Timeline Tree */}
            <div className="relative pl-6 sm:pl-8 border-l border-natural-border space-y-12 py-3 mr-4">
              
              {timelineSteps.map((step, sIdx) => {
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: sIdx * 0.12 }}
                    className="relative group text-left"
                  >
                    {/* Floating circular list bullet */}
                    <div className="absolute -left-[39px] sm:-left-[47px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5] border-2 border-natural-moss flex items-center justify-center text-natural-dark font-bold font-serif text-sm group-hover:bg-natural-moss group-hover:text-white group-hover:border-natural-moss transition-colors duration-300 shadow-sm z-10">
                      {step.step}
                    </div>

                    <div className="space-y-4 pl-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-serif text-lg font-bold text-natural-dark leading-tight">
                          {step.title}
                        </h4>
                        <span className="text-[10px] tracking-wider font-semibold font-sans text-natural-caramel-dark bg-natural-caramel/10 px-2.5 py-0.5 rounded-full border border-natural-caramel/20 w-max">
                          {step.subtitle}
                        </span>
                      </div>
                      
                      <p className="text-natural-muted text-sm leading-relaxed font-sans max-w-xl">
                        {step.description}
                      </p>

                      {/* Staged items sub-bullet checklist */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {step.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-center space-x-2 text-xs text-natural-muted/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-natural-caramel shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Form Block (5/12 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={transitionMedium}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-natural-border shadow-md relative"
            >
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1 mb-2 text-left">
                      <h4 className="font-serif text-xl font-bold text-natural-dark">
                        Enquiry Registration Form
                      </h4>
                      <p className="text-xs text-natural-muted font-sans">
                        Fill your specifications. Our director will call you within 24 operational hours.
                      </p>
                    </div>

                    <hr className="border-natural-border/30" />

                    {/* Parents Name Input */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="parentName" className="block text-xs font-semibold text-natural-dark tracking-wide font-sans">
                        Parent’s Full Name *
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans ${
                          errors.parentName ? 'border-rose-400 focus:ring-rose-400' : 'border-natural-border'
                        }`}
                        placeholder="e.g. Priya Sharma"
                      />
                      {errors.parentName && <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{errors.parentName}</p>}
                    </div>

                    {/* Child Name & Age Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name of Child */}
                      <div className="space-y-1 text-left">
                        <label htmlFor="childName" className="block text-xs font-semibold text-natural-dark tracking-wide">
                          Child’s First Name *
                        </label>
                        <input
                          id="childName"
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleInputChange}
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans ${
                            errors.childName ? 'border-rose-400 focus:ring-rose-400' : 'border-natural-border'
                          }`}
                          placeholder="e.g. Kabir"
                        />
                        {errors.childName && <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{errors.childName}</p>}
                      </div>

                      {/* Age of child */}
                      <div className="space-y-1 text-left">
                        <label htmlFor="childAge" className="block text-xs font-semibold text-natural-dark tracking-wide">
                          Child’s Current Age *
                        </label>
                        <input
                          id="childAge"
                          type="text"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans ${
                            errors.childAge ? 'border-rose-400 focus:ring-rose-400' : 'border-natural-border'
                          }`}
                          placeholder="e.g. 2.4 Years"
                        />
                        {errors.childAge && <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{errors.childAge}</p>}
                      </div>

                    </div>

                    {/* Email and Phone Contacts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Email Add */}
                      <div className="space-y-1 text-left">
                        <label htmlFor="email" className="block text-xs font-semibold text-natural-dark tracking-wide">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans ${
                            errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-natural-border'
                          }`}
                          placeholder="e.g. priya@gmail.com"
                        />
                        {errors.email && <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{errors.email}</p>}
                      </div>

                      {/* Phone Contact */}
                      <div className="space-y-1 text-left">
                        <label htmlFor="phone" className="block text-xs font-semibold text-natural-dark tracking-wide">
                          Mobile Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans ${
                            errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-natural-border'
                          }`}
                          placeholder="e.g. 9876543210"
                        />
                        {errors.phone && <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{errors.phone}</p>}
                      </div>

                    </div>

                    {/* Program dropdown selector */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="programOfInterest" className="block text-xs font-semibold text-natural-dark tracking-wide">
                        Program of Interest *
                      </label>
                      <select
                        id="programOfInterest"
                        name="programOfInterest"
                        value={formData.programOfInterest}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-natural-border rounded-xl px-4 py-2.5 text-sm text-natural-dark focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans cursor-pointer"
                      >
                        <option value="toddler-program">Toddler / Infant Community (1.5 - 3 yrs)</option>
                        <option value="primary-program">Primary / House of Children (3 - 6 yrs)</option>
                        <option value="afterschool-program">Daycare & After-School Club</option>
                      </select>
                    </div>

                    {/* Long details text panel */}
                    <div className="space-y-1 text-left">
                      <label htmlFor="message" className="block text-xs font-semibold text-natural-dark tracking-wide">
                        Additional Information for the School (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-natural-border rounded-xl px-4 py-2.5 text-sm text-natural-dark placeholder-natural-muted/35 focus:outline-none focus:ring-1 focus:ring-natural-moss focus:border-natural-moss font-sans resize-none"
                        placeholder="Share any special milestones, walking details, or previous group activities..."
                      />
                    </div>

                    {/* Submit Inquiry Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 bg-natural-moss text-white hover:bg-natural-moss-dark focus:ring-2 focus:ring-natural-moss py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 mt-2 disabled:opacity-75 cursor-pointer shadow-lg shadow-natural-moss/20"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin w-5 h-5 border-2 border-white/40 border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <span>Submit My Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </motion.button>

                  </motion.form>
                ) : (
                  // Breathtaking success feedback layout
                  <motion.div
                    key="submission-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="py-12 px-2 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-natural-moss/10 flex items-center justify-center text-natural-moss shadow-sm relative overflow-hidden">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="inline-flex items-center space-x-1.5 bg-natural-moss/10 text-natural-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-natural-moss" />
                        <span>Enquiry Logged</span>
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-natural-dark">
                        Thank You, {formData.parentName}!
                      </h4>
                      <p className="text-sm text-natural-muted font-sans max-w-sm leading-relaxed mx-auto">
                        We have recorded your interest in our <strong>{formData.programOfInterest === 'toddler-program' ? 'Toddler Program' : formData.programOfInterest === 'primary-program' ? 'Primary Program' : 'After-School Care/Daycare'}</strong> for your child, <strong>{formData.childName}</strong>. 
                      </p>
                    </div>

                    <div className="bg-natural-bg-alt border border-natural-border p-4 rounded-xl text-left w-full space-y-2 text-xs font-sans text-natural-dark">
                      <p><strong>Next Immediate Action:</strong></p>
                      <ul className="space-y-1.5 list-disc list-inside text-natural-muted">
                        <li>We will match your phone <strong>{formData.phone}</strong> against vacancies.</li>
                        <li>An orienting WhatsApp guide will be dispatched within 4 hours.</li>
                        <li>An invitation for Guided Campus Tour will be customized.</li>
                      </ul>
                    </div>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-widest text-natural-moss hover:text-[#4A5A4D] focus:outline-none flex items-center space-x-1"
                    >
                      <span>Submit another enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
