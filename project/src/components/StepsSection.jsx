import React, { useState } from 'react';

const stepsData = [
  {
    id: 1,
    label: "Step1",
    title: "RESEARCH",
    content: "Before we begin, we discuss with you the objectives of your website and perform a detailed research on related websites and competitors...",
  },
  {
    id: 2,
    label: "Step2",
    title: "STRATEGY",
    content: "We work with you to develop a strategy that aligns with your business goals and targets the right audience...",
  },
  {
    id: 3,
    label: "Step3",
    title: "DESIGN",
    content: "Our design team works to create an engaging, visually appealing design that reflects your brand...",
  },
  {
    id: 4,
    label: "Step4",
    title: "DEVELOPMENT",
    content: "Using the latest technology, we build a functional and user-friendly website...",
  },
  {
    id: 5,
    label: "Step5",
    title: "TESTING",
    content: "We thoroughly test the website to ensure it performs well across all devices and browsers...",
  },
  {
    id: 6,
    label: "Step6",
    title: "LAUNCH",
    content: "After final approvals, we launch your website for the world to see...",
  },
];

const StepSection = () => {
  const [activeStep, setActiveStep] = useState(stepsData[0]);

  return (
    <div className="bg-blue-500">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your Digital Frontiers:
        </h2>
        <p className="text-xl  text-white mb-8">
          Exclusive Discounts on Cutting-Edge Website Solutions
        </p>
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">    
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text and Button Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">We’re always ready to help</h3>
            <p className="text-gray-600 mb-4">
              With our staff based in Pakistan, we are able to produce affordable web solutions by cutting costs, saving time, and still keeping high-quality standards...
            </p>
            <button className="bg-black text-white px-6 py-2 rounded">See Our Pricing</button>
          </div>

          {/* Steps Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {stepsData.map((step) => (
                <button
                  key={step.id}
                  className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${
                    activeStep.id === step.id ? "bg-purple-500" : "bg-gray-200"
                  }`}
                  onClick={() => setActiveStep(step)}
                >
                  {step.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg text-center w-full md:w-3/4">
              <h4 className="text-xl font-bold mb-2">{activeStep.title}</h4>
              <p className="text-gray-600">{activeStep.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StepSection;
