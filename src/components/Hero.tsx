import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export function Hero() {
  const data = useTranslation();
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-greeting">{data.personal.greeting}</span>
        <h1 className="hero-name">{data.personal.name}</h1>
        <span className="hero-title">{data.personal.titlePrefix}</span>
        <p className="hero-desc">{data.personal.description}</p>
        <div className="hero-buttons">
          {data.hero.buttons.map((btn) => (
            <Link
              key={btn.text}
              to={btn.href}
              className={`btn btn--${btn.variant}`}
            >
              {btn.text}
            </Link>
          ))}
        </div>
        <div className="social-links">
          <a
            href={data.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Github size={24} />
          </a>
          <a
            href={data.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={data.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Instagram size={24} />
          </a>
          <a href={data.socialLinks.email} className="social-icon">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={data.personal.photo} alt={data.personal.displayName} />
      </div>
    </section>
  );
}
