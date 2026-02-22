import React from 'react';
import { ASSET_BASE, PROJECT_GROUPS } from '../constants';

const Logo: React.FC<{ src: string; alt: string; href: string }> = ({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-14 w-14 md:h-16 md:w-16 rounded-xl border border-slate-200 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow"
  >
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
  </a>
);

const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const Experience: React.FC = () => {
  const undergradGroup = PROJECT_GROUPS.find((group) => group.id === 'undergrad');
  const zjuGroup = PROJECT_GROUPS.find((group) => group.id === 'zju');
  const windGroup = PROJECT_GROUPS.find((group) => group.id === 'wind');

  const researchProjects = [...(undergradGroup?.items ?? []), ...(zjuGroup?.items ?? [])];

  const projectDescriptions: Record<string, string> = {
    'Undergrad 1': 'Undergraduate project placeholder; scope and results to be added.',
    'HOUSING CRISIS AWARENESS CAMPAIGN': 'Policy communication report with visual narrative and community impact focus.',
    'ZJU 1': 'Lab project placeholder; methods and findings to be summarized.',
    'ZJU 2': 'Research prototype placeholder; data and evaluation details forthcoming.'
  };

  return (
    <section id="experience" className="mb-10 scroll-mt-24 fade-up fade-up-delay-3">
      <div id="projects" className="scroll-mt-24" />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 font-display">Experience</h2>
        <p className="text-sm text-slate-600">Research and industry experience, with selected outputs and metrics.</p>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Research Experience</h3>
          <div className="space-y-6 mt-4">
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-wrap gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/ZJU.jpg`}
                    alt="Zhejiang University logo"
                    href="http://www.cad.zju.edu.cn/"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                    <h4 className="text-lg font-semibold text-slate-900">Research Assistant</h4>
                    <p className="text-sm text-slate-600">State Key Lab of CAD & CG, Zhejiang University</p>
                    <div className="text-xs text-slate-500 mt-2">Date range: Current (gap year)</div>
                    <a
                      href="http://www.cad.zju.edu.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                    >
                      Lab Site
                    </a>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                    <li>Research assistantship in CAD & CG Lab with AI focus.</li>
                    <li>Interests span multimodal systems, long-video understanding, and generative AI.</li>
                    <li>Builds data pipelines and evaluation setups for measurable model behavior.</li>
                  </ul>

                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Related Work / Projects</h5>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                      {researchProjects.map((item) => {
                        const description = projectDescriptions[item.label] || 'Project details forthcoming.';
                        const slug = slugify(item.label);
                        const anchor = `proj-${slug}`;
                        const href = item.url ?? `#${anchor}`;
                        const isExternal = Boolean(item.url);

                        return (
                          <li key={item.label} id={anchor} className="flex flex-wrap gap-2">
                            <span className="font-semibold text-slate-900">{item.label}</span>
                            <span>— {description}</span>
                            <a
                              href={href}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="text-blue-700 hover:underline underline-offset-4"
                            >
                              [Link]
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-wrap gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/UCSB.png`}
                    alt="UCSB crest"
                    href="https://www.math.ucsb.edu/"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                    <h4 className="text-lg font-semibold text-slate-900">B.S. in Applied Mathematics</h4>
                    <p className="text-sm text-slate-600">UC Santa Barbara, Mathematics Department</p>
                    <div className="text-xs text-slate-500 mt-2">Date range: Completed (date not specified)</div>
                    <a
                      href="https://www.math.ucsb.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                    >
                      Department Site
                    </a>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                    <li>Applied mathematics training with emphasis on modeling and analysis.</li>
                    <li>Academic home within the UCSB Mathematics Department.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-wrap gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/NFLSXL.png`}
                    alt="Nanjing Foreign Language School Xianlin Campus crest"
                    href="https://www.nflsxl.com/51/list.htm"
                  />
                  <Logo
                    src={`${ASSET_BASE}data/Wasatch-Academy.webp`}
                    alt="Wasatch Academy crest"
                    href="https://www.nflsxl.com/51/list.htm"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                    <h4 className="text-lg font-semibold text-slate-900">Program Participant</h4>
                    <p className="text-sm text-slate-600">Nanjing Xianlin Foreign Language School × Wasatch Academy Program</p>
                    <div className="text-xs text-slate-500 mt-2">Date range: Not specified</div>
                    <a
                      href="https://www.nflsxl.com/51/list.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                    >
                      Program Site
                    </a>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                    <li>International academic program between NFLS Xianlin Campus and Wasatch Academy.</li>
                    <li>Cross-cultural coursework and exchange experience (details forthcoming).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Industry Experience</h3>
          <div className="space-y-6 mt-4">
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-wrap gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/wind.webp`}
                    alt="Wind logo"
                    href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                    <h4 className="text-lg font-semibold text-slate-900">Data Evaluation & Pipeline Work</h4>
                    <p className="text-sm text-slate-600">Wind Information</p>
                    <div className="text-xs text-slate-500 mt-2">Date range: Not specified</div>
                    <a
                      href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                    >
                      Official Site
                    </a>
                  </div>
                  <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                    <li>Evaluated layout service accuracy across key document elements.</li>
                    <li>Scaled OCR pipeline to create training-ready dataset exports.</li>
                    <li>Optimized RT-DETR meta-class threshold under evaluation constraints.</li>
                  </ul>

                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Selected Metrics</h5>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 mb-4">
                        Visualization highlights from data evaluation and pipeline work:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                              <span>Layout Service Accuracy</span>
                              <span className="ml-2 text-xl" aria-hidden="true">🎯</span>
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                              Box-level evaluation shows <strong>95%+</strong> per-class accuracy on most layout elements (e.g., tables, figures, headers).
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                                <span>Table / Figure</span><span>99.2%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="Table and Figure accuracy 99.2%">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '99.2%' }} />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                                <span>Header</span><span>98.1%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="Header accuracy 98.1%">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '98.1%' }} />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                                <span>Text</span><span>96.8%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="Text accuracy 96.8%">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '96.8%' }} />
                              </div>
                            </div>

                            <p className="text-xs text-gray-400 mt-2">
                              Note: strict image-level metrics are lower than box-level detection accuracy.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                              <span>OCR Pipeline Scale</span>
                              <span className="ml-2 text-xl" aria-hidden="true">🗄️</span>
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                              Built a structured OCR data pipeline: <strong>11,743</strong> images processed and exported into <strong>2.3 GB</strong> of training-ready outputs.
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="relative w-24 h-24">
                              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90" aria-label="Train split 79.97%">
                                <path className="text-gray-100" strokeWidth="4" stroke="currentColor" fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-indigo-600" strokeWidth="4" strokeDasharray="79.97, 100" stroke="currentColor" fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              </svg>

                              <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-xl font-bold text-gray-800">11.7K</span>
                                <span className="text-[11px] text-gray-400 -mt-0.5">images</span>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2 text-sm text-right">
                              <div className="flex items-center justify-end">
                                <span className="w-3 h-3 rounded-full bg-indigo-600 mr-2" />
                                <span className="font-medium text-gray-700">Train (79.97%)</span>
                              </div>
                              <div className="flex items-center justify-end">
                                <span className="w-3 h-3 rounded-full bg-gray-200 mr-2" />
                                <span className="font-medium text-gray-700">Test (20.03%)</span>
                              </div>
                              <div className="text-xs text-gray-400">
                                Split: 9,394 / 2,349
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60" />

                          <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                              <span>RT-DETR Threshold Optimization</span>
                              <span className="ml-2 text-xl" aria-hidden="true">⚙️</span>
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                              Calibrated the <strong>meta class</strong> IoU threshold to improve detection accuracy under evaluation constraints.
                            </p>
                          </div>

                          <div className="mt-auto">
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                              IoU: 0.75 → 0.60
                            </div>

                            <div className="flex items-end space-x-2">
                              <span className="text-4xl font-black text-gray-900">93.63%</span>
                              <span className="text-sm font-medium text-purple-600 mb-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                Accuracy (meta)
                              </span>
                            </div>

                            <p className="text-xs text-gray-400 mt-2">
                              Result after threshold tuning; avoid reporting “before” unless you have the baseline value.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Selected Tools / Repos</h5>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                      {(windGroup?.items ?? []).map((item) => (
                        <li key={item.label} className="flex flex-wrap gap-2">
                          <span className="font-semibold text-slate-900">{item.label}</span>
                          <span>— Internal tooling from Wind project work.</span>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline underline-offset-4"
                          >
                            [Link]
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
