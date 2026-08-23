import React from 'react';
import Card from '../components/Card';
import ProjectsSection from '../components/ProjectsSection';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <div className="page-container focused-card">
      <Card title="Cloud & DevOps Project Portfolio" icon={FolderGit2}>
        <ProjectsSection />
      </Card>
    </div>
  );
}
