import React from 'react';
import { PUBLICATIONS } from '../constants';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-2">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6 font-display">Publications</h2>
        <div className="space-y-5">
          {PUBLICATIONS.map((pub) => {
            const links = [
              pub.links.openReview ? { label: 'OpenReview', url: pub.links.openReview } : null,
              pub.links.preprint ? { label: 'Preprint', url: pub.links.preprint } : null,
              pub.links.project ? { label: 'Project Page', url: pub.links.project } : null
            ].filter(Boolean) as { label: string; url: string }[];

            return (
              <div key={pub.id} className="border-l-2 border-slate-200 pl-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{pub.status}</div>
                <div className="text-lg font-semibold text-slate-900 mt-1">{pub.title}</div>
                <div className="text-sm text-slate-600">{pub.venue}</div>
                <div className="text-sm text-slate-600 mt-2">
                  {links.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:underline underline-offset-4"
                        >
                          [{link.label}]
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
