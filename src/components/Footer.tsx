import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Container } from './Container';

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Product Overview', href: '#product' },
      { name: 'Features', href: '#product' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Pricing', href: '#contact' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Contact', href: '#contact' },
      { name: 'Request Demo', href: '#contact' },
    ],
    integrations: [
      { name: 'Mailchimp', href: '#integrations' },
      { name: 'Moosend', href: '#integrations' },
      { name: 'Klaviyo', href: '#integrations' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security & Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--sage-500)] to-[var(--sage-700)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">SageStone Lab</span>
                  <span className="text-xs text-stone-400">by SageStone Inc</span>
                </div>
              </div>
              <p className="text-stone-400 mb-6">
                AI-powered marketing intelligence platform that helps teams analyze performance, automate workflows, and make data-driven marketing decisions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-stone-400 hover:text-sage-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-stone-400 hover:text-sage-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="text-stone-400 hover:text-sage-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-stone-400 hover:text-sage-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-stone-400 hover:text-sage-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="text-white mb-4">Integrations</h4>
              <ul className="space-y-3">
                {footerLinks.integrations.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-stone-400 hover:text-sage-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-stone-400 hover:text-sage-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} SageStone Inc. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm">
              Made with intelligence and purpose
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}