import React from 'react';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import { User, Briefcase, Cpu, FolderGit2, GraduationCap, Award, Mail } from 'lucide-react';

export default function Dashboard({ onToast }) {
  return (
    <div className="dashboard-grid page-container">
      <div className="column-left">
        <Card className="profile-card">
          <HeroSection />
        </Card>
        
        <Card title="Technical Skills" icon={Cpu}>
          <SkillsSection />
        </Card>

        <Card title="Get In Touch" icon={Mail}>
          <ContactSection onToast={onToast} />
        </Card>

        <Card title="Education" icon={GraduationCap}>
          <EducationSection />
        </Card>
      </div>

      <div className="column-right">
        <Card title="About Me" icon={User}>
          <AboutSection />
        </Card>

        <Card title="Professional Experience" icon={Briefcase}>
          <ExperienceSection />
        </Card>

        <Card title="Key Projects" icon={FolderGit2}>
          <ProjectsSection />
        </Card>

        <Card title="Certifications" icon={Award}>
          <CertificationsSection />
        </Card>
      </div>
    </div>
  );
}
