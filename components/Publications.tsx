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
    <section id="publications" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-2">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6 font-display">Publications</h2>
        <div className="space-y-5">
          {PUBLICATIONS.map((pub) => {
            const links = linkOrder
              .map(([key, label]) => {
                const url = pub.links[key as keyof typeof pub.links];
                return url ? { label, url } : null;
              })
              .filter(Boolean) as { label: string; url: string }[];

            return (
              <div key={pub.id} className="border-l-2 border-slate-200 pl-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{pub.status}</div>
                <div className="text-lg font-semibold text-slate-900 mt-1">{pub.title}</div>
                <div className="text-sm text-slate-600">{pub.venue}</div>
                {'authors' in pub ? (
                  <div className="text-sm text-slate-500 mt-2">{pub.authors}</div>
                ) : null}
                {'summary' in pub ? (
                  <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">{pub.summary}</p>
                ) : null}
                {'highlights' in pub ? (
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                    {pub.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 leading-relaxed">
                        {highlight}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="text-sm text-slate-600 mt-4">
                  {links.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-100 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-500">Available upon request</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
