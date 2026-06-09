'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '300-500',
    label: 'Distinguished Guests',
    sub: 'Tastemakers, entrepreneurs, celebrities per event',
  },
  {
    number: 'Multiple',
    label: 'International Brands',
    sub: 'Zimmermann, Loewe, Valentino, YSL & others',
  },
  {
    number: 'Exclusive',
    label: 'Invite-Only Formats',
    sub: 'Curating highly secure, VIP client interactions',
  },
  {
    number: 'Premium',
    label: 'Targeted Audience',
    sub: 'Ahmedabad’s elite collectors and buyers',
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] text-[#FAF8F5] py-20 md:py-28 border-t border-[#C9A96E]/20 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#C9A96E] opacity-[0.02] rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center p-4 md:p-6"
            >
              {/* Gold Accent Indicator */}
              <div className="w-6 h-[1px] bg-[#C9A96E] mb-6" />

              {/* Large Metric */}
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mb-3">
                {stat.number}
              </span>

              {/* Label */}
              <span className="text-[11px] uppercase tracking-widest text-[#C9A96E] font-semibold mb-2">
                {stat.label}
              </span>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-light max-w-[200px] leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
