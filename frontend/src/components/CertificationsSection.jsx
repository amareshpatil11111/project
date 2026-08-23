import React from 'react';

const certificationsData = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "Issued: 2024"
  },
  {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: 2023"
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "Issued: 2023"
  }
];

export default function CertificationsSection() {
  return (
    <div className="cert-list">
      {certificationsData.map((cert, index) => (
        <div key={index} className="cert-item">
          <span className="cert-name">{cert.name}</span>
          <span className="cert-issuer">{cert.issuer}</span>
          <span className="cert-date">{cert.date}</span>
        </div>
      ))}
    </div>
  );
}
