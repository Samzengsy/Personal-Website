import React from 'react';

const Logo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl border border-gray-100 bg-white flex items-center justify-center p-2 shadow-sm">
    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
  </div>
);

const ContentPlaceholder: React.FC = () => (
  <div className="min-h-[96px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              <Logo src="/data/NFLSXL.png" alt="Nanjing Foreign Language School Xianlin Campus crest" />
              <Logo src="/data/Wasatch-Academy.webp" alt="Wasatch Academy crest" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Nanjing Xianlin Foreign Language School × Wasatch Academy International Program
              </h3>
              <a
                href="https://www.nflsxl.com/51/list.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4 mt-2"
              >
                Official Site
              </a>
              <div className="mt-4">
                <ContentPlaceholder />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              <Logo src="/data/UCSB.png" alt="UCSB crest" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">UCSB</h3>
              <a
                href="https://www.math.ucsb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4 mt-2"
              >
                Mathematics Department
              </a>
              <div className="mt-4">
                <ContentPlaceholder />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              <Logo src="/data/wind.webp" alt="Wind logo" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Wind Information</h3>
              <a
                href="https://www.wind.com.cn/portal/en/AboutUs/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4 mt-2"
              >
                Official Site
              </a>
              <div className="mt-6">
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
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              <Logo src="/data/ZJU.jpg" alt="Zhejiang University logo" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Zhejiang University (ZJU)</h3>
              <a
                href="http://www.cad.zju.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4 mt-2"
              >
                State Key Lab of CAD & CG
              </a>
              <div className="mt-4">
                <ContentPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
