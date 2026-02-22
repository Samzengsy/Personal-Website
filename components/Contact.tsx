import React from 'react';
import { EMAIL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Contact</h2>
        <p className="text-sm text-slate-600 mb-6">
          I welcome academic and industry inquiries. Please feel free to get in touch.
        </p>
        <div className="max-w-md space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Email</span>
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-900 font-semibold hover:underline underline-offset-4"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">WeChat</span>
            <span className="text-slate-900 font-semibold">Zengsy-Sam</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Phone</span>
            <a
              href="tel:+8615951991599"
              className="text-slate-900 font-semibold hover:underline underline-offset-4"
            >
              +86 15951991599
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
