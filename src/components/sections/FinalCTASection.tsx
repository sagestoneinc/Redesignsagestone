import React from 'react';
import { Container } from '../Container';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="relative bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Sparkles className="text-sage-200" size={18} />
              <span className="text-sm text-sage-50">Start your free 14-day trial</span>
            </div>

            <h2 className="text-white mb-6 max-w-3xl mx-auto">
              Turn every email into measurable revenue
            </h2>

            <p className="text-xl text-sage-100 max-w-2xl mx-auto mb-12">
              Join teams that use SageStone Lab to automate workflows, guard deliverability, and see revenue impact without guesswork.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-700 rounded-lg hover:shadow-2xl transition-all font-medium group"
              >
                Start Free Trial – No Card
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sage-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5-5.5-4h6.5L10 1z" fill="currentColor"/>
                </svg>
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sage-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5-5.5-4h6.5L10 1z" fill="currentColor"/>
                </svg>
                <span className="text-sm">14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sage-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5-5.5-4h6.5L10 1z" fill="currentColor"/>
                </svg>
                <span className="text-sm">Setup in under 5 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {/* Placeholder for company logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-stone-200 rounded-lg flex items-center justify-center">
                <span className="text-stone-400 text-xs">Company {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}