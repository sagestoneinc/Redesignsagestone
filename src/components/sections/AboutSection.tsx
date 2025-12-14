import React from 'react';
import { Container } from '../Container';
import { Card } from '../Card';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Clarity Through Data',
      description: 'We believe marketing decisions should be based on clear insights, not guesswork.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation With Purpose',
      description: 'Every feature we build solves a real problem for real marketing teams.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your growth is our success metric. We win when you win.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We build tools that make marketers smarter and more effective.'
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-white to-stone-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h1>
            About SageStone Inc
          </h1>
          <p className="text-xl text-stone-600 max-w-none">
            SageStone Inc builds intelligent tools that empower businesses to make better decisions through data. We're on a mission to transform how teams understand and act on marketing intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <div className="lg:col-span-6">
            <h2 className="mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-stone-600 mb-6 max-w-none">
              To simplify complex marketing data and transform it into actionable intelligence that drives measurable business growth.
            </p>
            <p className="text-stone-600 mb-6 max-w-none">
              We founded SageStone because we saw talented marketing teams struggling with fragmented data, unclear insights, and tools that promised intelligence but delivered complexity. We knew there had to be a better way.
            </p>
            <p className="text-stone-600 max-w-none">
              SageStone Lab was built from the ground up to solve this problem—bringing together AI-powered analytics, intelligent automation, and seamless integrations in a platform that's both powerful and intuitive.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-100 to-stone-100"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjU3MjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="SageStone Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Why SageStone Lab */}
        <div style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <h2 className="text-center mb-6">
            Why SageStone Lab
          </h2>
          <p className="text-center text-xl text-stone-600 max-w-3xl mx-auto mb-12">
            Marketing should be measurable, scalable, and insight-driven. We built SageStone Lab on these core principles.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="hover" className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg flex-shrink-0">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="mb-3 line-clamp-1">{value.title}</h3>
                  <p className="text-stone-600 text-sm line-clamp-3 mt-auto max-w-none">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-12 text-white relative overflow-hidden" style={{ marginBottom: 'var(--subsection-spacing)' }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-white text-center mb-12">
              Trusted by Growing Teams
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-white mb-2">2,500+</p>
                <p className="text-sage-100">Active users</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-white mb-2">150+</p>
                <p className="text-sage-100">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-white mb-2">10M+</p>
                <p className="text-sage-100">Campaigns analyzed</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-white mb-2">42%</p>
                <p className="text-sage-100">Avg. ROI increase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Culture */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">
            Built by Marketers, for Marketers
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-none">
            Our team combines deep expertise in marketing, data science, and product development. We don't just build software—we solve real problems we've experienced ourselves.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:shadow-xl transition-all"
          >
            Join Us on This Journey
          </a>
        </div>
      </Container>
    </section>
  );
}
