import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="profile-section">
      <div className="profile-img-wrapper">
        <img src="/assets/profile.jpg" alt="Milan J" className="profile-img" />
      </div>
      <div className="profile-info">
        <h1>Milan J</h1>
        <p className="profile-title">Lead Cloud & DevOps Engineer</p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Architecting, automating, and scaling secure multi-cloud infrastructure.
        </p>
      </div>
      
      <div className="profile-meta">
        <div className="meta-item">
          <Mail size={16} />
          <span>milan.j.cloud@email.com</span>
        </div>
        <div className="meta-item">
          <Phone size={16} />
          <span>+91 98765 43210</span>
        </div>
        <div className="meta-item">
          <MapPin size={16} />
          <span>Bengaluru, India</span>
        </div>
      </div>

      <a href="/assets/Cloud_Engineer_Resume.pdf" download="Milan_J_Resume.pdf" className="btn-primary">
        <Download size={18} />
        Download Resume
      </a>
    </div>
  );
}
