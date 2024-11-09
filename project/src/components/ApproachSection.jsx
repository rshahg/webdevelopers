// ApproachSection.jsx
import React from 'react';

const ApproachSection = () => {
  return (
    <section className="bg-white py-16 px-6 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
      {/* Left side content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
        <p className="text-gray-700 mb-4">
          At BoostOn Marketing, we like working together as a team to come up with really good solutions. We want to do our best all the time, and that’s really important to us. We’re proud of making plans that are not normal – they’re extra special and made just for what you need.
        </p>
        <p className="text-gray-700 mb-6">
          It’s like we’re always thinking of new and better ways to help you out. We believe in using our teamwork skills to make things great, and we never settle for just okay. Our goal is to make unique strategies that fit exactly what you’re looking for.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold">
          Learn More
        </button>
      </div>

      {/* Right side steps */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <div className="bg-white text-yellow-500 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md">
            01
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Research and Wireframing</h3>
            <p className="text-gray-700">
              We check goals, study competitors, update content, and use Adobe XD to show how your website will look.
            </p>
          </div>
        </div>

        <div className="bg-blue-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <div className="bg-white text-blue-500 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md">
            02
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Design and Development</h3>
            <p className="text-gray-700">
              Design approved, skilled developers build your website, while you track progress through provided online link.
            </p>
          </div>
        </div>

        <div className="bg-green-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <div className="bg-white text-green-500 font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md">
            03
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Launch the Product</h3>
            <p className="text-gray-700">
              Once the website is done, we help decide where it goes online and can also help you reach people, including using marketing if you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
