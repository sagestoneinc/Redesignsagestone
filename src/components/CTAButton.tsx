import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({ 
  variant = 'primary', 
  children, 
  href = '#contact',
  className = '',
  showArrow = false 
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-3.5 rounded-lg transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[var(--sage-600)] to-[var(--sage-700)] text-white hover:shadow-xl hover:scale-105',
    secondary: 'bg-white text-sage-700 border-2 border-sage-600 hover:bg-sage-50',
    outline: 'border-2 border-stone-300 text-stone-700 hover:border-sage-600 hover:text-sage-700'
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </a>
  );
}
