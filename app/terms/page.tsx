'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerForm from '../components/PartnerForm';
import { Scale, ChevronRight } from 'lucide-react';

export default function TermsConditions() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('acceptance-terms');

  const openPartner = () => setIsPartnerOpen(true);
  const closePartner = () => setIsPartnerOpen(false);

  const sections = [
    { id: 'acceptance-terms', title: '1. Acceptance of Terms' },
    { id: 'website-purpose', title: '2. Website Purpose' },
    { id: 'intellectual-property', title: '3. Intellectual Property' },
    { id: 'user-conduct', title: '4. User Conduct' },
    { id: 'accuracy-info', title: '5. Accuracy of Information' },
    { id: 'event-information', title: '6. Event Information' },
    { id: 'third-party-content', title: '7. Third-Party Content' },
    { id: 'limitation-liability', title: '8. Limitation of Liability' },
    { id: 'external-links', title: '9. External Links' },
    { id: 'privacy-reference', title: '10. Privacy Policy Reference' },
    { id: 'modifications-terms', title: '11. Modifications to Terms' },
    { id: 'governing-law', title: '12. Governing Law' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#111111] overflow-x-hidden flex flex-col justify-between font-sans">
      {/* Opaque static navbar suited for subpage */}
      <Navbar onOpenPartner={openPartner} solid={true} />

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow pt-28 md:pt-36 pb-20 relative z-10">
        
        {/* Editorial Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C9A96E]/20 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <Scale size={14} className="text-[#C9A96E]" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-semibold">
                  Legal Documentation
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#111111] tracking-wide leading-tight">
                Terms & Conditions
              </h1>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <span className="text-[10px] font-sans tracking-widest text-zinc-400 uppercase">
                Last Updated: June 9, 2026
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout with Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sticky Left Sidebar for Desktop navigation */}
          <aside className="lg:w-1/4 lg:sticky lg:top-28 h-fit hidden lg:block">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold mb-6">
              Document Index
            </h3>
            <nav className="flex flex-col space-y-3.5 border-l border-zinc-200 pl-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollToSection(section.id)}
                  className={`text-xs uppercase tracking-wider text-left transition-all duration-300 font-medium ${
                    activeSection === section.id
                      ? 'text-[#C9A96E] pl-1.5 font-semibold border-l-2 border-[#C9A96E] -ml-[18px]'
                      : 'text-zinc-400 hover:text-[#111111]'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Terms Text Content */}
          <div className="lg:w-3/4 max-w-3xl font-sans text-zinc-700 font-light text-sm md:text-base leading-relaxed space-y-12">
            
            {/* 1. Acceptance of Terms */}
            <section id="acceptance-terms" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4">
                <p>
                  By accessing or using the website of <strong>Display Diaries</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at <a href="https://displaydiaries.com" className="text-[#C9A96E] hover:underline font-normal">displaydiaries.com</a>, you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website.
                </p>
                <p>
                  These Terms & Conditions constitute a legally binding agreement between you and Display Diaries. Accessing or using any features of the website signifies your acceptance of these conditions in their entirety.
                </p>
              </div>
            </section>

            {/* 2. Website Purpose */}
            <section id="website-purpose" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                2. Website Purpose
              </h2>
              <div className="space-y-4">
                <p>
                  This website is provided for <strong>informational and promotional purposes only</strong>. It functions as a brand showcase platform where visitors can learn about Display Diaries, view details of previous designer exhibitions, read about our founders, discover participating luxury brands, and contact us regarding sponsorships, partnerships, or general inquiries.
                </p>
                <p>
                  This website does not offer e-commerce functionalities, process monetary payments, provide user accounts, or support subscription-based products.
                </p>
              </div>
            </section>

            {/* 3. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                3. Intellectual Property
              </h2>
              <div className="space-y-4">
                <p>
                  All content, graphics, branding elements, logo marks, text, layout structures, user interfaces, showcase photos, and designs featured on this website are the sole property of Display Diaries unless explicitly credited otherwise.
                </p>
                <div className="bg-[#C9A96E]/5 border-l-2 border-[#C9A96E] p-5 my-4">
                  <p className="font-medium text-[#111111] text-sm md:text-base mb-2">
                    Usage Restrictions:
                  </p>
                  <p className="text-zinc-700 text-xs md:text-sm">
                    <strong>Unauthorized copying, reproduction, extraction, distribution, display, or modification of any material on this website is strictly prohibited.</strong> You must not use our branding or design concepts without receiving prior written consent from the founders of Display Diaries.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. User Conduct */}
            <section id="user-conduct" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                4. User Conduct
              </h2>
              <div className="space-y-4">
                <p>
                  You agree to use this website in a lawful manner.
                </p>
                <p className="font-medium text-[#111111]">
                  Specifically, you agree that you must not:
                </p>
                <ul className="list-none space-y-3.5 pl-0">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span>Misuse the website by knowingly introducing viruses, trojans, worms, or other malicious code.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span>Attempt to gain unauthorized access to our website host servers, databases, or associated administration systems.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span>Engage in automated data extraction, web scraping, or automated system crawling without our direct written permission.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Accuracy of Information */}
            <section id="accuracy-info" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                5. Accuracy of Information
              </h2>
              <div className="space-y-4">
                <p>
                  While we take reasonable steps to ensure the information on this website is current, Display Diaries does not guarantee that the content, descriptions, details, or event timelines displayed are complete, fully accurate, or error-free at all times.
                </p>
                <p>
                  The website materials are presented for general promotion, and we reserve the right to correct errors or update information without prior notice.
                </p>
              </div>
            </section>

            {/* 6. Event Information */}
            <section id="event-information" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                6. Event Information
              </h2>
              <div className="space-y-4">
                <p>
                  Display Diaries coordinates highly curated, invite-only showcases and designer exhibitions.
                </p>
                <p>
                  <strong>Please note that event details, scheduling, timings, participating brands, and featured showcases may change or be modified without prior notice.</strong> We are not liable for any scheduling changes, designer substitutions, or event changes that affect visitor arrangements.
                </p>
              </div>
            </section>

            {/* 7. Third-Party Content */}
            <section id="third-party-content" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                7. Third-Party Content
              </h2>
              <div className="space-y-4">
                <p>
                  This website may reference designer names, brand partners, media coverages, or event collaborators.
                </p>
                <p>
                  References, images, or mentions of partner brands and designers are provided for informational and editorial purposes only. Mention of these parties does not construct a endorsement of their third-party products, services, or individual policies.
                </p>
              </div>
            </section>

            {/* 8. Limitation of Liability */}
            <section id="limitation-liability" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                8. Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p>
                  To the maximum extent permitted by applicable law, Display Diaries, its founders, and employees shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to access or use, this website.
                </p>
                <p>
                  This includes, but is not limited to, damage to your computer hardware, software, or data caused by server outages, network errors, or malicious files that may infect your device through use of the internet.
                </p>
              </div>
            </section>

            {/* 9. External Links */}
            <section id="external-links" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                9. External Links
              </h2>
              <div className="space-y-4">
                <p>
                  Our website may provide hyperlinks to external websites owned or operated by third parties, such as brand boutiques or social channels.
                </p>
                <p>
                  Display Diaries has no control over the content, safety, or policies of external sites. We are not responsible or liable for any materials, advertisements, or practices on external web environments. Clicking these links is at your sole discretion.
                </p>
              </div>
            </section>

            {/* 10. Privacy Policy Reference */}
            <section id="privacy-reference" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                10. Privacy Policy Reference
              </h2>
              <div className="space-y-4">
                <p>
                  Your use of this website is also subject to our Privacy Policy. Please review our <a href="/privacy" className="text-[#C9A96E] hover:underline font-normal">Privacy Policy</a>, which outlines how we gather, protect, and handle the personal information you submit to us. The Privacy Policy is incorporated by reference into these Terms & Conditions.
                </p>
              </div>
            </section>

            {/* 11. Modifications to Terms */}
            <section id="modifications-terms" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                11. Modifications to Terms
              </h2>
              <div className="space-y-4">
                <p>
                  We reserve the right to revise and modify these Terms & Conditions at our discretion. Any adjustments will be published directly on this page with an updated &quot;Last Updated&quot; marker at the top of this document.
                </p>
                <p>
                  Your continued access or use of the website following the post of revised terms indicates your acceptance of and agreement to the modified Terms & Conditions.
                </p>
              </div>
            </section>

            {/* 12. Governing Law */}
            <section id="governing-law" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                12. Governing Law
              </h2>
              <div className="space-y-4">
                <p>
                  These Terms & Conditions, and any claims or disputes arising out of your use of this website, shall be governed by, and construed in accordance with, the laws of India.
                </p>
                <p>
                  Any legal suit, action, or proceeding arising out of or related to these Terms & Conditions shall be subject to the exclusive jurisdiction of the competent courts of <strong>Ahmedabad, Gujarat, India</strong>.
                </p>

                {/* Premium Contact Card */}
                <div className="border border-[#C9A96E]/20 bg-[#FAF8F5] p-6 md:p-8 mt-10 max-w-xl shadow-sm relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                  <h4 className="font-serif text-lg text-[#111111] tracking-wider uppercase mb-4">
                    Display Diaries Legal Concierge
                  </h4>
                  <ul className="space-y-3.5 text-xs md:text-sm font-sans font-light text-zinc-600">
                    <li className="flex items-start">
                      <span className="w-20 font-medium text-[#111111] uppercase tracking-wider">Email:</span>
                      <a href="mailto:crmsupport@Datavaultcenter.com" className="text-[#C9A96E] hover:underline font-normal">
                        crmsupport@Datavaultcenter.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="w-20 font-medium text-[#111111] uppercase tracking-wider">Address:</span>
                      <span>Display Diaries Office, Ahmedabad, Gujarat, India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>

      </main>

      {/* Shared site footer */}
      <Footer />

      {/* Centralized Drawer Form */}
      <PartnerForm isOpen={isPartnerOpen} onClose={closePartner} />
    </div>
  );
}
