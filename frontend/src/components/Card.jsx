import React from 'react';

export default function Card({ title, icon: Icon, children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      {title && (
        <h2 className="section-title">
          {Icon && <Icon size={20} />}
          {title}
        </h2>
      )}
      <div className="card-body">
        {children}
      </div>
    </section>
  );
}
