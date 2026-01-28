'use client';

import React from 'react';

const featureCards = [
  {
    title: 'Real-Time Attendance Tracking',
    description:
      'Biometric and facial recognition integration ensures secure, accurate, and real-time attendance logging, preventing proxy attendance or manual errors. GPS-based tracking allows remote and field employees to mark attendance from their designated locations with geo-tagging, providing transparency and accountability.',
  },
  {
    title: 'Self-Service Portal',
    description:
      'The portal allows employees to apply for leave, view leave balances, and track their attendance history in real time. Managers can approve or reject leave requests, access detailed team attendance data, and receive notifications for pending approvals. This reduces the administrative workload on HR teams while improving overall transparency and employee satisfaction.',
  },
  {
    title: 'Customizable Leave Policies',
    description:
      'The system supports multiple leave types such as casual, sick, maternity, and compensatory leave. Leave policies can be customized to align with company rules, probationary restrictions, and labor laws, ensuring compliance and fairness. Features like carry-forward balances and encashment provide flexibility for employees while simplifying leave management for organizations.',
  },
  {
    title: 'Integration with Payroll',
    description:
      'Attendance and leave records are directly linked to the payroll system to automate salary calculations and ensure accuracy. The system processes overtime payments, late penalties, and deductions for unpaid leaves, adhering to company policies and labor law requirements. This eliminates manual errors and simplifies payroll processing for HR teams.',
  },
  {
    title: 'Analytics and Reporting',
    description:
      'Detailed analytics provide insights into attendance patterns, absenteeism rates, and leave utilization, helping managers address workforce issues proactively. Reports on overtime, peak leave periods, and team performance can be generated and exported in multiple formats. These insights enable better decision-making and optimize workforce management.',
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
                Leave & Attendance Management
              </h1>
              <p className="font-onest text-base md:text-lg lg:text-[18px] font-bold text-hero-secondary leading-6 max-w-[600px]">
                Effective leave and attendance management boosts productivity,
                ensures compliance, and enhances employee satisfaction—driving
                organizational success.
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
                  Get Your Free Demo Today!
                </button>
              </div>

              <p className="font-open-sans text-sm text-[#050038] leading-5 max-w-[279px]">
                Collaborate with your team within minutes
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d9df8c1ddb8c82fbf2174fcc3b594c68455f32d?width=1424"
                  alt="Leave & Attendance Management Software Interface"
                  className="w-full max-w-[612px] h-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-[#1A1A1A] rounded-full blur-[12.5px] opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] lg:mx-40 sm:mx-10">
          <h2 className="text-center font-[Verdana] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#20B2AA] leading-tight lg:leading-[56px] tracking-[-1px] mb-12 lg:mb-16">
            Key Features of a Modern Leave & Attendance Management System
          </h2>

          {/* First 3 Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {featureCards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[5px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 h-[350px] flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
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
                className="bg-white rounded-[5px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.18)] p-6 lg:p-8 h-[350px] w-full max-w-[370px] flex flex-col transition-all duration-200 border border-transparent hover:shadow-[0_6px_20px_0_#20B2AA]"
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
