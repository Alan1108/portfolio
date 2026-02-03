import { LucideIcon } from './LucideIcon';
import { useTranslation } from '../context/LanguageContext';

export function Education() {
  const data = useTranslation();
  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">{data.education.title}</h2>
      </div>
      <div className="edu-list">
        {data.education.items.map((edu) => (
          <div key={edu.degree} className="edu-card">
            <div className={`edu-icon edu-icon--${edu.color}`}>
              <LucideIcon name={edu.icon} size={24} />
            </div>
            <div className="edu-content">
              <span className="edu-degree">{edu.degree}</span>
              <span className={`edu-school edu-school--${edu.color}`}>
                {edu.school}
              </span>
              <span className="edu-year">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
