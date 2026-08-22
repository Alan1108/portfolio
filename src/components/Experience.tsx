import { useTranslation } from '../context/LanguageContext';

export function Experience() {
  const data = useTranslation();
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">{data.experience.title}</h2>
      </div>
      <div className="exp-list">
        {data.experience.items.map((exp) => (
          <div key={`${exp.company}-${exp.date}`} className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              <span className="exp-date">{exp.date}</span>
            </div>
            <ul className="exp-desc">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
