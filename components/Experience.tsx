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
                NFLS Xianlin Campus × Wasatch Academy International Program
              </h3>
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
              <div className="mt-4">
                <ContentPlaceholder />
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
