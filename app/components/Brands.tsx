'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'LOEWE', style: 'font-serif tracking-[0.3em] font-bold text-sm md:text-base' },
  { name: 'ZIMMERMANN', style: 'font-sans tracking-[0.4em] font-light text-xs md:text-sm' },
  { name: 'VALENTINO', style: 'font-serif tracking-[0.35em] font-medium text-sm md:text-base' },
  { name: 'YVES SAINT LAURENT', style: 'font-sans tracking-[0.25em] font-light text-xs' },
  { name: 'PANGAIA', style: 'font-sans tracking-[0.3em] font-semibold text-xs md:text-sm' },
  { name: 'SELF-PORTRAIT', style: 'font-sans tracking-[0.2em] font-light lowercase text-sm' },
  { name: 'MAC DUGGAL', style: 'font-serif tracking-[0.25em] font-light italic text-sm md:text-base' },
  { name: 'FARM RIO', style: 'font-serif tracking-[0.4em] font-normal text-xs md:text-sm' },
  { name: 'MOONRAY', style: 'font-sans tracking-[0.45em] font-normal text-xs' },
  { name: 'ACLER', style: 'font-serif tracking-[0.35em] font-light text-sm md:text-base' },
];

export default function Brands() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 0.4, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-medium block mb-8">
          Trusted By Global Luxury Brands
        </span>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-center mt-12"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.3 } }}
              className="flex items-center justify-center cursor-default h-12"
            >
              <span className={`text-[#111111] select-none text-center ${brand.style}`}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
