import React from 'react';
import { PROJECT_GROUPS } from '../constants';

const projectDescriptions: Record<string, string> = {
  'Least Squares in Financial Mathematics': 'Least squares approximation study with applied analysis on financial data patterns.',
  'HOUSING CRISIS AWARENESS CAMPAIGN': 'Report and campaign design examining housing insecurity and public awareness.',
  'Dataset Prep Tools': 'Tooling for dataset preparation and structured export workflows.',
  'Vision Eval Tools': 'Evaluation toolkit for vision model performance and error inspection.',
  'Error Analysis UI': 'Interface for exploring model errors and qualitative outputs.',
  'Christmas Tree Interactive Web': 'Interactive particle-based Christmas tree experiment built with Three.js and creative front-end design.',
  'ReasonMatch': 'CVPR 2026 open-source benchmark, dataset release, and DCRL training recipe for wide-baseline spatial reasoning in multimodal LLMs.',
  'Cinematic Prompting for Long Video': 'Prompt optimization framework for more cinematic long-video storyboards.'
};

const getLinkLabel = (url?: string) => {
  if (!url) return null;
  if (url.includes('github.com')) return 'GitHub';
  if (url.includes('arxiv.org')) return 'arXiv';
  if (url.includes('huggingface.co')) return 'Dataset';
  return 'Link';
};

const ProjectLinks: React.FC<{ item: { label: string; url?: string; links?: { label: string; url: string }[] } }> = ({ item }) => {
  const links = item.links ?? (item.url && getLinkLabel(item.url) ? [{ label: getLinkLabel(item.url) as string, url: item.url }] : []);

  if (links.length === 0) return null;

  return (
    <div className="link-cluster project-link-cluster">
      {links.map((link) => (
        <a
          key={`${item.label}-${link.label}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link-chip"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export const Projects: React.FC = () => {
  const undergrad = PROJECT_GROUPS.find((group) => group.id === 'undergrad');
  const wind = PROJECT_GROUPS.find((group) => group.id === 'wind');
  const zju = PROJECT_GROUPS.find((group) => group.id === 'zju');

  return (
    <section id="projects" className="section-block section-block--projects">
      <div className="section-frame fade-up fade-up-delay-4">
        <h2 className="section-title">Projects</h2>
        <div className="project-groups">
          <div>
            <div className="eyebrow">Undergraduate Projects</div>
            <div className="project-list">
              {(undergrad?.items ?? []).map((item) => (
                <article key={item.label} className="project-item">
                  <h3 className="project-title">{item.label}</h3>
                  <div className="project-description">— {projectDescriptions[item.label]}</div>
                  <ProjectLinks item={item} />
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Wind Projects</div>
            <div className="project-list">
              {(wind?.items ?? []).map((item) => (
                <article key={item.label} className="project-item">
                  <h3 className="project-title">{item.label}</h3>
                  <div className="project-description">— {projectDescriptions[item.label]}</div>
                  <ProjectLinks item={item} />
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Zhejiang University Projects</div>
            <div className="project-list">
              {(zju?.items ?? []).map((item) => (
                <article key={item.label} className="project-item">
                  <h3 className="project-title">{item.label}</h3>
                  <div className="project-description">— {projectDescriptions[item.label]}</div>
                  <ProjectLinks item={item} />
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Independent Projects</div>
            <div className="project-list">
              <article className="project-item">
                <h3 className="project-title">Christmas Tree Interactive Web</h3>
                <div className="project-description">— {projectDescriptions['Christmas Tree Interactive Web']}</div>
                <a
                  href="https://github.com/Samzengsy/Christmas-Tree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link project-inline-link"
                >
                  [GitHub]
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
