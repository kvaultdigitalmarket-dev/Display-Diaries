'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    tag: 'Designer Pop-Up',
    title: 'Le Mill Showcase',
    description: 'Brought Paris-based and global contemporary designs (Zimmermann, Loewe) to Ahmedabad’s elite, styled as an upscale boutique.',
    date: 'Autumn Showcase',
  },
  {
    tag: 'Launch Event',
    title: 'Judith Leiber Premiere',
    description: 'An exclusive, invite-only launch of Judith Leiber’s iconic crystal minaudieres, attended by Ahmedabad’s celebrity circle.',
    date: 'Winter Gala',
  },
  {
    tag: 'Multi-Brand Pop-up',
    title: 'White Crow Exhibition',
    description: 'Curated edit in collaboration with White Crow, presenting luxury street labels and premium accessories to fashion enthusiasts.',
    date: 'Spring Curations',
  },
  {
    tag: 'Private Showcase',
    title: 'International Previews',
    description: 'High-end trunk shows providing private suites for clients to pre-order off-the-runway collections directly from designers.',
    date: 'Exclusive Invite-Only',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
              Signature Highlights
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#111111] leading-tight">
              Curated Luxury <br />
              <span className="italic">Experiences</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed md:mb-2">
            A retrospective of our exclusive invites, designer integrations, and haute couture pop-ups that redefined Ahmedabad&apos;s luxury landscape.
          </p>
        </div>

        {/* Layout: Featured Large Card + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Featured Large Card (Left column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col group"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden mb-6">
              <Image
                src="/images/experience_showcase.png"
                alt="Judith Leiber Luxury Accessories"
                fill
                sizes="(max-w-768px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm text-[#C9A96E] text-[10px] uppercase tracking-widest py-1.5 px-3 font-medium">
                Featured Collaboration
              </div>
            </div>
            
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-medium mb-2">
              Boutique Pop-Up
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#111111] font-light mb-3">
              Judith Leiber Launch & Private Trunk Shows
            </h3>
            <p className="text-zinc-600 font-light text-sm md:text-base leading-relaxed mb-4">
              Our hallmark curation showcasing rare collectibles, fine jewelry, and limited edition designer pieces. Organized inside private heritage suites for VIP collectors, achieving record engagements.
            </p>
            <span className="text-xs text-zinc-400 font-medium tracking-wider">
              Le Mill & White Crow Associates
            </span>
          </motion.div>

          {/* Grid of Other Experiences (Right column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                className="border-b border-zinc-200 pb-6 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] uppercase tracking-widest text-[#C9A96E] font-semibold">
                    {exp.tag}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-light tracking-wide">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="font-serif text-xl font-light text-[#111111] group-hover:text-[#C9A96E] transition-colors duration-300 mb-2">
                  {exp.title}
                </h4>
                
                <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
