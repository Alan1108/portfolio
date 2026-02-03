import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import data from '../data/portfolioData.json';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">{data.personal.displayName}</span>
          <p className="footer-tagline">{data.personal.footerTagline}</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-column-title">Quick Links</span>
            {data.footer.quickLinks.map((link) => (
              <Link key={link.href} to={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="footer-column">
            <span className="footer-column-title">Connect</span>
            {data.footer.connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-copyright">{data.personal.copyright}</span>
        <div className="footer-social">
          <a
            href={data.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <Github size={20} />
          </a>
          <a
            href={data.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <Linkedin size={20} />
          </a>
          <a href={data.socialLinks.email} className="footer-social-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
