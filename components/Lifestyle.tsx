import React from 'react';

export const Lifestyle: React.FC = () => {
  const travel = [];
  const photography = [
    { id: '1', src: '/data/joshua-tree.jpg', alt: 'Joshua Tree' },
    { id: '2', src: '/data/yosemite.jpg', alt: 'Yosemite' },
    { id: '3', src: '/data/meteor.jpg', alt: 'Meteor' },
    { id: '4', src: '/data/los-angeles.jpg', alt: 'Los Angeles' }
  ];
  const sports = [];
  const music = [];

  return (
    <section id="life" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifestyle</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Travel</h3>
          {travel.length === 0 ? (
            <div className="min-h-[140px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {travel.map((item, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden">
                  <img src={item} alt="Travel" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Photography</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photography.map((photo) => (
              <div key={photo.id} className="aspect-square rounded-xl overflow-hidden">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sports</h3>
          {sports.length === 0 ? (
            <div className="min-h-[140px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sports.map((item, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden">
                  <img src={item} alt="Sports" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Music</h3>
          {music.length === 0 ? (
            <div className="min-h-[140px] rounded-xl border border-dashed border-gray-200 bg-gray-50" />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {music.map((item, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden">
                  <img src={item} alt="Music" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
