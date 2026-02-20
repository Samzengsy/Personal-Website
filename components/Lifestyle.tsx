import React from 'react';

export const Lifestyle: React.FC = () => {
  const categories = ['旅行', '摄影', '运动', '音乐'];

  return (
    <section id="life" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">生活掠影</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="min-h-[140px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
          </div>
        ))}
      </div>
    </section>
  );
};
