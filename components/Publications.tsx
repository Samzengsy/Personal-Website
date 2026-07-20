import React from 'react';
import { PUBLICATIONS } from '../constants';

const linkOrder = [
  ['arxiv', 'arXiv'],
  ['pdf', 'PDF'],
  ['project', 'Project'],
  ['code', 'Code'],
  ['dataset', 'Dataset'],
  ['openReview', 'OpenReview'],
  ['preprint', 'Preprint']
] as const;

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="section-block section-block--ruled">
      <div className="section-frame fade-up fade-up-delay-2">
        <h2 className="section-title">Publications</h2>
        <div className="publication-list">
          {PUBLICATIONS.map((pub) => {
            const links = linkOrder
              .map(([key, label]) => {
                const url = pub.links[key as keyof typeof pub.links];
                return url ? { label, url } : null;
              })
              .filter(Boolean) as { label: string; url: string }[];

            return (
              <article key={pub.id} className="publication-item">
                <div className="eyebrow">{pub.status}</div>
                <h3 className="publication-title">{pub.title}</h3>
                <div className="publication-venue">{pub.venue}</div>
                {'authors' in pub ? (
                  <div className="publication-authors">{pub.authors}</div>
                ) : null}
                {'summary' in pub ? (
                  <p className="publication-summary">{pub.summary}</p>
                ) : null}
                {'highlights' in pub ? (
                  <div className="highlight-grid">
                    {pub.highlights.map((highlight) => (
                      <div key={highlight} className="highlight-note">
                        {highlight}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="publication-links">
                  {links.length > 0 ? (
                    <div className="link-cluster">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link-chip"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="muted-text">Available upon request</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
