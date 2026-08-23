import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    title: "Enterprise Multi-Region Disaster Recovery Automation",
    year: "2024",
    desc: "Engineered a fully automated cross-region active-passive disaster recovery framework on AWS with Route 53 latency routing, Aurora Global Databases, and S3 Cross-Region Replication (CRR). Achieved an RTO of < 10 mins and RPO of < 1 min during disaster simulation drills.",
    tech: ["AWS", "Terraform", "Route 53", "Aurora Global DB", "S3 CRR", "Ansible"],
    github: "https://github.com/milanj-cloud/aws-dr-automation",
    demo: "https://github.com/milanj-cloud/aws-dr-automation"
  },
  {
    title: "End-to-End DevSecOps Pipeline & Kubernetes Zero-Downtime Deployment",
    year: "2023",
    desc: "Constructed secure DevSecOps pipelines incorporating HashiCorp Vault secrets management, static application security testing (SAST), container audits, and automated zero-downtime rolling updates in production Kubernetes clusters.",
    tech: ["Kubernetes", "Docker", "Jenkins", "HashiCorp Vault", "Trivy", "SonarQube"],
    github: "https://github.com/milanj-cloud/k8s-devsecops-pipeline",
    demo: "https://github.com/milanj-cloud/k8s-devsecops-pipeline"
  }
];

export default function ProjectsSection() {
  return (
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-header">
            <div>
              <span className="project-title">{project.title}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                ({project.year})
              </span>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                <GithubIcon size={16} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live Demo">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tech">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
