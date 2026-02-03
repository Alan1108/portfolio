import data from '../data/portfolioData.json';

export function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">{data.about.title}</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          {data.about.paragraphs.map((text, i) => (
            <p key={i} className="about-paragraph">
              {text}
            </p>
          ))}
        </div>
        <div className="about-stats">
          {data.about.stats.map((stat) => (
            <div key={stat.label} className={`stat-card stat-card--${stat.color}`}>
              <span className="stat-number">{stat.number}</span>
              <span className={`stat-label stat-label--${stat.color}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
