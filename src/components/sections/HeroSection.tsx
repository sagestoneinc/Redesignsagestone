import React from 'react';
import { Container } from '../Container';
import { CTAButton } from '../CTAButton';
import { TrendingUp, Zap, Shield, CheckCircle2, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-sage-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-sage-200/70 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute -bottom-8 right-0 w-[28rem] h-[28rem] bg-stone-200/60 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-white/60 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Container>
        <div className="py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 6 columns */}
            <div className="lg:col-span-6 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 text-sage-800 rounded-full border border-sage-200">
                <Zap size={16} className="text-sage-700" />
                <span className="text-sm font-medium">AI email automation for DTC & SaaS</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1>
                  Automate revenue-driving emails with AI clarity
                </h1>
                <p className="text-xl text-stone-600 max-w-none">
                  SageStone Lab is the AI-powered email marketing platform that increases revenue and simplifies workflows with smart segmentation, deliverability guardrails, and real-time revenue analytics.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" showArrow>
                  Start Free Trial – 14 Days
                </CTAButton>
                <CTAButton variant="secondary">
                  See How It Works
                </CTAButton>
              </div>

              {/* Fast Facts */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  { label: 'No credit card needed', icon: CheckCircle2 },
                  { label: 'Setup in under 5 minutes', icon: Sparkles },
                  { label: 'SOC 2 & GDPR ready', icon: Shield },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-stone-700 bg-white/70 backdrop-blur-sm border border-stone-200 rounded-lg px-3 py-2 shadow-sm">
                      <Icon size={16} className="text-sage-700" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-stone-200">
                <p className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-3">Trusted by teams that ship millions of emails</p>
                <div className="flex flex-wrap items-center gap-6 opacity-80">
                  {['Mailchimp', 'Moosend', 'Klaviyo', 'Shopify', 'HubSpot'].map((name) => (
                    <span key={name} className="text-sm text-stone-500 bg-white/70 border border-stone-200 rounded-md px-3 py-1 shadow-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image - 6 columns */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-100 to-stone-100 border border-white/50"
                  style={{ aspectRatio: '4 / 3' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                    alt="SageStone Lab email performance dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sage-900/30 via-sage-900/10 to-transparent"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs hidden lg:block border border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-stone-900">+38% revenue</p>
                      <p className="text-sm text-stone-600">from AI-triggered workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
