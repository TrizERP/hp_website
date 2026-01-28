'use client';

import React from 'react';

const featureCards = [
  {
    title: 'AI-Powered Skill Inference ',
    description:
      'Automatically detect skills from work history, resumes, task logs, and performance data—no manual tagging needed. Our AI engine spots strengths even your team didn’t know they had.',
  },
  {
    title: 'Central Skills Database',
    description:
      'Maintain a unified, easily searchable repository of all employee skills—updated dynamically. Whether hard or soft, certified or emergent. it is all captured. ',
  },
  {
    title: 'AI Skill Suggestions ',
    description:
      'Employees get personalized upskilling suggestions based on their current roles, performance trends, and future-readiness indicators. ',
  },
  {
    title: 'Skill Matching Tool ',
    description:
      'Quickly align the right talent with the right task. Project leads can filter by required skill sets, certifications, or experience to assemble the perfect team. ',
  },
  {
    title: 'Cross-Platform Skill Mapping ',
    description:
      'Whether from your LMS, ERP, HRMS, or external platforms—Skill Finder integrates and maps skills across systems, eliminating data silos.',
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
              <h1 className="font-jost text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-tight lg:leading-[56px] tracking-[-1px] max-w-[700px]">
                Discover Hidden Talents Within Your Team
              </h1>
              <p className="font-onest text-base md:text-lg lg:text-[18px]  text-black leading-6 max-w-[600px]">
                Unleash the full potential of your workforce with AI-Powered Skill Inference. Skill Finder helps you identify, track, and utilize every employee&rsquo;s capabilities whether visible or latent empowering smarter staffing, agile project planning, and continuous upskilling.
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
                  Get a Free Skill Demo
                </button>
              </div>

              <p className="font-open-sans text-sm text-[#050038] leading-5 max-w-[279px]">
                Trusted by future-forward schools and institutions.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex">
              <div className="relative">
                {/* Wrapper with black border */}
                <div className="border-[12px] border-black rounded-3xl overflow-hidden w-full max-w-[612px]">
                  <img
                    src="/Detailes page/image 29.jpg"
                    alt="Leave & Attendance Management Software Interface"
                    className="w-full h-auto"
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
            Key Features of a Smart Skill Discovery System
          </h2>

          {/* First 3 Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {featureCards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[5px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
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
                className="bg-white rounded-[5px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 w-full max-w-[370px] flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
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
