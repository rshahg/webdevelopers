// src/components/HelpSection.jsx
import React from 'react';

const HelpSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold font-poppins mb-4">We’re always ready to help</h2>
          <p className="text-lg font-karla mb-6">
            With our staff based in <strong>Pakistan</strong>, we are able to produce affordable web solutions
            by cutting costs, saving time, and still keeping the high-quality standards. The Internet is the
            global marketplace with widespread exceptional talent where our team has built a reputation for
            delivering surprising work and dedicated services.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition">
            See Our Pricing
          </button>
        </div>

        {/* Right Column - Package Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
          {/* Star Rating */}
          <div className="flex justify-center mb-3">
            <span className="text-yellow-500">★ ★ ★ ★ ★</span>
          </div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Most selling package</h3>
          <h4 className="text-2xl font-bold font-poppins mb-4">Website Design & Development</h4>
          <button className="bg-black text-white py-2 px-6 rounded-md font-semibold mb-3 hover:bg-gray-800 transition">
            Buy Now
          </button>
          <p className="text-lg font-semibold font-poppins">Starts from $99</p>
          <p className="text-sm font-karla text-gray-500 mt-2">
            Get a Free Quote Today and Experience the Difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
