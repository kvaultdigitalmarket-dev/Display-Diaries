'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-white border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Coordinates Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
                Connect With Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#111111] leading-tight mb-8">
                Request An <br />
                <span className="italic">Invitation</span>
              </h2>
              
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-10 max-w-sm">
                Display Diaries operates as an invite-only platform. For showcase inquiries, press, designer collaborations, or guest membership requests, reach out below.
              </p>
            </div>

            {/* Links and Contact Details */}
            <div className="space-y-8 border-t border-zinc-100 pt-8">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold mb-1">
                  General & Partnership Inquiries
                </span>
                <a
                  href="mailto:curate@displaydiaries.com"
                  className="font-serif text-xl font-light text-[#111111] hover:text-[#C9A96E] transition-colors duration-300"
                >
                  curate@displaydiaries.com
                </a>
              </div>
              
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold mb-1">
                  Follow Our Journal
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl font-light text-[#111111] hover:text-[#C9A96E] transition-colors duration-300"
                >
                  @displaydiaries
                </a>
              </div>
            </div>
          </div>

          {/* Invitation Form Column (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-[#FAF8F5] border border-[#C9A96E]/20 p-8 md:p-12">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-bold block mb-2">
                Join the Circle
              </span>
              <h3 className="font-serif text-2xl font-light text-[#111111] mb-4">
                Subscribe to our Invite-List
              </h3>
              <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed mb-8">
                Enter your details to receive private announcements, upcoming designer catalogs, and exclusive access to showcases in Ahmedabad.
              </p>

              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form
                    key="sub-form"
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-white border border-zinc-200 px-4 py-3.5 text-sm focus:border-[#C9A96E] focus:outline-none transition-colors duration-300 font-light text-black placeholder-zinc-400"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#111111] hover:bg-[#C9A96E] text-white py-3.5 px-8 text-xs uppercase tracking-widest transition-colors duration-500 font-medium flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sub-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 border border-[#C9A96E]/30 bg-[#C9A96E]/5 p-4"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                      <Check size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-[#111111] font-semibold">
                        Added to Invite-List
                      </span>
                      <span className="block text-xs text-zinc-500 font-light">
                        We will notify you before our next exclusive curation.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
