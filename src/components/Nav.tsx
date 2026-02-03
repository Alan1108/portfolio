import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from '../data/portfolioData.json';

export function Nav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={close}>
        {data.personal.logo}
      </Link>

      <button
        className={`nav-toggle${isOpen ? ' nav-toggle--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
      </button>

      <div className={`nav-links${isOpen ? ' nav-links--open' : ''}`}>
        {data.navigation.links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`nav-link${location.pathname === link.href ? ' nav-link--active' : ''}`}
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
        <Link to={data.navigation.ctaButton.href} className="nav-cta" onClick={close}>
          {data.navigation.ctaButton.text}
        </Link>
      </div>
    </nav>
  );
}
