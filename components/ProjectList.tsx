import React from 'react';
import { PROJECTS } from '../constants';
import { Star } from 'lucide-react';

export const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI作品集</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-between min-h-[160px]"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <div className="w-full flex items-center justify-between mt-auto">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">{project.title}</h3>
              <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                <Star size={12} fill="currentColor" />
                {project.stats}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};