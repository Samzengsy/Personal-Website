import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12 scroll-mt-24">
       <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Me</h2>
       <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 mb-6">
            Looking for opportunities in AI, Computer Vision, and Multimodal Learning?
            <br />
            Feel free to reach out.
          </p>
          <div className="max-w-md mx-auto text-left space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Email</span>
              <a
                href="mailto:zengshenyan0308@163.com"
                className="text-gray-900 font-semibold hover:underline underline-offset-4"
              >
                zengshenyan0308@163.com
              </a>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">WeChat</span>
              <span className="text-gray-900 font-semibold">Zengsy-Sam</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Phone</span>
              <a
                href="tel:+8615951991599"
                className="text-gray-900 font-semibold hover:underline underline-offset-4"
              >
                +86 15951991599
              </a>
            </div>
          </div>
       </div>
    </section>
  );
}
