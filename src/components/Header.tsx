import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Product', href: '#product' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <Container>
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--sage-500)] to-[var(--sage-700)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-stone-900">SageStone Lab</span>
                <span className="text-xs text-stone-500">by SageStone Inc</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-sage-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                Request Demo
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[var(--sage-600)] to-[var(--sage-700)] text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-600 hover:text-sage-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-2.5 text-center border border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors"
                  >
                    Request Demo
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-2.5 text-center bg-gradient-to-r from-[var(--sage-600)] to-[var(--sage-700)] text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}