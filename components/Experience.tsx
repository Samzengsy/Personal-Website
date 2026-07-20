import React from 'react';
import { ASSET_BASE } from '../constants';
import { Database, Gauge, Globe2, Target, Trophy } from 'lucide-react';

const Logo: React.FC<{ src: string; alt: string; href: string; sizeClassName?: string }> = ({ src, alt, href, sizeClassName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`logo-tile ${sizeClassName || 'h-14 w-14 md:h-16 md:w-16'}`}
  >
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
  </a>
);

const LogoInline: React.FC<{ src: string; alt: string; href: string; heightClassName?: string }> = ({ src, alt, href, heightClassName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`logo-inline ${heightClassName || 'h-20 md:h-24'}`}
  >
    <img src={src} alt={alt} className="h-full w-auto object-contain" />
  </a>
);

export const Experience: React.FC = () => {
  return (
    <>
      <section id="academic" className="section-block experience-section fade-up fade-up-delay-3">
        <div className="experience-frame">
          <div className="section-intro">
            <h2 className="section-title">Academic Experience</h2>
            <p className="section-deck">Chronological academic history and preparation.</p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-start">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="academic-logo-group flex items-center gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/Logo/NFLSXL.png`}
                    alt="Nanjing Foreign Language School Xianlin Campus crest"
                    href="https://www.nflsxl.com/51/list.htm"
                    sizeClassName="h-20 w-40 md:h-28 md:w-64"
                  />
                  <div className="experience-name">
                    Nanjing Xianlin Foreign Language School
                  </div>
                </div>
                <div className="experience-joiner md:px-2">×</div>
                <div className="academic-logo-group flex items-center gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/Logo/Wasatch-Academy.webp`}
                    alt="Wasatch Academy crest"
                    href="https://www.nflsxl.com/51/list.htm"
                    sizeClassName="h-20 w-20 md:h-28 md:w-28"
                  />
                  <div className="experience-name">
                    Wasatch Academy Program
                  </div>
                </div>
              </div>
              <div className="experience-date md:text-right">Sep 2018 – Jun 2021</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-4 items-start">
              <div className="flex flex-wrap gap-2">
                <Logo
                  src={`${ASSET_BASE}data/Logo/UCSB.png`}
                  alt="UCSB crest"
                  href="https://www.math.ucsb.edu/"
                  sizeClassName="h-20 w-20 md:h-28 md:w-28"
                />
              </div>
              <div>
                <div className="experience-name">University of California, Santa Barbara</div>
                <div className="experience-role">B.S. in Applied Mathematics</div>
                <div className="experience-detail mt-1">
                  Linear Algebra · Numerical Analysis · Real Analysis · Probability and Statistics · Ordinary Differential Equations · Chaotic Dynamics and Bifurcation Theory · Introduction to Differential Geometry · Topology · Graph and Network Theory
                </div>
              </div>
              <div className="experience-date md:text-right">Sep 2021 – Mar 2025</div>
            </div>
          </div>
        </div>
      </section>

      <section id="industry" className="section-block experience-section fade-up fade-up-delay-4">
        <div className="experience-frame">
          <div className="section-intro">
            <h2 className="section-title">Industry Experience</h2>
            <p className="section-deck">Internship experience and applied engineering work.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="eyebrow">Role</p>
                  <h4 className="experience-heading">AI Algorithm Engineer Intern</h4>
                  <p className="experience-role">Wind Information</p>
                  <div className="experience-date mt-2">Jul 2023 – Sep 2023, May 2025 – Aug 2025</div>
                  <a
                    href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link experience-link"
                  >
                    Official Site
                  </a>
                </div>
                <a
                  href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-logo-stage"
                >
                  <img
                    src={`${ASSET_BASE}data/Logo/wind.webp`}
                    alt="Wind logo"
                    className="company-logo-image"
                  />
                </a>
              </div>
              <ul className="experience-bullets">
                <li>Evaluated layout service accuracy across key document elements.</li>
                <li>Scaled OCR pipeline to create training-ready dataset exports.</li>
                <li>Optimized RT-DETR meta-class threshold under evaluation constraints.</li>
              </ul>

              <div>
                <h5 className="metrics-label">Selected Metrics</h5>
                <div className="mt-3">
                  <p className="metrics-deck">
                    Performance indicators from production deployment and system validation.
                  </p>

                  <div className="metrics-grid">
                    <article className="metric-panel metric-panel--blue">
                        <div>
                          <h3 className="metric-title">
                            <span>Layout Service Accuracy</span>
                            <Target className="metric-icon" size={20} aria-hidden="true" />
                          </h3>
                          <p className="metric-description">
                            Box-level evaluation shows <strong>95%+</strong> per-class accuracy on most layout elements (e.g., tables, figures, headers).
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="metric-row-label">
                              <span>Table / Figure</span><span>99.2%</span>
                            </div>
                            <div className="metric-track" role="img" aria-label="Table and Figure accuracy 99.2%">
                              <div className="metric-fill" style={{ width: '99.2%' }} />
                            </div>
                          </div>

                          <div>
                            <div className="metric-row-label">
                              <span>Header</span><span>98.1%</span>
                            </div>
                            <div className="metric-track" role="img" aria-label="Header accuracy 98.1%">
                              <div className="metric-fill" style={{ width: '98.1%' }} />
                            </div>
                          </div>

                          <div>
                            <div className="metric-row-label">
                              <span>Text</span><span>96.8%</span>
                            </div>
                            <div className="metric-track" role="img" aria-label="Text accuracy 96.8%">
                              <div className="metric-fill" style={{ width: '96.8%' }} />
                            </div>
                          </div>

                          <p className="metric-note">
                            Note: strict image-level metrics are lower than box-level detection accuracy.
                          </p>
                        </div>
                      </article>

                      <article className="metric-panel metric-panel--cyan">
                        <div>
                          <h3 className="metric-title">
                            <span>OCR Pipeline Scale</span>
                            <Database className="metric-icon" size={20} aria-hidden="true" />
                          </h3>
                          <p className="metric-description">
                            Built a structured OCR data pipeline: <strong>11,743</strong> images processed and exported into <strong>2.3 GB</strong> of training-ready outputs.
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="relative w-24 h-24">
                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90" aria-label="Train split 79.97%">
                              <path className="metric-ring-track" strokeWidth="4" stroke="currentColor" fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="metric-ring-value metric-ring-value--cyan" strokeWidth="4" strokeDasharray="79.97, 100" stroke="currentColor" fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="metric-ring-value metric-ring-value--amber" strokeWidth="4" strokeDasharray="20.03, 100" strokeDashoffset="-79.97" stroke="currentColor" fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="metric-ring-number">11.7K</span>
                              <span className="metric-ring-unit">images</span>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 text-sm text-right">
                            <div className="flex items-center justify-end">
                              <span className="metric-dot metric-dot--cyan" />
                              <span className="metric-legend">Train (79.97%)</span>
                            </div>
                            <div className="flex items-center justify-end">
                              <span className="metric-dot metric-dot--amber" />
                              <span className="metric-legend">Test (20.03%)</span>
                            </div>
                            <div className="metric-note">
                              Split: 9,394 / 2,349
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="metric-panel metric-panel--violet metric-panel--feature">

                        <div>
                          <h3 className="metric-title">
                            <span>RT-DETR Threshold Optimization</span>
                            <Gauge className="metric-icon" size={20} aria-hidden="true" />
                          </h3>
                          <p className="metric-description">
                            Calibrated the <strong>meta class</strong> IoU threshold to improve detection accuracy under evaluation constraints.
                          </p>
                        </div>

                        <div className="mt-auto">
                          <div className="metric-badge">
                            IoU: 0.75 → 0.60
                          </div>

                          <div className="flex items-end space-x-2">
                            <span className="metric-big-number">93.63%</span>
                            <span className="metric-big-label">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              Accuracy (meta)
                            </span>
                          </div>

                          <p className="metric-note">
                            Result after threshold tuning; avoid reporting “before” unless you have the baseline value.
                          </p>
                        </div>
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section-block experience-section fade-up fade-up-delay-5">
        <div className="experience-frame">
          <div className="section-intro">
            <h2 className="section-title">Research Experience</h2>
            <p className="section-deck">Current research focus and responsibilities.</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <p className="eyebrow">Role</p>
                <h4 className="experience-heading">Research Assistant</h4>
                <p className="experience-role">State Key Lab of CAD & CG, Zhejiang University</p>
                <div className="experience-date mt-2">Aug 2025 – Present</div>
                <a
                  href="http://www.cad.zju.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link experience-link"
                >
                  Lab Site
                </a>
                <div className="link-cluster mt-3">
                  {[
                    { label: 'ReasonMatch', url: 'https://aim-uofa.github.io/reasonmatch/' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2606.03577' },
                    { label: 'GitHub', url: 'https://github.com/aim-uofa/ReasonMatch' },
                    { label: 'Dataset', url: 'https://huggingface.co/datasets/ReasonMatch/ReasonMatch' }
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link-chip"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <LogoInline
                src={`${ASSET_BASE}data/Logo/ZJU.jpg`}
                alt="Zhejiang University logo"
                href="http://www.cad.zju.edu.cn/"
                heightClassName="h-24 md:h-32"
              />
            </div>
            <div className="space-y-4">
              <ul className="experience-bullets">
                <li>Equal-contribution author on ReasonMatch, a CVPR 2026 paper on complex spatial reasoning in multimodal LLMs.</li>
                <li>Helped build a verifiable wide-baseline matching benchmark and open-source release for code, data, and evaluation.</li>
                <li>Works on multimodal evaluation pipelines, dataset construction, and reinforcement-learning recipes for measurable model behavior.</li>
              </ul>

              <div>
                <h5 className="metrics-label">Selected Metrics</h5>
                <p className="metrics-deck">
                  Experimental results and evaluation indicators from research studies.
                </p>

                <div className="metrics-grid">
                  <article className="metric-panel metric-panel--blue">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="metric-title">
                          <span>ReasonMatch F1 Score</span>
                          <Trophy className="metric-icon" size={20} aria-hidden="true" />
                        </h3>
                        <p className="metric-description">
                          Top performance on ReasonMatch-Bench, surpassing strong proprietary baselines under the same evaluation.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="metric-big-number">70.5</div>
                          <div className="metric-number-caption">F1 (Qwen3-VL + DCRL)</div>
                        </div>
                        <span className="metric-badge">
                          Best-in-table
                        </span>
                      </div>

                      <div className="mt-5 space-y-4">
                        <div>
                          <div className="metric-row-label">
                            <span>This work</span><span>70.5</span>
                          </div>
                          <div className="metric-track" role="img" aria-label="This work F1 70.5">
                            <div className="metric-fill" style={{ width: '100%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="metric-row-label">
                            <span>GPT-5-mini</span><span>57.9</span>
                          </div>
                          <div className="metric-track" role="img" aria-label="GPT-5-mini F1 57.9">
                            <div className="metric-fill metric-fill--violet" style={{ width: '82.1%' }} />
                          </div>
                          <div className="metric-note">Normalized to 70.5 as 100%</div>
                        </div>

                        <div>
                          <div className="metric-row-label">
                            <span>Gemini-2.5-Pro</span><span>42.8</span>
                          </div>
                          <div className="metric-track" role="img" aria-label="Gemini-2.5-Pro F1 42.8">
                            <div className="metric-fill metric-fill--cyan" style={{ width: '60.7%' }} />
                          </div>
                        </div>
                      </div>

                      <p className="metric-note metric-note--spaced">
                        Notes: Values shown as reported under the same benchmark protocol.
                      </p>
                    </div>
                  </article>

                  <article className="metric-panel metric-panel--teal">
                    <div>
                      <h3 className="metric-title">
                        <span>OOD Generalization</span>
                        <Globe2 className="metric-icon" size={20} aria-hidden="true" />
                      </h3>
                      <p className="metric-description">
                        Improved out-of-distribution Avg. F1 across 4 datasets (ETH3D, IMC2022/2024, UnrealStereo4K).
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="metric-big-number">69.5</div>
                          <div className="metric-number-caption">Avg. F1 (OOD)</div>
                        </div>
                        <span className="positive-badge">
                          +38.8
                          <span className="ml-1" aria-hidden="true">↑</span>
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="metric-row-label">
                          <span>Baseline Avg</span><span>30.7</span>
                        </div>
                        <div className="metric-track" role="img" aria-label="Baseline Avg F1 30.7">
                          <div className="metric-fill metric-fill--amber" style={{ width: '44.2%' }} />
                        </div>

                        <div className="metric-row-label mt-4">
                          <span>This work Avg</span><span>69.5</span>
                        </div>
                        <div className="metric-track" role="img" aria-label="This work Avg F1 69.5">
                          <div className="metric-fill metric-fill--teal" style={{ width: '100%' }} />
                        </div>

                        <div className="metric-note">
                          Normalized to 69.5 as 100% for visual comparison.
                        </div>
                      </div>

                      <div className="metric-tag-list">
                        <span className="metric-tag">ETH3D</span>
                        <span className="metric-tag">IMC2022</span>
                        <span className="metric-tag">IMC2024</span>
                        <span className="metric-tag">UnrealStereo4K</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="metric-note">
                        Takeaway: gains persist under distribution shift, not just on the in-domain benchmark.
                      </p>
                    </div>
                  </article>

                  <article className="metric-panel metric-panel--violet metric-panel--feature">

                    <div>
                      <h3 className="metric-title">
                        <span>Evaluation Pipeline</span>
                        <Gauge className="metric-icon" size={20} aria-hidden="true" />
                      </h3>
                      <p className="metric-description">
                        Built reproducible vLLM-based evaluation runners (offline eval + visual audits), enabling scalable model benchmarking.
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="metric-big-number">981</div>
                          <div className="metric-number-caption">PointArena samples</div>
                        </div>
                        <span className="metric-badge">
                          vLLM + offline eval
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="metric-row-label">
                          <span>Accuracy</span><span>68.7%</span>
                        </div>
                        <div className="metric-track" role="img" aria-label="PointArena accuracy 68.7%">
                          <div className="metric-fill" style={{ width: '68.7%' }} />
                        </div>

                        <div className="metric-tag-list">
                          <span className="metric-tag">Visual audits</span>
                          <span className="metric-tag">Runbook</span>
                          <span className="metric-tag">Reproducible</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="metric-note">
                        Tip: If you have multiple runs, consider linking to a short “Methods” modal/page for metric definitions.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
