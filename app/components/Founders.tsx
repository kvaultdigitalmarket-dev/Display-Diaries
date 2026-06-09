'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Riya Jain',
    title: 'Co-Founder & Creative Director',
    image: '/images/founder_riya.png',
    credentials: 'London College of Fashion Graduate',
    bullets: ['Stylist & Creative Director', 'Fashion Curator & Trend Consultant', 'High-Fashion Influencer'],
    bio: 'With an eye trained in London\'s avant-garde fashion scene, Riya curates the artistic vision of Display Diaries, ensuring every brand aligns with international styling standards.',
  },
  {
    name: 'Nandini Bansal',
    title: 'Co-Founder & Strategic Director',
    image: '/images/founder_nandini.png',
    credentials: 'London Business School Alumna',
    bullets: ['Serial Entrepreneur', 'Luxury Brand Strategist', 'Strategic Visionary'],
    bio: 'Leveraging her business acumen from London, Nandini directs the operations and strategic growth, establishing relationships with global designers and luxury brand managers.',
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 md:py-36 bg-white border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
            The Founders
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#111111] tracking-wide">
            The Visionaries Behind <br />
            <span className="italic">Display Diaries</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: 'easeOut' }}
              className="flex flex-col"
            >
              {/* Image Container with elegant overlay */}
              <div className="relative aspect-[3/4] w-full bg-[#FAF8F5] overflow-hidden group mb-8">
                {/* Gold border outline inside */}
                <div className="absolute inset-4 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/30 transition-all duration-700 z-10 pointer-events-none" />
                
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-w-768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
              </div>

              {/* Founder Information */}
              <div className="flex flex-col flex-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C9A96E] mb-2 font-medium">
                  {founder.title}
                </span>
                
                <h3 className="font-serif text-3xl font-light text-[#111111] mb-1">
                  {founder.name}
                </h3>
                
                <span className="text-xs italic text-zinc-400 font-serif mb-6 block">
                  {founder.credentials}
                </span>

                <p className="text-zinc-600 font-light leading-relaxed text-sm md:text-base mb-6">
                  {founder.bio}
                </p>

                {/* Bullets lists */}
                <ul className="space-y-2.5 mt-auto border-t border-zinc-100 pt-6">
                  {founder.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center text-xs tracking-wider text-zinc-500 font-light">
                      <span className="w-1.5 h-1.5 bg-[#C9A96E] mr-3 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
