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
const ParallaxSection = lazy(() => import('@/components/features/AnimatedSection').then(m => ({ default: m.ParallaxSection })));

// Minimal section placeholder
const SectionSkeleton = () => (
  <div className="py-16 md:py-24" aria-busy="true" aria-label="Carregando seção">
    <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="h-6 w-40 bg-muted/40 rounded mx-auto mb-6" />
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
      {/* Tech background animation */}
      <TechGrid className="fixed inset-0 z-0" />
      
      <ScrollProgress />
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.08} fadeIn>
            <ClientLogos />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.12} fadeIn>
            <Services />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.1} fadeIn>
            <Portfolio />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.08} fadeIn>
            <Testimonials />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.1} fadeIn>
            <About />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.06} fadeIn>
            <FAQ />
          </ParallaxSection>
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ParallaxSection speed={0.08} fadeIn>
            <Contact />
          </ParallaxSection>
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
