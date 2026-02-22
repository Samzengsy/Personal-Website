import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LIFESTYLE_PAGES } from '../constants';

interface LifestylePageProps {
  slug: string;
  onBack?: () => void;
}

export const LifestylePage: React.FC<LifestylePageProps> = ({ slug, onBack }) => {
  const page = (LIFESTYLE_PAGES as Record<string, { title: string; subtitle?: string; items: { id: string; src?: string; alt?: string }[] }>)[slug];

  if (!page) {
    return (
      <section className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
          <a
            href="/"
            onClick={(event) => {
              if (onBack) {
                event.preventDefault();
                onBack();
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft size={16} />
            Back to Main Page
          </a>
          <h1 className="text-3xl font-semibold text-slate-900 mt-6 font-display">Lifestyle</h1>
          <p className="text-sm text-slate-600 mt-2">This page is not available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
        <a
          href="/"
          onClick={(event) => {
            if (onBack) {
              event.preventDefault();
              onBack();
            }
          }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft size={16} />
          Back to Main Page
        </a>

        <h1 className="text-3xl font-semibold text-slate-900 mt-6 font-display">{page.title}</h1>
        {page.subtitle ? (
          <p className="text-sm text-slate-600 mt-2">{page.subtitle}</p>
        ) : null}

        <div className="mt-6">
          {page.items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {page.items.map((item) => (
                <div key={item.id} className="aspect-square rounded-xl overflow-hidden border border-slate-200">
                  {item.src ? (
                    <img src={item.src} alt={item.alt || page.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                      No preview
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[140px] rounded-xl border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
              No items yet. Coming soon.
            </div>
          )}
        </div>

        <div className="mt-8">
          <a
            href="/"
            onClick={(event) => {
              if (onBack) {
                event.preventDefault();
                onBack();
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft size={16} />
            Back to Main Page
          </a>
        </div>
      </div>
    </section>
  );
};
