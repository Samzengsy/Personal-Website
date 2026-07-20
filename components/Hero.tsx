import React from 'react';
import { PROFILE, RESUME_URL, HERO_KEYWORDS, SOCIAL_LINKS, EMAIL } from '../constants';
import { Mail, FileText } from 'lucide-react';

const heroSocial = SOCIAL_LINKS.filter((link) => ['GitHub', 'LinkedIn', 'Instagram'].includes(link.name));

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-panel fade-up">
        <div className="hero-layout">
          <div className="hero-copy">
            <div>
              <h1 className="hero-name">
                {PROFILE.name}
              </h1>
              <p className="hero-role">
                {PROFILE.title}
              </p>
            </div>
            <div className="keyword-list">
              {HERO_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="keyword-tag"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                <FileText size={16} />
                CV
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="button button--secondary"
              >
                <Mail size={16} />
                Email
              </a>
              <div className="social-list">
                {heroSocial.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="social-icon"
                    aria-label={link.name}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src={PROFILE.heroImage}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
