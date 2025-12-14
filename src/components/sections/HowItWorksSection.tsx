import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Plug, Search, Settings, Rocket } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Plug,
      title: 'Connect Your Marketing Platforms',
      description: 'Securely integrate Mailchimp, Moosend, Klaviyo, and other tools with one-click OAuth authentication.',
      details: 'No coding required • Takes less than 5 minutes • Full data privacy'
    },
    {
      number: '02',
      icon: Search,
      title: 'Analyze Campaign and Customer Data',
      description: 'Our AI engine processes your data to surface actionable insights, trends, and optimization opportunities.',
      details: 'Real-time dashboards • Predictive analytics • Custom reports'
    },
    {
      number: '03',
      icon: Settings,
      title: 'Optimize Workflows and Engagement',
      description: 'Implement intelligent automations and refine campaigns based on data-driven recommendations.',
      details: 'Smart segmentation • Auto-optimization • A/B testing'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Scale With Confidence',
      description: 'Grow your marketing operations with enterprise infrastructure that handles increasing complexity.',
      details: 'Unlimited scalability • 99.9% uptime • Dedicated support'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            How SageStone Lab Works
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            From connection to optimization in four simple steps. Start seeing results within days, not months.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-200 via-sage-400 to-sage-200 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} variant="hover" className="relative">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Icon className="text-sage-700" size={32} />
                </div>

                {/* Content */}
                <h3 className="line-clamp-2">{step.title}</h3>
                <p className="text-stone-600 mb-4 line-clamp-3">{step.description}</p>
                
                {/* Details */}
                <div className="pt-4 border-t border-stone-200 mt-auto">
                  <p className="text-xs text-stone-500">{step.details}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Time to Value */}
        <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-white mb-4">Average Time to First Insight</h3>
            <p className="text-6xl font-bold mb-6">48 Hours</p>
            <p className="text-sage-100 max-w-2xl mx-auto mb-8">
              Most teams see their first actionable insights within two days of connecting their platforms.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-sage-700 rounded-lg hover:shadow-xl transition-all"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
