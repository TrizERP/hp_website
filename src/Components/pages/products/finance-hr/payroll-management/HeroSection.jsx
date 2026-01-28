'use client';

import React from 'react';

export default function Index() {
  return (
    <div className="h-fit bg-[linear-gradient(45deg,_#00678C_0%,_#13354F_50%,_#014D68_100%)] rounded-[30px] flex items-center justify-center overflow-hidden">
      <div className="w-auto">
        <div className="relative rounded-[30px] px-8 md:px-16 lg:px-32 pt-12 md:pt-16 lg:pt-20 pb-0">
          {/* Background Vector/Pattern */}
          <div className="absolute inset-0 opacity-80">
            <img
              src="/home_images/Vector.png"
              alt=""
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Hero Title */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h1 className="text-white font-inter font-bold leading-[1.47] tracking-tight">
                <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-[60px]">
                  Simplify Payroll Processing,
                </span>
                <span className="block text-2xl md:text-4xl lg:text-5xl xl:text-[60px] mt-2">
                  Boost Accuracy, and Stay Compliant
                </span>
              </h1>
            </div>

            {/* Full-Height Platform Screenshot */}
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b6f52df0d9c8d6ce7ea58ca4a1959ee40c8844?width=2848"
                alt="AI-Powered Corporate Recruitment Platform Interface"
                className="w-full max-w-[1424px] h-full object-cover rounded-b-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
