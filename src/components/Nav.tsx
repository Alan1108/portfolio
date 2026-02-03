import { Link, useLocation } from 'react-router-dom';
import data from '../data/portfolioData.json';

export function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        {data.personal.logo}
      </Link>
      <div className="nav-links">
        {data.navigation.links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`nav-link${location.pathname === link.href ? ' nav-link--active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to={data.navigation.ctaButton.href} className="nav-cta">
          {data.navigation.ctaButton.text}
        </Link>
      </div>
    </nav>
  );
}
