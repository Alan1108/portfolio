import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../context/LanguageContext';
import { config } from '../services/config';

export function Contact() {
  const data = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { serviceId, templateId, publicKey } = config.emailJs;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_name: data.personal.name,
        },
        publicKey
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2 className="section-title">{data.contact.title}</h2>
        <span className="section-subtitle">{data.contact.subtitle}</span>
      </div>
      <form className="contact-content" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-field">
            <label className="form-label">// name</label>
            <input
              className="form-input"
              type="text"
              placeholder={data.ui.contact.namePlaceholder}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-field">
            <label className="form-label">// email</label>
            <input
              className="form-input"
              type="email"
              placeholder={data.ui.contact.emailPlaceholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-field">
            <label className="form-label">// message</label>
            <textarea
              className="form-textarea"
              placeholder={data.ui.contact.messagePlaceholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              disabled={status === 'sending'}
            />
          </div>
        </div>
        
        {/* Status Messages */}
        {status === 'success' && (
          <div className="form-message form-message--success">
            ✓ {data.ui.contact.successMessage}
          </div>
        )}
        {status === 'error' && (
          <div className="form-message form-message--error">
            ✗ {data.ui.contact.errorMessage}
          </div>
        )}

        <div className="contact-buttons">
          <button 
            type="submit" 
            className="btn btn--green"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? data.ui.contact.sending : data.contact.submitButton}
          </button>
          <button 
            type="button" 
            className="btn btn--outline" 
            onClick={handleReset}
            disabled={status === 'sending'}
          >
            {data.contact.resetButton}
          </button>
        </div>
      </form>
    </section>
  );
}
