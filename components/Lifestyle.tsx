import React from 'react';
import { ASSET_BASE } from '../constants';

const lifestyleLinks = [
  { label: 'Photography', href: '/lifestyle/photography', image: `${ASSET_BASE}data/Photography/joshua-tree.jpg` },
  { label: 'Travel', href: '/lifestyle/travel', image: `${ASSET_BASE}data/Travel/Chicago.jpg` },
  { label: 'Music', href: '/lifestyle/music', image: `${ASSET_BASE}data/Music/Choir.jpg` },
  { label: 'Wine Tasting', href: '/lifestyle/wine-tasting', image: `${ASSET_BASE}data/Wine%20Tasting/Wine%20Class%20at%20UCSB.jpg` }
];

interface LifestyleProps {
  onNavigate?: (path: string) => void;
}

export const Lifestyle: React.FC<LifestyleProps> = ({ onNavigate }) => {
  return (
    <section id="life" className="section-block section-block--lifestyle">
      <div className="section-frame fade-up fade-up-delay-5">
        <h2 className="section-title">Lifestyle</h2>
        <p className="section-prose">
          Beyond research, I stay grounded through photography, travel, music and wine tasting.
        </p>
        <div className="lifestyle-grid">
          {lifestyleLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => {
                if (!onNavigate) return;
                event.preventDefault();
                onNavigate(item.href);
              }}
              className="lifestyle-card group"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className="lifestyle-card__image"
                />
              ) : null}
              <div className="lifestyle-card__overlay" />
              <div className="lifestyle-card__label-wrap">
                <span className="lifestyle-card__label">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
