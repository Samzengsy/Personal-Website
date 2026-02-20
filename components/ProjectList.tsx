import React from 'react';
import { PROJECT_GROUPS } from '../constants';

const getInitials = (label: string) =>
  label
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Review</h2>
      <div className="space-y-6">
        {PROJECT_GROUPS.map((group) => (
          <div key={group.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{group.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {group.items.map((item) => {
                const content = (
                  <>
                    {item.thumbnail ? (
                      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-100">
                        <img
                          src={item.thumbnail}
                          alt={item.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                          {getInitials(item.label)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                          <div className="mt-2 flex items-end gap-1 h-6">
                            <span className="w-1.5 rounded bg-indigo-300 h-2" />
                            <span className="w-1.5 rounded bg-indigo-400 h-3" />
                            <span className="w-1.5 rounded bg-indigo-500 h-5" />
                            <span className="w-1.5 rounded bg-indigo-400 h-4" />
                            <span className="w-1.5 rounded bg-indigo-300 h-3" />
                          </div>
                        </div>
                      </div>
                    )}
                    {item.thumbnail ? (
                      <div className={`text-sm font-semibold ${item.url ? 'text-blue-700' : 'text-gray-500'}`}>
                        {item.label}
                      </div>
                    ) : null}
                  </>
                );

                return item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-dashed border-blue-200 bg-blue-50/40 p-4 min-h-[120px] flex flex-col gap-3 hover:bg-blue-50 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 min-h-[120px] flex flex-col gap-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
