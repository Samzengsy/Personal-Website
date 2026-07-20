import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LIFESTYLE_PAGES } from '../constants';

interface LifestylePageProps {
  slug: string;
  onBack?: () => void;
}

export const LifestylePage: React.FC<LifestylePageProps> = ({ slug, onBack }) => {
  const page = (LIFESTYLE_PAGES as Record<string, { title: string; subtitle?: string; intro?: string[]; items: { id: string; src?: string; alt?: string; location?: string; year?: string; note?: string }[] }>)[slug];
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const renderBackButton = () => (
    <a
      href="/"
      onClick={(event) => {
        if (onBack) {
          event.preventDefault();
          onBack();
        }
      }}
      className="button button--secondary lifestyle-back"
    >
      <ArrowLeft size={16} />
      ← Back to Main Page
    </a>
  );

  if (!page) {
    return (
      <section className="lifestyle-page">
        <div className="lifestyle-page__frame">
          <h1 className="page-title">Lifestyle</h1>
          <p className="section-deck">This page is not available yet.</p>
          <div className="lifestyle-page__back">{renderBackButton()}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="lifestyle-page">
      <div className="lifestyle-page__frame">
        <h1 className="page-title">{page.title}</h1>
        {page.subtitle ? (
          <p className="section-deck">{page.subtitle}</p>
        ) : null}
        <div className="lifestyle-page__back">{renderBackButton()}</div>

        {page.intro && page.intro.length > 0 ? (
          <div className="lifestyle-intro">
            {page.intro.map((line, index) => {
              const isHeading = !line.includes('.') && line.length <= 32;
              return (
                <p
                  key={`${page.title}-intro-${index}`}
                  className={isHeading ? 'lifestyle-intro__heading' : undefined}
                >
                  {line}
                </p>
              );
            })}
          </div>
        ) : null}

        <div className="lifestyle-gallery-wrap">
          {page.items.length > 0 ? (
            <div className="lifestyle-gallery">
              {page.items.map((item) => (
                <article key={item.id} className="gallery-card">
                  <div className="gallery-card__media">
                    {item.src && !brokenImages[item.id] ? (
                      <img
                        src={item.src}
                        alt={item.alt || page.title}
                        className="h-full w-full object-cover"
                        onError={() => setBrokenImages((prev) => ({ ...prev, [item.id]: true }))}
                      />
                    ) : (
                      <div className="gallery-card__empty">
                        Preview unavailable
                      </div>
                    )}
                  </div>
                  <div className="gallery-card__meta">
                    <div><span>Location:</span> {item.location || 'Archive'}</div>
                    <div><span>Year:</span> {item.year || 'Undated'}</div>
                    <div><span>Note:</span> {item.note || 'Stored in personal archive.'}</div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="gallery-empty-state">
              No entries yet. Content coming soon.
            </div>
          )}
        </div>

        <div className="lifestyle-page__back lifestyle-page__back--footer">{renderBackButton()}</div>
      </div>
    </section>
  );
};
