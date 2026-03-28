import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export function Talks() {
  const data = useTranslation();
  const { photos } = data.talks;

  return (
    <section id="talks" className="talks">
      <div className="section-header">
        <h2 className="section-title">{data.talks.title}</h2>
      </div>
      <div className="talks-list">
        {data.talks.items.map((talk) => (
          <div key={talk.title} className="talk-card">
            <div className="talk-header">
              <div>
                <div className="talk-title">{talk.title}</div>
                <div className="talk-event">{talk.event}</div>
              </div>
              <span className="talk-date">{talk.date}</span>
            </div>
            {talk.description && (
              <p className="talk-desc">{talk.description}</p>
            )}
            {talk.url && talk.url !== '#' && (
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-link"
              >
                <ExternalLink size={14} />
                {data.ui.talks.viewTalk}
              </a>
            )}
          </div>
        ))}
      </div>
      {photos.images.length > 0 && (
        <div className="talks-photos">
          <span className="talks-photos-title">{photos.title}</span>
          <div className="talks-photo-grid">
            {photos.images.map((src, i) => (
              <div key={i} className="talks-photo-item">
                <img src={src} alt={`Talk photo ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
