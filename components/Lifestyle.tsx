import React from 'react';
import { ASSET_BASE } from '../constants';

const lifestyleLinks = [
  { label: 'Photography', href: '/lifestyle/photography', image: `${ASSET_BASE}data/joshua-tree.jpg` },
  { label: 'Travel', href: '/lifestyle/travel' },
  { label: 'Sports', href: '/lifestyle/sports' },
  { label: 'Music', href: '/lifestyle/music' },
  { label: 'Wine Tasting', href: '/lifestyle/wine-tasting' }
];

interface LifestyleProps {
  onNavigate?: (path: string) => void;
}

export const Lifestyle: React.FC<LifestyleProps> = ({ onNavigate }) => {
  return (
    <section id="life" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-5">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Lifestyle</h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl">
          Beyond research, I stay grounded through photography, travel, sports, music and wine tasting.
        </p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lifestyleLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => {
                if (!onNavigate) return;
                event.preventDefault();
                onNavigate(item.href);
              }}
              className="group relative h-32 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
              <div className={`absolute inset-0 ${item.image ? 'bg-slate-900/35' : 'bg-slate-50'} transition-colors`} />
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <span className={`text-sm font-semibold tracking-wide ${item.image ? 'text-white' : 'text-slate-700'}`}>
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
