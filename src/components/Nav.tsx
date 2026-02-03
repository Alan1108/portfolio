import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation, useLocale } from '../context/LanguageContext';

export function Nav() {
  const data = useTranslation();
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  const toggleLocale = () => setLocale(locale === 'en' ? 'es' : 'en');

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

      <div className="nav-actions">
        <button
          className="lang-toggle"
          onClick={toggleLocale}
          aria-label={locale === 'en' ? 'Cambiar a Espanol' : 'Switch to English'}
        >
          <span className={locale === 'en' ? 'lang-toggle-active' : ''}>EN</span>
          <span className="lang-toggle-separator">|</span>
          <span className={locale === 'es' ? 'lang-toggle-active' : ''}>ES</span>
        </button>

        <button
          className={`nav-toggle${isOpen ? ' nav-toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? data.ui.nav.closeMenu : data.ui.nav.openMenu}
          aria-expanded={isOpen}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </div>

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
        <a
          href={data.navigation.cvButton.href}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv cursor-pointer"
          onClick={close}
        >
          {data.navigation.cvButton.text}
        </a>
        <Link to={data.navigation.ctaButton.href} className="nav-cta cursor-pointer w-fit" onClick={close}>
          {data.navigation.ctaButton.text}
        </Link>
      </div>
    </nav>
  );
}
