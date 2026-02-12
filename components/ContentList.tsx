import React from 'react';
import { CONTENT_ITEMS } from '../constants';
import { PlayCircle } from 'lucide-react';

export const ContentList: React.FC = () => {
  return (
    <section id="videos" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">分享AI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTENT_ITEMS.map((item) => (
          <a 
            href={item.url} 
            key={item.id}
            className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 rounded-full p-3 shadow-lg backdrop-blur-sm">
                  <PlayCircle className="text-gray-900" size={24} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};