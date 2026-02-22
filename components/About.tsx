import React from 'react';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-1">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">About</h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
          {PROFILE.aboutText}
        </p>
      </div>
    </section>
  );
};
