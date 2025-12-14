import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Target, Gauge, Workflow, LineChart, Database } from 'lucide-react';

export function SolutionSection() {
  const benefits = [
    {
      icon: Target,
      title: 'Unified Data Layer',
      description: 'Connect all your marketing platforms into one centralized intelligence hub for complete visibility.'
    },
    {
      icon: LineChart,
      title: 'AI-Powered Analytics',
      description: 'Transform raw data into actionable insights with intelligent analysis and predictive recommendations.'
    },
    {
      icon: Workflow,
      title: 'Smart Automation',
      description: 'Automate repetitive workflows and optimize campaigns in real-time without manual intervention.'
    },
    {
      icon: Gauge,
      title: 'Real-Time Intelligence',
      description: 'Monitor performance and identify opportunities as they happen with live dashboards and alerts.'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-sage-50 to-stone-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <div className="inline-block px-4 py-2 bg-sage-100 rounded-full mb-6">
            <span className="text-sm text-sage-800">The SageStone Solution</span>
          </div>
          <h2>
            One Platform to Analyze, Automate, and Optimize
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            SageStone Lab is a unified marketing intelligence solution that brings clarity to complexity and turns data into your competitive advantage.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} variant="hover" className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage-500 to-sage-700"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="line-clamp-2">{benefit.title}</h3>
                <p className="text-stone-600 line-clamp-3 mt-auto">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Visual Diagram */}
        <Card className="bg-white" padding="large">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="text-stone-600" size={32} />
              </div>
              <h4 className="mb-2">Your Marketing Stack</h4>
              <p className="text-sm text-stone-600 max-w-none">Mailchimp, Moosend, Klaviyo & more</p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-sage-400 to-sage-600 hidden md:block"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Workflow className="text-white" size={24} />
                </div>
                <span className="text-xs text-sage-700">SageStone Lab</span>
                <div className="w-px h-12 bg-gradient-to-b from-sage-600 to-sage-400 hidden md:block"></div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LineChart className="text-sage-700" size={32} />
              </div>
              <h4 className="mb-2">Actionable Intelligence</h4>
              <p className="text-sm text-stone-600 max-w-none">Data-driven decisions at scale</p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function Database({ className, size }: { className?: string; size?: number }) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );
}
