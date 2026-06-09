'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerForm from '../components/PartnerForm';
import { Shield, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const openPartner = () => setIsPartnerOpen(true);
  const closePartner = () => setIsPartnerOpen(false);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Information' },
    { id: 'cookies-analytics', title: '4. Cookies & Analytics' },
    { id: 'information-sharing', title: '5. Information Sharing' },
    { id: 'data-security', title: '6. Data Security' },
    { id: 'third-party-links', title: '7. Third-Party Links' },
    { id: 'user-rights', title: '8. Your Rights' },
    { id: 'policy-changes', title: '9. Changes To This Policy' },
    { id: 'contact-info', title: '10. Contact Information' },
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
                <Shield size={14} className="text-[#C9A96E]" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-semibold">
                  Legal Documentation
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#111111] tracking-wide leading-tight">
                Privacy Policy
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

          {/* Policy Text Content */}
          <div className="lg:w-3/4 max-w-3xl font-sans text-zinc-700 font-light text-sm md:text-base leading-relaxed space-y-12">
            
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <p>
                  Welcome to <strong>Display Diaries</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Display Diaries is a luxury fashion and lifestyle platform that curates exclusive designer showcases, fashion exhibitions, luxury events, and premium brand collaborations.
                </p>
                <p>
                  This Privacy Policy describes how we collect, store, protect, and use the personal information you share with us through our website. Our platform serves strictly as an informational brand showcase and contact platform. We do not sell products online, process online payments, provide user accounts, or offer subscription services.
                </p>
                <p>
                  By accessing our website or voluntarily submitting your details through our contact forms, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <p>
                  We only collect personal information that you voluntarily provide to us when you fill out contact forms, submit partnership inquiries, or interact with us.
                </p>
                <p className="font-medium text-[#111111]">
                  The information we collect may include:
                </p>
                <ul className="list-none space-y-3.5 pl-0">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Name:</strong> To address you and coordinate inquiries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Email Address:</strong> To correspond regarding events, sponsorships, or brand collaborations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Phone Number:</strong> To contact you directly regarding business proposals or event queries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Company or Brand Name:</strong> (If provided) to understand and evaluate potential brand collaborations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Voluntarily Submitted Information:</strong> Any details, comments, or attachments you submit within our website contact forms.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section id="how-we-use" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                3. How We Use Information
              </h2>
              <div className="space-y-4">
                <p>
                  We process the personal information we collect to fulfill our legitimate business interests, including providing information and managing relationships with brands and patrons.
                </p>
                <p className="font-medium text-[#111111]">
                  Specifically, we use this information to:
                </p>
                <ul className="list-none space-y-3.5 pl-0">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Respond to Inquiries:</strong> Review and answer contact form submissions and coordinator queries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Discuss Partnerships & Collaborations:</strong> Evaluate and negotiate brand alignments, designer exhibitions, and showcase sponsorships.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Provide Requested Information:</strong> Deliver event brochures, designer packages, and details regarding upcoming showcases.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[#C9A96E] mt-1 shrink-0" />
                    <span><strong>Improve Website Experience:</strong> Assess analytics to optimize website structure, layout, and presentation quality.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Cookies and Analytics */}
            <section id="cookies-analytics" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                4. Cookies and Analytics
              </h2>
              <div className="space-y-4">
                <p>
                  We use cookies and basic tracking technologies to measure website metrics and enhance browsing. Cookies are minor text files stored on your device that compile general navigation data.
                </p>
                <p>
                  We utilize web performance and analytics tools (such as Google Analytics) to capture anonymous data regarding site traffic, popular layout elements, and performance metrics. We do not link these analytics to personally identifiable information. You may block or adjust cookies using your browser settings, though doing so might disable certain user interface elements.
                </p>
              </div>
            </section>

            {/* 5. Information Sharing */}
            <section id="information-sharing" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                5. Information Sharing
              </h2>
              <div className="space-y-4">
                <p>
                  <strong>Personal information is not sold.</strong> We do not rent, distribute, trade, or share your personal data with third-party advertisers for independent marketing purposes.
                </p>
                <p>
                  We may share information only with trusted service providers who assist us in operating our website, managing emails, or conducting administrative tasks. These providers are bound by strict confidentiality clauses and are prohibited from using your personal information for any secondary purpose.
                </p>
              </div>
            </section>

            {/* 6. Data Security */}
            <section id="data-security" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                6. Data Security
              </h2>
              <div className="space-y-4">
                <p>
                  We implement reasonable administrative, technical, and operational security measures to safeguard and prevent unauthorized access, disclosure, or alteration of the personal information you submit to us.
                </p>
                <p>
                  Please note that while we use industry-standard precautions, no electronic transmission over the internet or database storage system can be guaranteed 100% secure. Therefore, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            {/* 7. Third-Party Links */}
            <section id="third-party-links" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                7. Third-Party Links
              </h2>
              <div className="space-y-4">
                <p>
                  Our website may feature links to external partner websites, brand boutiques, designer portfolios, or social media sites.
                </p>
                <p>
                  Display Diaries does not control, check, or monitor the privacy practices of external platforms. We are not responsible for the privacy policies, content, or practices of any third-party websites. We encourage you to review their policies directly when leaving our site.
                </p>
              </div>
            </section>

            {/* 8. Your Rights */}
            <section id="user-rights" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                8. Your Rights
              </h2>
              <div className="space-y-4">
                <p>
                  You hold control over your personal data. You have the right to request access to the personal information we maintain about you, request corrections to inaccurate details, or request the deletion of your personal data.
                </p>
                <p>
                  To submit a request regarding your data, please contact us using our concierge contact details. We will process and address all valid requests in a timely manner.
                </p>
              </div>
            </section>

            {/* 9. Changes To This Policy */}
            <section id="policy-changes" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                9. Changes To This Policy
              </h2>
              <div className="space-y-4">
                <p>
                  We may revise this Privacy Policy periodically to reflect operational adjustments or legal modifications. Any revisions will be published directly on this page with an updated &quot;Last Updated&quot; date at the top of the policy. We encourage you to review this page periodically to stay informed about how we protect your information.
                </p>
              </div>
            </section>

            {/* 10. Contact Information */}
            <section id="contact-info" className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light tracking-wide uppercase border-b border-zinc-200 pb-3 mb-6">
                10. Contact Information
              </h2>
              <div className="space-y-4">
                <p>
                  For any questions or privacy inquiries regarding this policy, please contact our administrative concierge:
                </p>
                
                {/* Premium Contact Card */}
                <div className="border border-[#C9A96E]/20 bg-[#FAF8F5] p-6 md:p-8 mt-6 max-w-xl shadow-sm relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                  <h4 className="font-serif text-lg text-[#111111] tracking-wider uppercase mb-4">
                    Display Diaries Concierge
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
