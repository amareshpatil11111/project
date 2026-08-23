import React from 'react';
import Card from '../components/Card';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="page-container focused-card">
      <Card title="About Milan J" icon={User}>
        <AboutSection />
      </Card>
      
      <div style={{ marginTop: '2rem' }}>
        <Card>
          <HeroSection />
        </Card>
      </div>
    </div>
  );
}
