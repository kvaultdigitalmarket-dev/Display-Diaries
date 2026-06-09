'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Display Diaries curated a seamless, visually stunning experience that perfectly aligned with our brand guidelines. The high-net-worth client engagement surpassed our expectations.",
    author: "Le Mill Representation",
    role: "Luxury Retail Partner",
  },
  {
    quote: "The team’s eye for creative set designs and meticulous event operations brought our collections to life. Ahmedabad’s elite fashion audience responded beautifully.",
    author: "Founder, Moonray",
    role: "Designer Partner",
  },
  {
    quote: "The most exclusive events in the city. The showcase curation is always world-class, bringing international designers directly to us. An elite gathering.",
    author: "Ananya Shah",
    role: "VIP Invitee / Art Collector",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
            Endorsements
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#111111] leading-tight">
            Loved By Designers <br />
            <span className="italic">& Invitees</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              className="bg-white p-8 md:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between"
            >
              {/* Quotation Mark Accent */}
              <span className="font-serif text-[#C9A96E] text-5xl leading-none -mt-4 block font-light select-none">
                “
              </span>
              
              <p className="text-zinc-600 font-light text-sm md:text-base italic leading-relaxed mb-8 -mt-2">
                {t.quote}
              </p>

              <div className="border-t border-zinc-100 pt-6">
                <span className="block font-serif text-[#111111] font-medium text-base">
                  {t.author}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold mt-1">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
