import React from 'react';
import { EMAIL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-block section-block--contact">
      <div className="section-frame fade-up fade-up-delay-6">
        <h2 className="section-title">Contact</h2>
        <p className="section-deck">
          I welcome academic and industry inquiries. Please feel free to get in touch.
        </p>
        <div className="contact-list">
          <div className="contact-row">
            <span className="contact-label">Email</span>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-link"
            >
              {EMAIL}
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">WeChat</span>
            <span className="contact-value">Zengsy-Sam</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">Phone</span>
            <a
              href="tel:+8615951991599"
              className="inline-link"
            >
              +86 15951991599
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
