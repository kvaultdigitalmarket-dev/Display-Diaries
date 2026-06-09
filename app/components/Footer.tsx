'use client';

import React from 'react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.startsWith('#') ? href : `#${href}`;
    const element = document.querySelector(hash);
    
    if (element) {
      e.preventDefault();
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      // If we are not on the homepage, redirect to homepage with hash
      e.preventDefault();
      window.location.href = '/' + hash;
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#111111] border-t border-zinc-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding & Sub */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="/" className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-light tracking-[0.2em] text-[#111111] uppercase">
              Display Diaries
            </span>
            <span className="text-[8px] font-sans tracking-[0.3em] text-[#C9A96E] uppercase mt-1 leading-none">
              Luxury Showcase Platform
            </span>
          </a>
          <span className="text-[10px] text-zinc-400 font-light mt-4">
            Curating global haute couture experiences for Ahmedabad&apos;s elite.
          </span>
        </div>

        {/* Directory links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="#experiences"
            onClick={(e) => handleLinkClick(e, '#experiences')}
            className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#C9A96E] transition-colors font-medium"
          >
            Experiences
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#C9A96E] transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#founders"
            onClick={(e) => handleLinkClick(e, '#founders')}
            className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#C9A96E] transition-colors font-medium"
          >
            Founders
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleLinkClick(e, '#gallery')}
            className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#C9A96E] transition-colors font-medium"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#C9A96E] transition-colors font-medium"
          >
            Contact
          </a>
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col items-center md:items-end text-[10px] text-zinc-400 font-light tracking-wide gap-2">
          <div className="flex gap-4 text-zinc-500 font-medium">
            <a href="/privacy" className="hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-[#C9A96E] transition-colors">Terms & Conditions</a>
          </div>
          <span>&copy; {new Date().getFullYear()} Display Diaries. All rights reserved.</span>
          <span>Designed with absolute sophistication.</span>
        </div>

      </div>
    </footer>
  );
}
