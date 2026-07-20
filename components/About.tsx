import React from 'react';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-block section-block--plain">
      <div className="section-frame fade-up fade-up-delay-1">
        <h2 className="section-title">About</h2>
        <p className="section-prose whitespace-pre-line">
          {PROFILE.aboutText}
        </p>
      </div>
    </section>
  );
};
