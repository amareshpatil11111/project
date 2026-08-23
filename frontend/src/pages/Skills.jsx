import React from 'react';
import Card from '../components/Card';
import SkillsSection from '../components/SkillsSection';
import { Cpu } from 'lucide-react';

export default function Skills() {
  return (
    <div className="page-container focused-card">
      <Card title="Detailed Technical Skillset" icon={Cpu}>
        <SkillsSection />
      </Card>
    </div>
  );
}
