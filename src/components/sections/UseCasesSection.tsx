import React from 'react';
import { Container } from '../Container';
import { TrendingUp, Package, ShoppingBag } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: ShoppingBag,
      title: 'DTC brands',
      subtitle: 'Increase AOV and repeat purchases',
      points: ['AI-driven product recommendations', 'Abandoned cart and win-back that self-optimizes', 'Deliverability guardrails for peak drops'],
      stat: '+42% lift in repeat revenue'
    },
    {
      icon: Package,
      title: 'SaaS teams',
      subtitle: 'Guide users from trial to renewal',
      points: ['Lifecycle journeys triggered by product usage', 'Churn risk alerts with save sequences', 'Clear revenue attribution to expansions'],
      stat: '28% lower churn on average'
    },
    {
      icon: TrendingUp,
      title: 'Growth & RevOps',
      subtitle: 'See what moves pipeline today',
      points: ['Channel and cohort visibility in one place', 'Experimentation with statistical guardrails', 'Executive-ready revenue dashboards'],
      stat: '3.2x faster experiment cycles'
    }
  ];

  return (
    <section id="use-cases" className="section-spacing bg-gradient-to-br from-stone-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Built for the Teams Shipping Revenue
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            SageStone Lab meets the needs of DTC marketers, SaaS lifecycle teams, and revenue leaders with focused playbooks.
          </p>
        </div>
        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1">{useCase.title}</h3>
                    <p className="text-sage-700 text-sm max-w-none">{useCase.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="w-2 h-2 rounded-full bg-sage-600 mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sage-700 text-sm font-semibold bg-sage-50 border border-sage-100 rounded-lg px-3 py-2 inline-block">
                  {useCase.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-stone-200">
          <h3 className="mb-4">Have a different motion?</h3>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8">
            SageStone Lab adapts to your lifecycle. Tell us what you are trying to achieve and we will tailor a quick start plan.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all"
          >
            Talk to Our Team
          </a>
        </div>
      </Container>
    </section>
  );
}
