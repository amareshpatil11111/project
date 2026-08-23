import React from 'react';

export default function AboutSection() {
  return (
    <div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', marginBottom: '1.5rem' }}>
        Results-driven Cloud & DevOps Engineer with over 5 years of hands-on experience architecting, automating, and maintaining high-availability, scalable multi-cloud infrastructures across AWS and Azure. Proven expertise in Infrastructure as Code (Terraform), container orchestration (Kubernetes, Docker), continuous integration/deployment (CI/CD pipelines), and zero-downtime microservices deployments. Adept at reducing cloud expenditure, optimizing latency, and ensuring enterprise-grade cloud security compliance.
      </p>
      
      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Core Philosophies
      </h3>
      <div className="phil-grid">
        <div className="phil-box">
          <h3>Automate Everything</h3>
          <p>Treating infrastructure exactly like application source code through Terraform, GitOps (ArgoCD), and CI/CD pipelines to ensure repeatable, self-healing deployments.</p>
        </div>
        <div className="phil-box">
          <h3>Security First</h3>
          <p>Enforcing security gates, secret management (Vault), container vulnerability scanning (Trivy), and the principle of least privilege at every stage of the lifecycle.</p>
        </div>
        <div className="phil-box">
          <h3>Continuous Observability</h3>
          <p>Leveraging dashboards and alerting systems (Prometheus, Grafana, ELK) to capture issues before they impact end-users, lowering MTTD and MTTR.</p>
        </div>
        <div className="phil-box">
          <h3>FinOps & Latency Control</h3>
          <p>Optimizing workloads through auto-scaling, spots, and reserved capacities, balancing raw application speed with cloud bill efficiency.</p>
        </div>
      </div>
    </div>
  );
}
