import React from 'react';

const LogoPlaceholder: React.FC<{ label: string }> = ({ label }) => (
  <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] md:text-xs text-gray-500 text-center px-2">
    {label}
  </div>
);

const ContentPlaceholder: React.FC = () => (
  <div className="min-h-[96px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
);

export const Education: React.FC = () => {
  return (
    <section id="education" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">求学经历</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-wrap gap-3">
              <LogoPlaceholder label="南京外国语学校仙林分校校徽" />
              <LogoPlaceholder label="美国瓦萨琪高中校徽" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                南京外国语学校仙林分校 × 美国瓦萨琪高中合作国际班
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
              <LogoPlaceholder label="UCSB 校徽" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">UCSB</h3>
              <a
                href="https://www.math.ucsb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4 mt-2"
              >
                数学系链接
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
              <LogoPlaceholder label="万得 Logo" />
              <LogoPlaceholder label="ZJU Logo" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Gap</h3>
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
