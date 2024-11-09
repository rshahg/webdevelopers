// TestimonialSection.jsx
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "BoostOn Marketing helped us launch our new digital marketing campaign, and the results have been fantastic! Their expertise in SEO and social media strategy really boosted our online presence. My only wish is that their project timelines were a bit quicker, but the quality is definitely worth the wait.",
    author: "James T",
  },
  {
    text: "As a startup, we needed comprehensive services, and BoostOn delivered! From graphic design to full-stack development, they handled everything seamlessly. Their project manager kept us updated every step of the way, making the process smooth and stress-free. Will definitely work with them again!",
    author: "Emily",
  },
  {
    text: "Working with BoostOn Marketing was a game-changer for our business! Their Bubble IO development skills are exceptional, allowing us to launch our app quickly and efficiently. The team is friendly, professional, and always willing to go the extra mile. I can't recommend them enough.",
    author: "Jacob",
  },
  {
    text: "We are beyond impressed with the level of service from BoostOn Marketing. They have been incredibly responsive, innovative, and professional throughout our project.",
    author: "Anna R",
  },
  {
    text: "The team at BoostOn Marketing truly understood our brand and brought it to life. We are thrilled with the results and will definitely continue working with them.",
    author: "Michael P",
  },
  {
    text: "BoostOn's attention to detail and commitment to excellence made our collaboration effortless. They brought our vision to life, and we couldn't be happier with the outcome!",
    author: "Sarah W",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerSlide >= testimonials.length ? 0 : prevIndex + testimonialsPerSlide
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Automatically move every 10 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-center text-gray-800 font-semibold uppercase mb-2">
        Born with Creativity, Develop with Passion
      </h3>
      <h2 className="text-center text-cyan-600 text-2xl font-bold mb-6">
        What our clients say about our great work.
      </h2>
      <div className="relative flex items-center">
        <button onClick={() => setCurrentIndex(currentIndex - testimonialsPerSlide < 0 ? testimonials.length - testimonialsPerSlide : currentIndex - testimonialsPerSlide)} className="absolute left-0 text-2xl p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
          &#10094;
        </button>
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center w-full space-x-4">
            {testimonials.slice(currentIndex, currentIndex + testimonialsPerSlide).map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-300 rounded-lg shadow-md w-1/3 mx-2"
              >
                <p className="text-gray-700 text-center mb-4">{testimonial.text}</p>
                <p className="text-gray-900 font-semibold text-center">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-2 mt-4">
            {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerSlide) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * testimonialsPerSlide)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index * testimonialsPerSlide ? 'bg-cyan-600' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
        <button onClick={() => setCurrentIndex(currentIndex + testimonialsPerSlide >= testimonials.length ? 0 : currentIndex + testimonialsPerSlide)} className="absolute right-0 text-2xl p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
