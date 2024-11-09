// CardSection.jsx
import React from 'react';

const services = [
  { icon: '⚙️', title: 'Website Design & Development' },
  { icon: '📧', title: 'Branding, UI/UX & Marketing' },
  { icon: '🔗', title: 'API Integrations' },
  { icon: '🛒', title: 'E-Commerce Website Development' },
  { icon: '🔧', title: 'Website Support & Maintenance' },
  { icon: '🔍', title: 'Digital Marketing & SEO / SMM' },
];

const CardSection = () => {
  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">TOP RATED SERVICE AGENCY</h2>
      <h1 className="text-3xl font-bold text-blue-500 mt-2">
        The services offered by our trusted digital agency
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-0 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
