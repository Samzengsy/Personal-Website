import React from 'react';
import { PROFILE, SOCIAL_LINKS, NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="w-full lg:w-72 lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-white/90 backdrop-blur shadow-sm lg:shadow-none border-b lg:border-b-0 lg:border-r border-slate-200 z-50 flex flex-col">
      <div className="p-4 lg:p-6 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start w-full gap-4">
        <div className="flex items-center lg:flex-col lg:items-start gap-4 lg:gap-2 lg:w-full">
          <div className="relative w-12 h-12 lg:w-28 lg:h-28 lg:mb-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
            <img src={PROFILE.avatar} alt={PROFILE.name} className="w-full h-full object-cover" />
          </div>

          <div className="text-left">
            <h1 className="text-lg lg:text-2xl font-semibold text-slate-900 leading-tight font-display">{PROFILE.name}</h1>
            <p className="text-xs lg:text-sm text-slate-500 lg:mb-2">{PROFILE.title}</p>
          </div>
        </div>

        <div className="hidden" aria-hidden="true" />
      </div>

      <nav className="w-full hidden lg:block px-6">
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === item.id ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:hidden w-full overflow-x-auto no-scrollbar px-2 pb-2">
        <div className="flex gap-2 min-w-max px-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors
                ${activeSection === item.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`}
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
