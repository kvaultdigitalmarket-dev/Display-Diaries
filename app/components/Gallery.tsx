'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
  {
    src: '/images/hero_bg.png',
    title: 'Haute Couture Runway Edit',
    category: 'Vogue Showcase',
    gridClass: 'md:col-span-8 md:row-span-2 aspect-[16/9] md:aspect-auto',
  },
  {
    src: '/images/experience_showcase.png',
    title: 'Exquisite Leather Curation',
    category: 'Judith Leiber Launch',
    gridClass: 'md:col-span-4 aspect-square md:aspect-auto',
  },
  {
    src: '/images/about_story.png',
    title: 'Minimalist Gallery Setup',
    category: 'Le Mill Exhibition',
    gridClass: 'md:col-span-4 aspect-square md:aspect-auto',
  },
  {
    src: '/images/founder_riya.png',
    title: 'Curating Creative Directions',
    category: 'Riya Jain Portfolio',
    gridClass: 'md:col-span-6 aspect-[3/4] md:aspect-auto',
  },
  {
    src: '/images/founder_nandini.png',
    title: 'Establishing Strategic Growth',
    category: 'Nandini Bansal Portfolio',
    gridClass: 'md:col-span-6 aspect-[3/4] md:aspect-auto',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
            Visual Journal
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#111111] leading-tight">
            The Lookbook of <br />
            <span className="italic">Distinguished Moments</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A96E] mt-6" />
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[250px] lg:auto-rows-[350px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className={`relative group overflow-hidden bg-zinc-50 ${item.gridClass}`}
            >
              {/* Outer border wrap */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 z-20 pointer-events-none transition-all duration-500" />

              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
              
              {/* Text metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] uppercase tracking-widest text-[#C9A96E] font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-light text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
