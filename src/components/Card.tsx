import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'gradient';
  padding?: 'default' | 'large';
}

export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'default' 
}: CardProps) {
  const baseStyles = 'rounded-2xl border transition-all h-full flex flex-col';
  
  const variantStyles = {
    default: 'bg-white border-stone-200',
    hover: 'bg-white border-stone-200 hover:border-sage-400 hover:shadow-xl',
    gradient: 'bg-gradient-to-br from-white to-sage-50 border-sage-200 hover:border-sage-400 hover:shadow-xl'
  };

  const paddingStyles = {
    default: 'p-8',
    large: 'p-12'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
