import React from 'react';
import { PROJECT_GROUPS } from '../constants';

const projectDescriptions: Record<string, string> = {
  'Undergrad 1': 'Undergraduate research project exploring foundational modeling and analysis methods.',
  'HOUSING CRISIS AWARENESS CAMPAIGN': 'Report and campaign design examining housing insecurity and public awareness.',
  'Dataset Prep Tools': 'Tooling for dataset preparation and structured export workflows.',
  'Vision Eval Tools': 'Evaluation toolkit for vision model performance and error inspection.',
  'Error Analysis UI': 'Interface for exploring model errors and qualitative outputs.',
  'Christmas Tree Interactive Web': 'Interactive particle-based Christmas tree experiment built with Three.js and creative front-end design.',
  'ZJU 1': 'Lab-based multimodal reasoning prototype evaluated on structured benchmarks.',
  'ZJU 2': 'Research project studying multimodal understanding with structured evaluation.'
};

const getLinkLabel = (url?: string) => {
  if (!url) return null;
  if (url.includes('github.com')) return 'GitHub';
  return 'Link';
};

export const Projects: React.FC = () => {
  const undergrad = PROJECT_GROUPS.find((group) => group.id === 'undergrad');
  const wind = PROJECT_GROUPS.find((group) => group.id === 'wind');
  const zju = PROJECT_GROUPS.find((group) => group.id === 'zju');

  return (
    <section id="projects" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-4">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Projects</h2>
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Undergraduate Projects</div>
            <div className="mt-3 space-y-3">
              {(undergrad?.items ?? []).map((item) => (
                <div key={item.label} className="border-l-2 border-slate-200 pl-4">
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">— {projectDescriptions[item.label]}</div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-700 hover:underline underline-offset-4"
                    >
                      [{getLinkLabel(item.url)}]
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Wind Projects</div>
            <div className="mt-3 space-y-3">
              {(wind?.items ?? []).map((item) => (
                <div key={item.label} className="border-l-2 border-slate-200 pl-4">
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">— {projectDescriptions[item.label]}</div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-700 hover:underline underline-offset-4"
                    >
                      [{getLinkLabel(item.url)}]
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Independent Project</div>
            <div className="mt-3 space-y-3">
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-sm font-semibold text-slate-900">Christmas Tree Interactive Web</div>
                <div className="text-sm text-slate-600">— {projectDescriptions['Christmas Tree Interactive Web']}</div>
                <a
                  href="https://github.com/Samzengsy/Christmas-Tree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:underline underline-offset-4"
                >
                  [GitHub]
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Zhejiang University Projects</div>
            <div className="mt-3 space-y-3">
              {(zju?.items ?? []).map((item) => (
                <div key={item.label} className="border-l-2 border-slate-200 pl-4">
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-sm text-slate-600">— {projectDescriptions[item.label]}</div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-700 hover:underline underline-offset-4"
                    >
                      [{getLinkLabel(item.url)}]
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
