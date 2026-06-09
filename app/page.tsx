'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Founders from './components/Founders';
import Experiences from './components/Experiences';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import PartnerSection from './components/PartnerSection';
import PartnerForm from './components/PartnerForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openPartner = () => setIsPartnerOpen(true);
  const closePartner = () => setIsPartnerOpen(false);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#111111] overflow-x-hidden">
      <Navbar onOpenPartner={openPartner} />
      <Hero onOpenPartner={openPartner} />
      <Brands />
      <About />
      <Founders />
      <Experiences />
      <Stats />
      <Gallery />
      <PartnerSection onOpenPartner={openPartner} />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Interactive Form Drawer */}
      <PartnerForm isOpen={isPartnerOpen} onClose={closePartner} />
    </div>
  );
}
