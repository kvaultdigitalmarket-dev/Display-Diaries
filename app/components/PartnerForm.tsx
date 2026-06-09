'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface PartnerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerForm({ isOpen, onClose }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    website: '',
    inquiryType: 'Brand Showcase',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      brand: '',
      website: '',
      inquiryType: 'Brand Showcase',
      message: '',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Form Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:max-w-xl bg-[#FAF8F5] text-[#111111] shadow-2xl z-50 overflow-y-auto flex flex-col p-8 md:p-12 border-l border-[#C9A96E]/20"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif italic text-lg text-[#C9A96E] tracking-wider">Display Diaries</span>
              <button 
                onClick={onClose}
                className="p-2 -mr-2 text-zinc-400 hover:text-black transition-colors focus:outline-none"
                aria-label="Close form"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-3">
                    Partner With Us
                  </h2>
                  <p className="text-zinc-500 font-light text-sm mb-8 leading-relaxed">
                    Collaborate with Ahmedabad&apos;s premier luxury platform. Share your details, and our team will curate a tailored proposal for your brand.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light"
                        placeholder="e.g. Riya Sen"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light"
                          placeholder="riya@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="brand" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                          Brand / Company <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="brand"
                          required
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                          className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light"
                          placeholder="e.g. Maison Dior"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="website" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                          Website / Social Link
                        </label>
                        <input
                          type="url"
                          id="website"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light"
                          placeholder="https://instagram.com/brand"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light"
                        >
                          <option>Brand Showcase</option>
                          <option>Designer Pop-Up</option>
                          <option>Sponsorship</option>
                          <option>Media Partnership</option>
                          <option>Guest Invitation</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1.5 font-medium">
                        Tell Us About Your Brand <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light flex-1 min-h-[120px] resize-y"
                        placeholder="Describe your design aesthetics, target audience, and showcase goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#111111] hover:bg-[#C9A96E] text-white py-4 px-6 text-xs uppercase tracking-widest transition-colors duration-500 font-medium disabled:bg-zinc-400 flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <span className="inline-block animate-pulse">Reviewing Details...</span>
                      ) : (
                        <span>Submit Proposal</span>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex-1 flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] mb-6">
                    <Check size={28} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-light tracking-wide text-[#111111] mb-4">
                    Inquiry Received
                  </h2>
                  <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed mb-8">
                    Thank you, <span className="font-medium text-black">{formData.name}</span>. Your request to showcase <span className="font-medium text-black">{formData.brand}</span> has been logged. Our curating team will review and connect with you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] py-3 px-8 text-xs uppercase tracking-widest transition-colors duration-300 font-medium"
                  >
                    Close Panel
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
