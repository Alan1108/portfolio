import { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

export function Contact() {
  const data = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${data.ui.contact.mailtoSubject} ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;
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
              placeholder={data.ui.contact.namePlaceholder}
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
              placeholder={data.ui.contact.emailPlaceholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
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
