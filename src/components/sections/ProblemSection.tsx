import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { AlertCircle, TrendingDown, Clock, Database } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Database,
      title: 'Disconnected Tools',
      description: 'Marketing data scattered across multiple platforms makes it impossible to see the full picture.'
    },
    {
      icon: AlertCircle,
      title: 'Unclear Insights',
      description: 'Raw metrics without context leave teams guessing instead of knowing what drives results.'
    },
    {
      icon: Clock,
      title: 'Manual Workflows',
      description: 'Repetitive tasks consume valuable time that should be spent on strategy and growth.'
    },
    {
      icon: TrendingDown,
      title: 'Missed Opportunities',
      description: 'Without real-time intelligence, teams react too late to capitalize on trends and patterns.'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2>
            Marketing Data Is Fragmented. Decisions Shouldn't Be.
          </h2>
          <p className="text-xl text-stone-600 max-w-none">
            Modern marketing teams struggle with disconnected tools, unclear insights, and manual workflows that slow down growth and decision-making.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} variant="hover">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon className="text-red-600" size={24} />
                </div>
                <h3 className="line-clamp-2">{problem.title}</h3>
                <p className="text-stone-600 line-clamp-3 mt-auto">{problem.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-stone-50 rounded-2xl border border-stone-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-stone-900 mb-2">47%</p>
            <p className="text-stone-600 max-w-none">of marketers struggle with data integration</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-stone-900 mb-2">12hrs</p>
            <p className="text-stone-600 max-w-none">wasted weekly on manual reporting</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-stone-900 mb-2">63%</p>
            <p className="text-stone-600 max-w-none">say they lack actionable insights</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
