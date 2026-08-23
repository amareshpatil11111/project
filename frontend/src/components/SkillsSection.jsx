import React from 'react';

const skillsData = [
  {
    category: "Cloud Platforms",
    items: ["AWS (EC2, EKS, S3, VPC, IAM, RDS, Lambda)", "Azure (AKS, App Services, Blob, IAM)", "GCP"]
  },
  {
    category: "IaC & Automation",
    items: ["Terraform", "Ansible", "AWS CloudFormation", "Helm", "Packer"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Kubernetes (EKS/AKS)", "Docker", "Docker Compose", "Istio Service Mesh", "containerd"]
  },
  {
    category: "CI/CD & DevOps",
    items: ["GitLab CI", "GitHub Actions", "ArgoCD (GitOps)", "Jenkins", "SonarQube", "Nexus", "JFrog"]
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "ELK Stack", "AWS CloudWatch", "Datadog"]
  },
  {
    category: "Scripting & OS",
    items: ["Python", "Bash Shell Scripting", "Linux (Ubuntu/RHEL/Debian)", "Go (Foundations)", "Git", "REST APIs"]
  },
  {
    category: "Security & Governance",
    items: ["HashiCorp Vault", "AWS KMS", "IAM Least Privilege", "OWASP", "Trivy"]
  }
];

export default function SkillsSection() {
  return (
    <div className="skills-container">
      {skillsData.map((skillGroup, index) => (
        <div key={index} className="skills-group">
          <h3 className="skill-category-title">{skillGroup.category}</h3>
          <div className="skills-list">
            {skillGroup.items.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
