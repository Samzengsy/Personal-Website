import React from 'react';
import { PROFILE, RESUME_URL, HERO_KEYWORDS, SOCIAL_LINKS, EMAIL } from '../constants';
import { Mail, FileText } from 'lucide-react';

const heroSocial = SOCIAL_LINKS.filter((link) => ['GitHub', 'LinkedIn', 'Instagram'].includes(link.name));

export const Hero: React.FC = () => {
  return (
    <section id="home" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm backdrop-blur fade-up">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 font-display">
                {PROFILE.name}
              </h1>
              <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
                {PROFILE.title}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {HERO_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <FileText size={16} />
                CV
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-sm font-semibold hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
              <div className="flex items-center gap-2">
                {heroSocial.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`p-2 rounded-md transition-transform hover:-translate-y-0.5 ${link.bgColor || 'bg-slate-200'} ${link.textColor || 'text-slate-700'}`}
                    aria-label={link.name}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={PROFILE.heroImage}
                alt={PROFILE.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
