import React from 'react';

export default function EducationSection() {
  return (
    <div className="edu-list">
      <div className="edu-item">
        <span className="edu-degree">Bachelor of Technology (B.Tech)</span>
        <span className="edu-school">Computer Science & Engineering</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>
          Visvesvaraya Technological University (VTU)
        </span>
        <span className="edu-meta">2017 – 2021 &bull; First Class with Distinction</span>
      </div>
    </div>
  );
}
