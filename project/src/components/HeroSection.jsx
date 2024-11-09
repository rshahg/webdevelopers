// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center text-white py-20" style={{ backgroundImage: 'url(/src/assets/background.jfif)' }}>
      <div className="text-center px-4 max-w-3xl mx-auto">
        <p className="text-lg font-karla uppercase mb-4 tracking-wider">
          Website Design & Development | UI/UX Design | Support & Maintenance
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          Elevate Your Presence with Us, We Craft Stunning Websites that <span className="text-blue-400">Captivate and Convert!</span>
        </h1>
        <button className="mt-6 bg-black bg-opacity-75 py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-500 transition">
          Our Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
