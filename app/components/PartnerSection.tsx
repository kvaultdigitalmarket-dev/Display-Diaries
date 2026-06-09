'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PartnerSectionProps {
  onOpenPartner: () => void;
}

export default function PartnerSection({ onOpenPartner }: PartnerSectionProps) {
  return (
    <section className="bg-[#111111] text-[#FAF8F5] py-24 md:py-36 relative overflow-hidden border-t border-[#C9A96E]/20">
      
      {/* Editorial design accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#C9A96E]/5 to-transparent blur-3xl pointer-events-none select-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold mb-4 block">
              Global Collaborations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Bring Your Brand To <br />
              <span className="italic text-[#C9A96E]">The Right Audience</span>
            </h2>
            
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Ahmedabad represents one of India&apos;s fastest-growing luxury consumer bases. Display Diaries offers a curated, invite-only gateway to connect your brand directly with local tastemakers, business leaders, elite buyers, and media representatives in a premium editorial setting.
            </p>

            {/* Benefits lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-zinc-800 pt-8">
              <div>
                <h4 className="font-serif text-lg text-white mb-2 font-light">Targeted Invites</h4>
                <p className="text-zinc-500 font-light text-xs leading-relaxed">
                  We curate custom guest lists matching your brand’s tier—attracting active collectors, fashion buyers, and media editors.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg text-white mb-2 font-light">End-to-End Production</h4>
                <p className="text-zinc-500 font-light text-xs leading-relaxed">
                  Our professional creative team manages venue selection, interior set design, light production, and security.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action card column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="bg-[#FAF8F5] text-[#111111] p-8 md:p-12 w-full max-w-md border border-[#C9A96E]/20 flex flex-col justify-between aspect-[4/5] shadow-lg">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#C9A96E] font-bold block mb-4">
                  Designer Proposal
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light leading-snug mb-4">
                  Request a Custom Curated Showcase
                </h3>
                <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed">
                  Receive a detailed demographic analysis, location proposal, and logistical structure customized for your brand’s Indian expansion.
                </p>
              </div>

              <button
                onClick={onOpenPartner}
                className="group flex items-center justify-between w-full bg-[#111111] hover:bg-[#C9A96E] text-white py-4 px-6 text-xs uppercase tracking-widest transition-colors duration-500 font-medium mt-8"
              >
                <span>Become A Partner</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  <ArrowRight size={14} className="ml-2" />
                </motion.div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
