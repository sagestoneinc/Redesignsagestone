import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Brain, BarChart3, Zap, Server, Shield, Rocket } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Smart Marketing Automation',
      description: 'Automate complex workflows with AI-driven decision-making that learns from your campaign performance and audience behavior.',
      highlights: ['Intelligent campaign triggers', 'Dynamic audience segmentation', 'Auto-optimization']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics & Insights',
      description: 'Transform marketing data into clear, actionable insights with custom dashboards, predictive analytics, and real-time reporting.',
      highlights: ['Custom reporting dashboards', 'Predictive performance modeling', 'Cross-channel attribution']
    },
    {
      icon: Zap,
      title: 'Seamless Integrations',
      description: 'Native integrations with Mailchimp, Moosend, and Klaviyo ensure your data flows seamlessly across your marketing stack.',
      highlights: ['One-click setup', 'Real-time data sync', 'Bi-directional workflows']
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Built on enterprise-grade cloud infrastructure that grows with your business, handling millions of data points effortlessly.',
      highlights: ['99.9% uptime SLA', 'Auto-scaling capacity', 'Global CDN delivery']
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-level security with SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data.',
      highlights: ['SOC 2 Type II certified', 'GDPR compliant', 'Role-based access control']
    },
    {
      icon: Rocket,
      title: 'Continuous Innovation',
      description: 'Regular platform updates with new features, integrations, and AI capabilities based on customer feedback and market trends.',
      highlights: ['Monthly feature releases', 'Dedicated support', 'Product roadmap access']
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Core Features of SageStone Lab
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            Everything you need to transform marketing data into measurable growth, backed by AI and built for scale.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} variant="hover" className="relative overflow-hidden">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="line-clamp-2">{feature.title}</h3>
                <p className="text-stone-600 line-clamp-3 mb-6">{feature.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mt-auto">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-50/0 to-sage-50/0 group-hover:from-sage-50/50 group-hover:to-transparent rounded-2xl transition-all pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-stone-600 mb-6 max-w-none">
            Want to see these features in action?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all"
          >
            Schedule a Product Demo
          </a>
        </div>
      </Container>
    </section>
  );
}
