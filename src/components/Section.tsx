import React from 'react';

interface SectionProps {
  id?: string;
  variant?: 'default' | 'alt' | 'surface';
  label?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  variant = 'default',
  label,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  const variantClass =
    variant === 'alt' ? 'section--alt' :
    variant === 'surface' ? 'section--surface' : '';

  return (
    <section id={id} className={`section ${variantClass} ${className}`.trim()}>
      {(label || title || subtitle) && (
        <div className="container">
          <div className="section__header">
            {label && <span className="section__label">{label}</span>}
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
