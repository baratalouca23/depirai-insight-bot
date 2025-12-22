import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/components/sections/Hero';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { AccessibilityMenu } from '@/components/features/AccessibilityMenu';
import { CookieBanner } from '@/components/features/CookieBanner';
import { WhatsAppFloat } from '@/components/features/WhatsAppFloat';
import { MobileCTA } from '@/components/features/MobileCTA';
import { ScrollProgress } from '@/components/features/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
      <AccessibilityMenu />
      <CookieBanner />
    </div>
  );
};

export default Index;
