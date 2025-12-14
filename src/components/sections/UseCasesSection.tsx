import React from 'react';
import { Container } from '../Container';
import { TrendingUp, Package, ShoppingBag, Users } from 'lucide-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: TrendingUp,
      title: 'For Growth Marketing Teams',
      subtitle: 'Optimize faster with actionable insights',
      description: 'Move beyond vanity metrics to understand what truly drives conversions and revenue growth.',
      benefits: [
        'Identify high-performing channels and campaigns',
        'Reduce CAC with data-driven attribution',
        'Forecast campaign performance with AI',
        'Test and iterate with confidence'
      ],
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NTY2NDAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: { value: '3.2x', label: 'Avg. ROI increase' }
    },
    {
      icon: Package,
      title: 'For SaaS Companies',
      subtitle: 'Improve retention and engagement through data',
      description: 'Understand user behavior patterns and optimize the entire customer lifecycle from trial to renewal.',
      benefits: [
        'Track user onboarding effectiveness',
        'Predict and prevent churn',
        'Optimize feature adoption campaigns',
        'Measure product-led growth metrics'
      ],
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU3MjAxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: { value: '28%', label: 'Churn reduction' }
    },
    {
      icon: ShoppingBag,
      title: 'For E-commerce Brands',
      subtitle: 'Increase conversions and customer lifetime value',
      description: 'Maximize revenue with personalized campaigns powered by deep customer and product analytics.',
      benefits: [
        'Segment customers by purchase behavior',
        'Optimize abandoned cart recovery',
        'Personalize product recommendations',
        'Track customer lifetime value trends'
      ],
      image: 'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjU3MjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: { value: '45%', label: 'Higher repeat purchases' }
    },
    {
      icon: Users,
      title: 'For Agencies',
      subtitle: 'Manage multiple clients with centralized analytics',
      description: 'Deliver exceptional results across your entire client portfolio with unified reporting and insights.',
      benefits: [
        'White-label reporting dashboards',
        'Multi-client performance comparison',
        'Automated client reporting',
        'Cross-client trend identification'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTY5MDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: { value: '12hrs', label: 'Saved per week' }
    }
  ];

  return (
    <section id="use-cases" className="section-spacing bg-gradient-to-br from-stone-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Built for Teams That Value Data
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            Whether you're scaling growth, building products, driving commerce, or managing clients, SageStone Lab delivers the intelligence you need.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-24" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-12 gap-12 items-center`}
              >
                {/* Image - 6 columns */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-100 to-stone-100"
                      style={{ aspectRatio: '4 / 3' }}
                    >
                      <img 
                        src={useCase.image}
                        alt={useCase.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                    </div>
                    
                    {/* Stats Card */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
                      <p className="text-4xl font-bold text-sage-700 mb-1">{useCase.stats.value}</p>
                      <p className="text-sm text-stone-600">{useCase.stats.label}</p>
                    </div>
                  </div>
                </div>

                {/* Content - 6 columns */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3>{useCase.title}</h3>
                      <p className="text-sage-700 max-w-none">{useCase.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-stone-600 mb-6 text-lg max-w-none">
                    {useCase.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.667 3.5L5.25 9.917L2.333 7" stroke="var(--sage-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-stone-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800 font-medium group"
                  >
                    See how it works for your team
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-stone-200">
          <h3 className="mb-4">Don't See Your Use Case?</h3>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8">
            SageStone Lab is flexible enough to support various marketing workflows and business models. Let's discuss how we can help your specific needs.
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
