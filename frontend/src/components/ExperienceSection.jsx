import React from 'react';

const experienceData = [
  {
    role: "Senior Cloud Infrastructure Engineer",
    company: "Nexora Cloud Solutions Pvt. Ltd.",
    location: "Bengaluru, India",
    duration: "Jan 2024 – Present",
    bullets: [
      "Architected and provisioned modular, multi-region AWS infrastructure using Terraform, automating deployment for 40+ microservices and slashing provisioning turnaround time by 65%.",
      "Designed and deployed mission-critical Amazon EKS production clusters with automated node auto-scaling (Karpenter) and Istio service mesh, achieving 99.99% system availability.",
      "Implemented GitOps deployment workflows utilizing ArgoCD and GitHub Actions, establishing automated canary releases and eliminating production deployment rollbacks.",
      "Executed FinOps cloud cost optimization strategies (Reserved Instances, Spot Instances, S3 lifecycle policies), reducing monthly AWS infrastructure spend by 28% ($18,000/month)."
    ]
  },
  {
    role: "Cloud & DevOps Engineer",
    company: "StrataCore Technologies",
    location: "Hyderabad, India",
    duration: "Jul 2021 – Dec 2023",
    bullets: [
      "Maintained and optimized automated CI/CD pipelines in Jenkins and GitLab CI, integrating automated unit testing, SonarQube code scanning, and container vulnerability audits with Trivy.",
      "Migrated legacy on-premise monolithic applications to containerized Docker microservices hosted on Kubernetes, reducing server footprint and licensing costs by 35%.",
      "Configured centralized observability and alerting with Prometheus & Grafana dashboards, reducing Mean Time to Detection (MTTD) by 45% and Mean Time to Resolution (MTTR) by 30%.",
      "Authored custom Python & Bash automation scripts for automated database snapshot management, log archiving, and infrastructure drift detection."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <div className="timeline">
      {experienceData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-node"></div>
          <div className="timeline-header">
            <span className="timeline-role">{item.role}</span>
            <span className="timeline-company">{item.company} &bull; <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.location}</span></span>
            <span className="timeline-date">{item.duration}</span>
          </div>
          <div className="timeline-content">
            <ul>
              {item.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
