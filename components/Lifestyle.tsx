import React from 'react';

const lifestyleLinks = [
  { label: 'Photography', href: '/lifestyle/photography' },
  { label: 'Travel', href: '/lifestyle/travel' },
  { label: 'Sports', href: '/lifestyle/sports' },
  { label: 'Music', href: '/lifestyle/music' },
  { label: 'Wine', href: '/lifestyle/wine' },
  { label: 'Fragrance', href: '/lifestyle/fragrance' }
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
          Beyond research, I stay grounded through photography, travel, sports, music, wine, and fragrance.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lifestyleLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => {
                if (!onNavigate) return;
                event.preventDefault();
                onNavigate(item.href);
              }}
              className="text-sm font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
