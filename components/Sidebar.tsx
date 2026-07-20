import React from 'react';
import { PROFILE, SOCIAL_LINKS, NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="profile-rail">
      <div className="profile-rail__header">
        <div className="profile-identity">
          <div className="profile-portrait">
            <img src={PROFILE.avatar} alt={PROFILE.name} className="w-full h-full object-contain" />
          </div>

          <div className="profile-copy">
            <h1 className="profile-name">{PROFILE.name}</h1>
            <p className="profile-title">{PROFILE.title}</p>
          </div>
        </div>

        <div className="hidden" aria-hidden="true" />
      </div>

      <nav className="desktop-nav" aria-label="Main sections">
        <ul className="desktop-nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`desktop-nav__button ${activeSection === item.id ? 'is-active' : ''}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mobile-nav no-scrollbar" aria-label="Main sections">
        <div className="mobile-nav__list">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`mobile-nav__button ${activeSection === item.id ? 'is-active' : ''}`}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};
