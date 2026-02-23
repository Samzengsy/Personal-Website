import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-4">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Skills</h2>
        <div className="space-y-6 text-sm text-slate-700">
          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">AI Systems Engineering</h3>
            <div className="space-y-1">
              <div>Design and deploy end-to-end AI systems across training, evaluation, and production environments.</div>
              <div>Optimize model performance under real-world latency, memory, and reliability constraints.</div>
              <div>Translate research prototypes into stable, maintainable workflows.</div>
            </div>
          </div>

          <div className="h-px bg-slate-200/70" />

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">Data-Centric Modeling</h3>
            <div className="space-y-1">
              <div>Build large-scale data pipelines and standardized representations for training and evaluation.</div>
              <div>Redesign annotation strategies and data schemas to improve downstream model behavior.</div>
              <div>Analyze how dataset structure influences generalization and system robustness.</div>
            </div>
          </div>

          <div className="h-px bg-slate-200/70" />

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">Spatial &amp; Multimodal Intelligence</h3>
            <div className="space-y-1">
              <div>Develop perception systems that reason over structure, geometry, and multimodal inputs.</div>
              <div>Evaluate model behavior across complex spatial and document-level tasks.</div>
              <div>Diagnose failure modes in structured and high-variance visual environments.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
