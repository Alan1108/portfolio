import { useState } from 'react';
import data from '../data/portfolioData.json';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${data.personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.location.href = mailtoLink;
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
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
              placeholder="your_name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">// email</label>
            <input
              className="form-input"
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">// message</label>
            <textarea
              className="form-textarea"
              placeholder="your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="contact-buttons">
          <button type="submit" className="btn btn--green">
            {data.contact.submitButton}
          </button>
          <button type="button" className="btn btn--outline" onClick={handleReset}>
            {data.contact.resetButton}
          </button>
        </div>
      </form>
    </section>
  );
}
