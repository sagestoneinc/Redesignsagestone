import React from 'react';
import { Container } from '../Container';
import { CTAButton } from '../CTAButton';
import { TrendingUp, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-stone-50 via-white to-sage-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Container>
        <div className="py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 6 columns */}
            <div className="lg:col-span-6 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full">
                <Zap size={16} className="text-sage-700" />
                <span className="text-sm text-sage-800">AI-Powered Marketing Intelligence</span>
              </div>

              {/* Heading */}
              <div>
                <h1>
                  AI-Powered Marketing Intelligence Built for Scalable Growth
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-xl text-stone-600 max-w-none">
                SageStone Lab helps modern teams automate marketing workflows, analyze performance, and unlock data-driven decisions with seamless email marketing integrations.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" showArrow>
                  Get Started
                </CTAButton>
                <CTAButton variant="secondary">
                  Request a Demo
                </CTAButton>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-2 text-stone-600">
                  <Shield size={20} className="text-sage-600 flex-shrink-0" />
                  <span className="text-sm">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <TrendingUp size={20} className="text-sage-600 flex-shrink-0" />
                  <span className="text-sm">Proven ROI</span>
                </div>
              </div>
            </div>

            {/* Right Image - 6 columns */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-100 to-stone-100"
                  style={{ aspectRatio: '4 / 3' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTY5MDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="SageStone Lab Analytics Dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-stone-900">+42%</p>
                      <p className="text-sm text-stone-600">Avg. Conversion Lift</p>
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
