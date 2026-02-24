import React from 'react';
import { ASSET_BASE } from '../constants';

const Logo: React.FC<{ src: string; alt: string; href: string; sizeClassName?: string }> = ({ src, alt, href, sizeClassName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`rounded-xl border border-slate-200 bg-white flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow ${sizeClassName || 'h-14 w-14 md:h-16 md:w-16'}`}
  >
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
  </a>
);

const LogoInline: React.FC<{ src: string; alt: string; href: string; heightClassName?: string }> = ({ src, alt, href, heightClassName }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm hover:shadow-md transition-shadow ${heightClassName || 'h-20 md:h-24'}`}
  >
    <img src={src} alt={alt} className="h-full w-auto object-contain" />
  </a>
);

export const Experience: React.FC = () => {
  return (
    <>
      <section id="academic" className="mb-10 scroll-mt-24 fade-up fade-up-delay-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 font-display">Academic Experience</h2>
            <p className="text-sm text-slate-600">Chronological academic history and preparation.</p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-start">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/Logo/NFLSXL.png`}
                    alt="Nanjing Foreign Language School Xianlin Campus crest"
                    href="https://www.nflsxl.com/51/list.htm"
                    sizeClassName="h-16 w-16 md:h-20 md:w-20"
                  />
                  <div className="text-sm font-semibold text-slate-900">
                    Nanjing Xianlin Foreign Language School
                  </div>
                </div>
                <div className="text-slate-400 font-semibold text-lg md:px-2">×</div>
                <div className="flex items-center gap-3">
                  <Logo
                    src={`${ASSET_BASE}data/Logo/Wasatch-Academy.webp`}
                    alt="Wasatch Academy crest"
                    href="https://www.nflsxl.com/51/list.htm"
                    sizeClassName="h-16 w-16 md:h-20 md:w-20"
                  />
                  <div className="text-sm font-semibold text-slate-900">
                    Wasatch Academy Program
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-500 md:text-right">Sep 2018 – Jun 2021</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-4 items-start">
              <div className="flex flex-wrap gap-2">
                <Logo
                  src={`${ASSET_BASE}data/Logo/UCSB.png`}
                  alt="UCSB crest"
                  href="https://www.math.ucsb.edu/"
                  sizeClassName="h-16 w-16 md:h-20 md:w-20"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">University of California, Santa Barbara</div>
                <div className="text-xs text-slate-600">B.S. in Applied Mathematics</div>
                <div className="text-xs text-slate-500 mt-1">
                  Linear Algebra · Numerical Analysis · Real Analysis · Probability and Statistics · Ordinary Differential Equations · Chaotic Dynamics and Bifurcation Theory · Introduction to Differential Geometry · Topology · Graph and Network Theory
                </div>
              </div>
              <div className="text-sm text-slate-500 md:text-right">Sep 2021 – Mar 2025</div>
            </div>
          </div>
        </div>
      </section>

      <section id="industry" className="mb-10 scroll-mt-24 fade-up fade-up-delay-4">
        <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 font-display">Industry Experience</h2>
            <p className="text-sm text-slate-600">Internship experience and applied engineering work.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                  <h4 className="text-lg font-semibold text-slate-900">AI Algorithm Engineer Intern</h4>
                  <p className="text-sm text-slate-600">Wind Information</p>
                  <div className="text-xs text-slate-500 mt-2">Jul 2023 – Sep 2023, May 2025 – Aug 2025</div>
                  <a
                    href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                  >
                    Official Site
                  </a>
                </div>
                <a
                  href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <img
                    src={`${ASSET_BASE}data/Logo/wind.webp`}
                    alt="Wind logo"
                    className="h-20 md:h-24 w-auto object-contain"
                  />
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
                    Performance indicators from production deployment and system validation.
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
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mb-10 scroll-mt-24 fade-up fade-up-delay-5">
        <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 font-display">Research Experience</h2>
            <p className="text-sm text-slate-600">Current research focus and responsibilities.</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                <h4 className="text-lg font-semibold text-slate-900">Research Assistant</h4>
                <p className="text-sm text-slate-600">State Key Lab of CAD & CG, Zhejiang University</p>
                <div className="text-xs text-slate-500 mt-2">Aug 2025 – Present</div>
                <a
                  href="http://www.cad.zju.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-900 transition-colors hover:underline underline-offset-4 mt-2"
                >
                  Lab Site
                </a>
              </div>
              <LogoInline
                src={`${ASSET_BASE}data/Logo/ZJU.jpg`}
                alt="Zhejiang University logo"
                href="http://www.cad.zju.edu.cn/"
                heightClassName="h-20 md:h-28"
              />
            </div>
            <div className="space-y-4">
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
                <li>Research assistantship in CAD & CG Lab with AI focus.</li>
                <li>Explores multimodal systems, long-video understanding, and generative AI.</li>
                <li>Builds data pipelines and evaluation setups for measurable model behavior.</li>
              </ul>

              <div>
                <h5 className="text-sm font-semibold text-slate-900">Selected Metrics</h5>
                <p className="text-sm text-gray-500 mb-4">
                  Experimental results and evaluation indicators from research studies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-bold text-gray-800 flex items-center">
                          <span>ReasonMatch F1 Score</span>
                          <span className="ml-2 text-lg" aria-hidden="true">🏆</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          Top performance on ReasonMatch-Bench, surpassing strong proprietary baselines under the same evaluation.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-4xl font-black text-gray-900 leading-none">70.5</div>
                          <div className="text-xs text-gray-500 mt-1">F1 (Qwen3-VL + DCRL)</div>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                          Best-in-table
                        </span>
                      </div>

                      <div className="mt-5 space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                            <span>This work</span><span>70.5</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="This work F1 70.5">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '100%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                            <span>GPT-5-mini</span><span>57.9</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="GPT-5-mini F1 57.9">
                            <div className="bg-indigo-300 h-2 rounded-full" style={{ width: '82.1%' }} />
                          </div>
                          <div className="text-[11px] text-gray-400 mt-1">Normalized to 70.5 as 100%</div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                            <span>Gemini-2.5-Pro</span><span>42.8</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="Gemini-2.5-Pro F1 42.8">
                            <div className="bg-indigo-200 h-2 rounded-full" style={{ width: '60.7%' }} />
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mt-5">
                        Notes: Values shown as reported under the same benchmark protocol.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                    <div>
                      <h3 className="text-base font-bold text-gray-800 flex items-center">
                        <span>OOD Generalization</span>
                        <span className="ml-2 text-lg" aria-hidden="true">🌍</span>
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Improved out-of-distribution Avg. F1 across 4 datasets (ETH3D, IMC2022/2024, UnrealStereo4K).
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-4xl font-black text-gray-900 leading-none">69.5</div>
                          <div className="text-xs text-gray-500 mt-1">Avg. F1 (OOD)</div>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          +38.8
                          <span className="ml-1" aria-hidden="true">↑</span>
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                          <span>Baseline Avg</span><span>30.7</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="Baseline Avg F1 30.7">
                          <div className="bg-gray-300 h-2 rounded-full" style={{ width: '44.2%' }} />
                        </div>

                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1 mt-4">
                          <span>This work Avg</span><span>69.5</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="This work Avg F1 69.5">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '100%' }} />
                        </div>

                        <div className="text-[11px] text-gray-400 mt-2">
                          Normalized to 69.5 as 100% for visual comparison.
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">ETH3D</span>
                        <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">IMC2022</span>
                        <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">IMC2024</span>
                        <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">UnrealStereo4K</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="text-xs text-gray-400">
                        Takeaway: gains persist under distribution shift, not just on the in-domain benchmark.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                    <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-indigo-100 rounded-full blur-2xl opacity-60" />

                    <div>
                      <h3 className="text-base font-bold text-gray-800 flex items-center">
                        <span>Evaluation Pipeline</span>
                        <span className="ml-2 text-lg" aria-hidden="true">⚙️</span>
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Built reproducible vLLM-based evaluation runners (offline eval + visual audits), enabling scalable model benchmarking.
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-4xl font-black text-gray-900 leading-none">981</div>
                          <div className="text-xs text-gray-500 mt-1">PointArena samples</div>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                          vLLM + offline eval
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                          <span>Accuracy</span><span>68.7%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2" role="img" aria-label="PointArena accuracy 68.7%">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '68.7%' }} />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">Visual audits</span>
                          <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">Runbook</span>
                          <span className="px-2.5 py-1 rounded-full text-xs bg-gray-50 text-gray-600 border border-gray-100">Reproducible</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="text-xs text-gray-400">
                        Tip: If you have multiple runs, consider linking to a short “Methods” modal/page for metric definitions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
