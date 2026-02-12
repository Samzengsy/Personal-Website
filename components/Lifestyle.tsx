import React from 'react';
import { LIFESTYLE } from '../constants';

export const Lifestyle: React.FC = () => {
  return (
    <section id="life" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">生活掠影</h2>
      
      {/* Bio Description */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
             <p className="text-gray-600 leading-relaxed text-lg">
              {LIFESTYLE.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {LIFESTYLE.photos.map((photo) => (
          <div key={photo.id} className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer shadow-sm">
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};