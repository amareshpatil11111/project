import React from 'react';
import Card from '../components/Card';
import ContactSection from '../components/ContactSection';
import { Mail } from 'lucide-react';

export default function Contact({ onToast }) {
  return (
    <div className="page-container focused-card">
      <Card title="Get In Touch" icon={Mail}>
        <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Have a question or looking to collaborate on Cloud infrastructure, security, or CI/CD pipelines? Drop me a message below and it will be securely recorded in Supabase.
        </div>
        <ContactSection onToast={onToast} />
      </Card>
    </div>
  );
}
