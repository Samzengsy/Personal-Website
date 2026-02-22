import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-4">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Skills</h2>
        <div className="space-y-2 text-sm text-slate-700">
          <div>
            <span className="font-semibold text-slate-900">Languages:</span> See CV for full list.
          </div>
          <div>
            <span className="font-semibold text-slate-900">Frameworks/Tools:</span> See CV for full list.
          </div>
          <div>
            <span className="font-semibold text-slate-900">Systems:</span> Data pipelines and evaluation workflows (details in CV).
          </div>
        </div>
      </div>
    </section>
  );
};
