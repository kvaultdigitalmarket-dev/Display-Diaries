'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPartner: () => void;
  solid?: boolean;
}

export default function Navbar({ onOpenPartner, solid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(solid);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solid]);

  const navLinks = [
    { name: 'Experiences', href: '#experiences' },
    { name: 'About', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    const hash = href.startsWith('#') ? href : `#${href}`;
    const element = document.querySelector(hash);
    
    if (element) {
      e.preventDefault();
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      // If we are not on the homepage and/or the element is not found,
      // redirect to the homepage with the hash.
      e.preventDefault();
      window.location.href = '/' + hash;
    }
  };

  return (
    <>
      <motion.nav
        initial={solid ? { opacity: 1 } : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#C9A96E]/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className={`font-serif text-xl md:text-2xl font-light tracking-[0.25em] uppercase leading-none transition-colors duration-500 ${
              isScrolled ? 'text-[#111111]' : 'text-white'
            }`}>
              Display Diaries
            </span>
            <span className="text-[9px] font-sans tracking-[0.35em] text-[#C9A96E] uppercase mt-1 leading-none ml-0.5">
              Ahmedabad
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs uppercase tracking-widest hover:text-[#C9A96E] transition-colors duration-500 font-medium relative py-1 group ${
                  isScrolled ? 'text-[#111111]' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenPartner}
              className={`border px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-500 font-semibold hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-white ${
                isScrolled 
                  ? 'border-[#111111] text-[#111111]' 
                  : 'border-white text-white'
              }`}
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-500 ${
                isScrolled ? 'text-[#111111]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#FAF8F5] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-serif tracking-widest text-[#111111] border-b border-zinc-100 pb-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPartner();
                }}
                className="w-full bg-[#111111] hover:bg-[#C9A96E] text-white py-4 px-6 text-xs uppercase tracking-widest transition-colors duration-500 font-semibold text-center"
              >
                Partner With Us
              </button>
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                  Ahmedabad, India
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
