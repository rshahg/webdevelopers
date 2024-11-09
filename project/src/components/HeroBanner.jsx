// HeroBanner.jsx
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-16 px-4">
      {/* Top hashtags */}
      <p className="text-sm font-semibold uppercase tracking-wide mb-4">
        #DigitalTransformation #CreativeDesign #WebExcellence #MobileFriendly
      </p>
      
      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight">
        Building the Digital Future
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mt-2">
        Innovative Website Design and Development Solutions
      </h2>
      
      {/* Subtext */}
      <p className="text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
        BoostOn Marketing is a full service digital agency that sees the whole picture. We understand
        that Web Design is way more than just looking good! We grow businesses and push boundaries by creating
        highly engaging custom websites which yield results. With a blend of our three key strengths of website
        design, web application development, and data analysis, our UI/UX conversion specialists blend our deep
        understanding of modern technology and human behavior to visually communicate the true value of your business.
      </p>
    </section>
  );
};

export default HeroBanner;
