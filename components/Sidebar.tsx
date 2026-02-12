import React from 'react';
import { PROFILE, SOCIAL_LINKS, NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="w-full lg:w-72 lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-white shadow-sm lg:shadow-none border-b lg:border-b-0 lg:border-r border-gray-100 z-50 flex flex-col">
      
      {/* Profile Header */}
      <div className="p-4 lg:p-6 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start w-full gap-4">
        
        {/* Avatar & Info Wrapper */}
        <div className="flex items-center lg:flex-col lg:items-start gap-4 lg:gap-0 lg:w-full">
          {/* Avatar */}
          <div className="relative w-12 h-12 lg:w-32 lg:h-32 lg:mb-4 rounded-full overflow-hidden border-2 lg:border-4 border-white shadow-md flex-shrink-0">
            <img 
              src={PROFILE.avatar} 
              alt={PROFILE.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Info */}
          <div className="text-left lg:text-left">
            <h1 className="text-lg lg:text-2xl font-bold text-gray-900 leading-tight">{PROFILE.name}</h1>
            <p className="text-xs lg:text-sm text-gray-500 lg:mb-4">{PROFILE.title}</p>
          </div>
        </div>

        {/* Social Icons (Hidden on mobile to save space, or show distinct row) */}
        <div className="hidden lg:flex gap-3 mb-8 w-full">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.url}
              className={`p-2 rounded-md transition-transform hover:-translate-y-1 ${link.bgColor || 'bg-gray-200'} ${link.textColor || 'text-gray-700'}`}
              aria-label={link.name}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="w-full hidden lg:block px-6">
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden w-full overflow-x-auto no-scrollbar px-2 pb-2">
        <div className="flex gap-2 min-w-max px-2">
           {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors
                ${activeSection === item.id 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-600 border-gray-200'
                }`}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};