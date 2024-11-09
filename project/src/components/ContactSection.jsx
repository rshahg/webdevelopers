// ContactSection.jsx
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 lg:py-20">        
    <h3 className="text-sm text-black font-semibold tracking-wide uppercase">Contact Us</h3>
    <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
      DROP US A MESSAGE, <span className="text-cyan-600">AND WE’LL BE RIGHT IN TOUCH</span>
    </h2>
    <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-6xl mx-auto px-6 py-12 lg:py-20">
      {/* Left Side - Contact Info */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-4">
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-xl text-gray-700" />
            <p className="text-gray-700 text-lg font-medium">+971 58 231 1276</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-gray-700" />
            <p className="text-gray-700 text-lg font-medium">contact@boostonmarketing.com</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-xl text-gray-700 cursor-pointer hover:text-cyan-600" />
            <FaInstagram className="text-xl text-gray-700 cursor-pointer hover:text-cyan-600" />
            <FaLinkedinIn className="text-xl text-gray-700 cursor-pointer hover:text-cyan-600" />
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2 w-full bg-white">
        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 w-full focus:outline-none focus:border-cyan-600 text-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 w-full focus:outline-none focus:border-cyan-600 text-gray-700"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 w-full focus:outline-none focus:border-cyan-600 text-gray-700"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-3 w-full h-32 resize-none focus:outline-none focus:border-cyan-600 text-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 font-bold rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
