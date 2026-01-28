'use client';

import React from 'react';

const featureCards = [
  {
    title: 'HRIS/ATS Connectors ',
    description:
      'Pre-built integrations with leading HR Information Systems and Applicant Tracking Systems ensure your data flows smoothly no manual syncing required. ',
  },
  {
    title: 'API Hub',
    description:
      'A centralized API management layer allows for plug and play interoperability with your existing LMS, ERP, biometric, finance, or third-party tools. Fast, secure, and future-ready. ',
  },
  {
    title: 'Workflow Builder',
    description:
      'Design workflows without writing a single line of code. Automate approval chains, data transfers, and triggers across systems with drag-and-drop simplicity. ',
  },
  {
    title: 'RPA-Powered Automation Engine ',
    description:
      'Use Robotic Process Automation (RPA) to eliminate repetitive tasks. Auto-generate offer letters, update attendance logs, trigger notifications, and more on autopilot. ',
  },
  {
    title: 'Scenario Modeling & Forecasting ',
    description:
      'Test new workflows and integration scenarios before deployment. Optimize throughput, identify delays, and validate automation impact across functions.',
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full lg:py-12 sm:py-6 lg:mx-20  px-4 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[1627px] lg:mx-auto">
          <div className="grid lg:grid-cols-[700fr,927fr] gap-8 lg:gap-16 items-center min-h-[466px]">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="font-jost text-3xl md:text-4xl lg:text-[48px] font-bold text-hero-dark leading-tight lg:leading-[56px] tracking-[-1px] max-w-[700px]">
                Unite Your Tools. Automate Your Flow.  
              </h1>
              <p className="font-onest text-base md:text-lg lg:text-[18px]  text-hero-secondary leading-6 max-w-[600px]">
               Say goodbye to scattered systems and hello to seamless orchestration. Our System Integration module brings together all your HR, Admin, and ERP systems into a single intelligent ecosystem powered by APIs, automation engines, and smart workflows. 
              </p>

              {/* Form */}
              <div className="space-y-2.5 max-w-[440px]">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full h-12 px-6 py-3 rounded-[32px] border border-hero-border font-inter text-lg text-hero-placeholder placeholder:text-hero-placeholder focus:outline-none focus:ring-2 focus:ring-payroll-teal focus:border-payroll-teal"
                  />
                </div>
                <button className="w-full h-[51px] bg-[#014D68] border border-hero-border rounded-[32px] text-white font-open-sans text-lg font-bold hover:bg-opacity-90 transition-all duration-200">
                  Explore Integration Options
                </button>
              </div>

              <p className="font-open-sans text-sm text-[#050038] leading-5 max-w-[279px]">
               Power productivity, reduce redundancy, and supercharge operations with intelligent, unified infrastructure. 
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex">
              <div className="relative">
                {/* Wrapper with black border */}
                <div className="border-[12px] border-gray rounded-3xl overflow-hidden w-full max-w-[612px]">
                  <img
                    src="/Detailes page/image 41.jpg"
                    alt="Leave & Attendance Management Software Interface"
                    className="w-auto h-auto"
                  />
                </div>

                {/* Shadow effect below the image */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-[#1A1A1A] rounded-2xl blur-[12.5px] opacity-60"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] lg:mx-40 sm:mx-10">
          <h2 className="text-center font-[Verdana] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#20B2AA] leading-tight lg:leading-[56px] tracking-[-1px] mb-12 lg:mb-16">
              Key Features of a Modern System Integration Suite 
          </h2>

          {/* First 3 Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {featureCards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
              >
                <h3 className="font-onest text-xl lg:text-1xl font-bold text-[#014D68] leading-tight tracking-[-0.5px] mb-6 lg:mb-8">
                  {card.title}
                </h3>
                <p className="font-[Verdana] text-base lg:text-[16px] text-[#363636] leading-5 flex-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Last 2 Cards Centered */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
            {featureCards.slice(3).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 w-full max-w-[370px] flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
              >
                <h3 className="font-onest text-xl font-bold text-[#014D68] mb-6 lg:mb-8">
                  {card.title}
                </h3>
                <p className="font-[Verdana] text-base text-[#363636] leading-5 flex-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
