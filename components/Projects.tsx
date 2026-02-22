import React from 'react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-10 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm fade-up fade-up-delay-4">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-display">Projects</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-slate-200 pl-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Christmas Tree Interactive Web</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Interactive particle-based Christmas tree experiment built with Three.js and creative front-end design.
                </p>
              </div>
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
      </div>
    </section>
  );
};
