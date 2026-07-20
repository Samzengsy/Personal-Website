import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-block section-block--skills">
      <div className="section-frame fade-up fade-up-delay-4">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <article className="skill-group">
            <h3 className="eyebrow">AI Systems Engineering</h3>
            <div className="skill-lines">
              <div>Design and deploy end-to-end AI systems across training, evaluation, and production environments.</div>
              <div>Optimize model performance under real-world latency, memory, and reliability constraints.</div>
              <div>Translate research prototypes into stable, maintainable workflows.</div>
            </div>
          </article>

          <article className="skill-group">
            <h3 className="eyebrow">Data-Centric Modeling</h3>
            <div className="skill-lines">
              <div>Build large-scale data pipelines and standardized representations for training and evaluation.</div>
              <div>Redesign annotation strategies and data schemas to improve downstream model behavior.</div>
              <div>Construct verifiable benchmark data with structured metadata, correspondence labels, and reproducible release paths.</div>
            </div>
          </article>

          <article className="skill-group">
            <h3 className="eyebrow">Spatial &amp; Multimodal Intelligence</h3>
            <div className="skill-lines">
              <div>Develop perception systems that reason over structure, geometry, viewpoint change, and multimodal inputs.</div>
              <div>Evaluate model behavior across complex spatial matching, document-level, and out-of-distribution tasks.</div>
              <div>Diagnose failure modes in structured and high-variance visual environments.</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
