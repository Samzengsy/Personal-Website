import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12 scroll-mt-24">
       <h2 className="text-2xl font-bold text-gray-900 mb-6">欢迎联系</h2>
       <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 mb-6">
            Looking for opportunities in AI, Computer Vision, and Multimodal Learning? <br/>
            Feel free to reach out via email.
          </p>
          <a 
            href="mailto:zengshenyan0308@163.com"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            发送邮件 / Send Email
          </a>
       </div>
    </section>
  );
}