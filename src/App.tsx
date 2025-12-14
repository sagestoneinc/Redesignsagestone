import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { IntegrationsSection } from './components/sections/IntegrationsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { UseCasesSection } from './components/sections/UseCasesSection';
import { ProductSection } from './components/sections/ProductSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main>
        {/* Homepage Sections */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <IntegrationsSection />
        <HowItWorksSection />
        <UseCasesSection />
        
        {/* Product Page Section */}
        <ProductSection />
        
        {/* About Page Section */}
        <AboutSection />
        
        {/* Contact/Demo Page Section */}
        <ContactSection />
        
        {/* Final CTA */}
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
}
