import { lazy, Suspense } from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/components/sections/Hero';
import { ScrollProgress } from '@/components/features/ScrollProgress';
import { BackToTop } from '@/components/features/BackToTop';
import { TechGrid } from '@/components/features/TechGrid';

// Lazy load below-the-fold sections
const ClientLogos = lazy(() => import('@/components/sections/ClientLogos').then(m => ({ default: m.ClientLogos })));
const Services = lazy(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import('@/components/sections/Portfolio').then(m => ({ default: m.Portfolio })));
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const FAQ = lazy(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

// Lazy load non-critical features
const AccessibilityMenu = lazy(() => import('@/components/features/AccessibilityMenu').then(m => ({ default: m.AccessibilityMenu })));
const CookieBanner = lazy(() => import('@/components/features/CookieBanner').then(m => ({ default: m.CookieBanner })));
const WhatsAppFloat = lazy(() => import('@/components/features/WhatsAppFloat').then(m => ({ default: m.WhatsAppFloat })));
const MobileCTA = lazy(() => import('@/components/features/MobileCTA').then(m => ({ default: m.MobileCTA })));

// Minimal skeleton
const SectionSkeleton = () => (
  <div className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-5">
      <div className="h-6 w-40 bg-muted/30 rounded mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-40 bg-muted/20 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <TechGrid className="fixed inset-0 z-0" />
      <ScrollProgress />
      <Header />
      
      <main id="main-content" className="relative z-10">
        <Hero />
        
        <Suspense fallback={<SectionSkeleton />}>
          <ClientLogos />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
      <BackToTop />
      
      <Suspense fallback={null}>
        <WhatsAppFloat />
        <MobileCTA />
        <AccessibilityMenu />
        <CookieBanner />
      </Suspense>
    </div>
  );
};

export default Index;
