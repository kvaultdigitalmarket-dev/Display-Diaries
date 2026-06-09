'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with luxury borders and details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant border offset */}
            <div className="absolute -inset-4 border border-[#C9A96E]/20 translate-x-2 translate-y-2 pointer-events-none select-none" />
            
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 shadow-md">
              <Image
                src="/images/about_story.png"
                alt="Display Diaries Luxury Event Setup"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Fine print caption */}
            <div className="mt-4 flex justify-between text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
              <span>Exhibition Showcase</span>
              <span>• Established 2024</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
              The Platform
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#111111] leading-tight mb-8">
              Bridging Global Luxury <br />
              <span className="italic">With India&apos;s Elite</span>
            </h2>

            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                Display Diaries was founded with a singular, sophisticated vision: to create a bridge connecting the world&apos;s most prestigious luxury fashion houses with India&apos;s most discerning, high-net-worth audience.
              </p>
              
              <p>
                By curating invite-only, high-fashion showcases and designer pop-ups, we transformed Ahmedabad&apos;s lifestyle landscape. We replace typical corporate exhibition spaces with immersive, editorial experiences that feel comparable to global fashion weeks.
              </p>

              <blockquote className="border-l border-[#C9A96E] pl-6 my-8 py-1">
                <p className="font-serif text-lg md:text-xl italic text-[#111111] leading-relaxed">
                  &ldquo;We don&apos;t host events; we curate moments where art, design, and luxury enthusiasts converge.&rdquo;
                </p>
              </blockquote>

              <p>
                From partnerships with renowned multi-brand retailers like Le Mill and White Crow to organizing launch parties for designers like Judith Leiber, Loewe, and Zimmermann, our showcases attract 300 to 500 hand-picked invitees, including business leaders, celebrity influencers, and tastemakers.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 mt-12 pt-8">
              <div>
                <span className="font-serif text-2xl text-[#111111] font-light">Ahmedabad</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A96E] mt-1 font-medium">Headquarters</span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#111111] font-light">Invite-Only</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#C9A96E] mt-1 font-medium">Event Format</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
