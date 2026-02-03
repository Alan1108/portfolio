import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export function Projects() {
  const data = useTranslation();
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="section-title">{data.projects.title}</h2>
        <span className="section-subtitle">{data.projects.subtitle}</span>
      </div>
      <div className="project-grid">
        {data.projects.items.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`${project.title} - ${project.description || 'Project screenshot'}`} loading="lazy" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--live"
                >
                  <ExternalLink size={18} />
                  {data.ui.projects.viewLive}
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--code"
                >
                  <Github size={18} />
                  {data.ui.projects.viewCode}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
