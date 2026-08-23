import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactSection({ onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onToast) onToast('Please fill out all fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        if (onToast) onToast(data.message || 'Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        if (onToast) onToast(data.message || 'Failed to send message.', 'error');
      }
    } catch (error) {
      console.error('Contact Form Submit Error:', error);
      if (onToast) onToast('Failed to connect to the server. Is it running?', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Hi Milan, I'd like to discuss a project..."
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-submit" disabled={loading}>
        {loading ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
