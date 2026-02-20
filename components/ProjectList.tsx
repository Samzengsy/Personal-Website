import React from 'react';
import { PROJECT_GROUPS } from '../constants';

export const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Review</h2>
      <div className="space-y-6">
        {PROJECT_GROUPS.map((group) => (
          <div key={group.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{group.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((item) =>
                item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-dashed border-blue-200 bg-blue-50/40 p-4 min-h-[96px] flex items-center justify-center text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 min-h-[96px] flex items-center justify-center text-gray-400 text-sm"
                  >
                    {item.label}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
