import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LIFESTYLE_PAGES } from '../constants';

interface LifestylePageProps {
  slug: string;
  onBack?: () => void;
}

export const LifestylePage: React.FC<LifestylePageProps> = ({ slug, onBack }) => {
  const page = (LIFESTYLE_PAGES as Record<string, { title: string; subtitle?: string; items: { id: string; src?: string; alt?: string; location?: string; year?: string; note?: string }[] }>)[slug];
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
      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg"
    >
      <ArrowLeft size={16} />
      ← Back to Main Page
    </a>
  );

  if (!page) {
    return (
      <section className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900 font-display">Lifestyle</h1>
          <p className="text-sm text-slate-600 mt-2">This page is not available yet.</p>
          <div className="mt-4">{renderBackButton()}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900 font-display">{page.title}</h1>
        {page.subtitle ? (
          <p className="text-sm text-slate-600 mt-2">{page.subtitle}</p>
        ) : null}
        <div className="mt-4">{renderBackButton()}</div>

        <div className="mt-6">
          {page.items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {page.items.map((item) => (
                <div key={item.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <div className="aspect-square">
                    {item.src && !brokenImages[item.id] ? (
                      <img
                        src={item.src}
                        alt={item.alt || page.title}
                        className="w-full h-full object-cover"
                        onError={() => setBrokenImages((prev) => ({ ...prev, [item.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 bg-slate-50">
                        Image unavailable
                      </div>
                    )}
                  </div>
                  <div className="p-3 text-xs text-slate-600 space-y-1">
                    <div><span className="font-semibold text-slate-800">Location:</span> {item.location || 'Archive'}</div>
                    <div><span className="font-semibold text-slate-800">Year:</span> {item.year || 'Undated'}</div>
                    <div><span className="font-semibold text-slate-800">Note:</span> {item.note || 'Stored in personal archive.'}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[140px] rounded-xl border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
              No entries yet. Content coming soon.
            </div>
          )}
        </div>

        <div className="mt-8">{renderBackButton()}</div>
      </div>
    </section>
  );
};
