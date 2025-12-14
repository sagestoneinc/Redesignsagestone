import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Database, BarChart2, Workflow, CheckCircle2 } from 'lucide-react';

export function ProductSection() {
  const differentiators = [
    {
      title: 'Unified Data Across Marketing Platforms',
      description: 'Stop switching between tools. SageStone Lab aggregates data from all your marketing platforms into one centralized intelligence hub.',
      icon: Database
    },
    {
      title: 'Actionable Insights, Not Just Metrics',
      description: 'Move beyond vanity metrics. Our AI analyzes patterns and surfaces recommendations that directly impact your bottom line.',
      icon: BarChart2
    },
    {
      title: 'Automation Built for Real Business Outcomes',
      description: 'Smart workflows that learn from your data and automatically optimize campaigns for conversions, engagement, and revenue.',
      icon: Workflow
    }
  ];

  const capabilities = [
    {
      category: 'Data Aggregation & Intelligence',
      description: 'Comprehensive data layer that connects, normalizes, and enriches marketing data from multiple sources.',
      features: [
        'Multi-platform data integration',
        'Real-time data synchronization',
        'Historical trend analysis',
        'Custom data models',
        'API access for developers',
        'Automated data quality checks'
      ]
    },
    {
      category: 'Campaign Performance Analysis',
      description: 'Deep analytics that reveal what works, what doesn\'t, and why - with predictive intelligence for future campaigns.',
      features: [
        'Cross-channel attribution modeling',
        'Conversion funnel visualization',
        'A/B test statistical analysis',
        'Cohort analysis & segmentation',
        'ROI calculation & forecasting',
        'Competitive benchmarking'
      ]
    },
    {
      category: 'Workflow Optimization',
      description: 'Intelligent automation engine that reduces manual work and continuously improves campaign performance.',
      features: [
        'Smart audience segmentation',
        'Automated campaign triggers',
        'Dynamic content personalization',
        'Send-time optimization',
        'Auto-pause underperforming campaigns',
        'Workflow templates & playbooks'
      ]
    }
  ];

  return (
    <section id="product" className="section-spacing bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h1>
            SageStone Lab: Marketing Intelligence That Drives Results
          </h1>
          <p className="text-xl text-stone-600 max-w-none">
            An AI-powered marketing automation and analytics platform designed to help teams gain clarity, efficiency, and measurable growth through data-driven marketing decisions.
          </p>
        </div>

        {/* Key Differentiators */}
        <div style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2 className="text-center" style={{ marginBottom: 'var(--subsection-spacing)' }}>
            What Makes SageStone Lab Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="gradient">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="line-clamp-2">{item.title}</h3>
                  <p className="text-stone-600 line-clamp-4 mt-auto">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Capabilities */}
        <div style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2 className="text-center" style={{ marginBottom: 'var(--subsection-spacing)' }}>
            Platform Capabilities
          </h2>
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white" padding="default">
                <div className="mb-6 pb-6 border-b border-stone-200">
                  <h3 className="mb-3">{capability.category}</h3>
                  <p className="text-stone-600 max-w-none">{capability.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {capability.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-sage-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Feature Highlight */}
        <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-12 md:p-16 text-white relative overflow-hidden" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">
                Built on Enterprise-Grade Infrastructure
              </h2>
              <p className="text-sage-100 mb-8 text-lg max-w-none">
                SageStone Lab runs on cloud infrastructure designed for scale, security, and reliability. Your data is protected with bank-level encryption and our platform maintains 99.9% uptime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage-200 rounded-full flex-shrink-0"></div>
                  <span className="text-sage-50">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage-200 rounded-full flex-shrink-0"></div>
                  <span className="text-sage-50">GDPR & CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage-200 rounded-full flex-shrink-0"></div>
                  <span className="text-sage-50">99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage-200 rounded-full flex-shrink-0"></div>
                  <span className="text-sage-50">24/7 Security Monitoring</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">500M+</p>
                <p className="text-sage-100 text-sm">Events processed monthly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">99.9%</p>
                <p className="text-sage-100 text-sm">Platform uptime</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">&lt;100ms</p>
                <p className="text-sage-100 text-sm">Query response time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">256-bit</p>
                <p className="text-sage-100 text-sm">AES encryption</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all"
          >
            See SageStone Lab in Action
          </a>
        </div>
      </Container>
    </section>
  );
}
