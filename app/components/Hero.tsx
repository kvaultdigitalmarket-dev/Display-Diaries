'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenPartner: () => void;
}

export default function Hero({ onOpenPartner }: HeroProps) {
  const handleScrollToExperiences = () => {
    const element = document.querySelector('#experiences');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="/images/hero_bg.png"
          alt="Display Diaries Luxury Fashion Showcase"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-60 scale-105"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Tiny tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C9A96E] font-semibold">
             अहमदाबाद • Display Diaries
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-[1.15] max-w-4xl"
        >
          Curating Extraordinary <br className="hidden md:inline" />
          <span className="italic">Fashion Experiences</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="text-zinc-300 font-light text-sm md:text-lg tracking-wide max-w-2xl mt-8 leading-relaxed font-sans"
        >
          Where global luxury brands meet India&apos;s most discerning audience. Invite-only designer showcases and curations for Ahmedabad&apos;s elite.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-12 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToExperiences}
            className="bg-white hover:bg-[#C9A96E] hover:text-white text-black py-4 px-8 text-xs uppercase tracking-widest transition-all duration-500 font-semibold w-full sm:w-auto"
          >
            Explore Experiences
          </button>
          <button
            onClick={onOpenPartner}
            className="border border-white/40 hover:border-[#C9A96E] hover:bg-[#C9A96E] text-white py-4 px-8 text-xs uppercase tracking-widest transition-all duration-500 font-semibold w-full sm:w-auto"
          >
            Partner With Us
          </button>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={handleScrollToExperiences}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-medium mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-[#C9A96E]"
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
