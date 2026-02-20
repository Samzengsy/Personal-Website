import React from 'react';
import { PROFILE, RESUME_URL } from '../constants';
import { ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="mb-12 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 hidden md:block">About Me</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {PROFILE.aboutText}
            </p>
            <div className="pt-2">
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4"
              >
                View My CV
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-md">
              <img 
                src={PROFILE.heroImage} 
                alt="Working" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
