import { LucideIcon } from './LucideIcon';
import data from '../data/portfolioData.json';

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">{data.skills.title}</h2>
      </div>
      <div className="skills-grid">
        {data.skills.categories.map((category) => (
          <div key={category.title} className="skill-category">
            <span
              className={`skill-category-title skill-category-title--${category.color}`}
            >
              {category.title}
            </span>
            <div className="skill-items">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className={`skill-badge skill-badge--${category.color}`}
                >
                  <span className="skill-badge-text">{item.name}</span>
                  <span className="skill-badge-icon">
                    <LucideIcon name={item.icon} size={14} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
