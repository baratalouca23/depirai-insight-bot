import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { AIChatWidget } from '@/components/features/AIChatWidget';
import { AccessibilityMenu } from '@/components/features/AccessibilityMenu';
import { CookieBanner } from '@/components/features/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
      <AccessibilityMenu />
      <CookieBanner />
    </div>
  );
};

export default Index;
