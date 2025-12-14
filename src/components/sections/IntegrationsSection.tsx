import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Mail, TrendingUp, ShoppingCart, Plus, Zap, Shield } from 'lucide-react';

export function IntegrationsSection() {
  const integrations = [
    {
      name: 'Mailchimp',
      icon: Mail,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Analyze campaigns, automate workflows, and improve engagement with deep Mailchimp integration.',
      capabilities: [
        'Campaign performance tracking',
        'Audience insights & segmentation',
        'Automated workflow triggers',
        'A/B test analytics'
      ]
    },
    {
      name: 'Moosend',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      description: 'Track performance and optimize campaigns with intelligent data aggregation and analysis.',
      capabilities: [
        'Real-time campaign monitoring',
        'Conversion funnel analysis',
        'Subscriber engagement metrics',
        'ROI calculation & reporting'
      ]
    },
    {
      name: 'Klaviyo',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-600',
      description: 'Enhance lifecycle marketing using advanced analytics and customer behavior intelligence.',
      capabilities: [
        'Customer journey mapping',
        'Revenue attribution modeling',
        'Predictive customer analytics',
        'Cross-channel orchestration'
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'One-Click Setup',
      description: 'Connect your platforms in minutes with OAuth authentication'
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Sync',
      description: 'Data updates automatically across all connected platforms'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level encryption for all integration connections'
    }
  ];

  return (
    <section id="integrations" className="section-spacing bg-gradient-to-br from-stone-50 to-sage-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Works With Your Existing Marketing Stack
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            Native integrations with leading email marketing platforms. Connect in minutes, start analyzing immediately.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <Card key={index} variant="hover">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="line-clamp-1">{integration.name}</h3>
                </div>

                {/* Description */}
                <p className="text-stone-600 mb-6 line-clamp-3">{integration.description}</p>

                {/* Capabilities */}
                <div className="space-y-3 mb-6">
                  {integration.capabilities.map((capability, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-sage-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="var(--sage-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-stone-700 line-clamp-1">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="#contact"
                  className="text-sage-700 hover:text-sage-800 text-sm font-medium inline-flex items-center gap-1 group mt-auto"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </Card>
            );
          })}
        </div>

        {/* More Integrations Coming */}
        <Card className="text-center bg-white" padding="large" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <div className="w-20 h-20 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plus className="text-stone-600" size={40} />
          </div>
          <h3 className="mb-4">More Integrations Coming Soon</h3>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            We're constantly expanding our integration ecosystem. HubSpot, ActiveCampaign, Salesforce, and more are on the roadmap.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sage-600 text-sage-700 rounded-lg hover:bg-sage-50 transition-colors"
          >
            Request an Integration
          </a>
        </Card>

        {/* Integration Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-sage-700" size={24} />
                </div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-sm text-stone-600 max-w-none">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function RefreshCw({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );
}
