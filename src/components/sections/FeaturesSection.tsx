import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Brain, BarChart3, Zap, Workflow, ShieldCheck, BarChart4 } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Segmentation that Personalizes at Scale',
      description: 'Behavioral, revenue, and intent signals automatically build audiences that refresh in real time.',
      highlights: ['Predictive segments and lookalikes', 'Auto-refreshing cohorts', 'One-click exclusions for fatigue']
    },
    {
      icon: Workflow,
      title: 'Automation Workflows That Ship Themselves',
      description: 'Trigger journeys from product, billing, and engagement events with guardrails that protect deliverability.',
      highlights: ['Visual journey builder', 'Send-time & channel optimization', 'Rollback and failsafe rules']
    },
    {
      icon: ShieldCheck,
      title: 'Deliverability Insights & Guardrails',
      description: 'Proactive alerts on list health, domain reputation, and inbox placement keep revenue emails out of spam.',
      highlights: ['List quality scoring', 'Domain warm-up assistant', 'Automated suppression policies']
    },
    {
      icon: BarChart4,
      title: 'Revenue Analytics You Can Act On',
      description: 'Trace every campaign to pipeline and revenue with clear attribution across DTC and SaaS motions.',
      highlights: ['Revenue & LTV dashboards', 'A/B and multivariate stats', 'Channel and SKU attribution']
    },
    {
      icon: Zap,
      title: 'Faster Setup, Fewer Tickets',
      description: 'Prebuilt recipes for welcome, lifecycle, win-back, and product updates ship in minutes with no engineering time.',
      highlights: ['Template library for DTC & SaaS', 'Role-based approvals', 'Sandbox to production in one click']
    }
  ];

  return (
    <section id="features" className="section-spacing bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Built to Drive Revenue, Not Just Sends
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            AI segmentation, intelligent automations, deliverability guardrails, and revenue analytics in one modern email platform.
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
