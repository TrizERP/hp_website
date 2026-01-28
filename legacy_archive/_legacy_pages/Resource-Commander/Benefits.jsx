import React from 'react';

export default function Index() {
  return (
    <div>
      <section className="w-full bg-[#014D68] py-12 px-4 md:py-16 lg:py-20 xl:py-24 ">
        <div className="max-w-[1800px] lg:mx-40">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Team Photos Grid */}
            {/* Team Photos Grid */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[568px]">
                {/* Top Left */}
                <img
                  src="./Detailes page/image 25.jpg"
                  alt="Smiling team member with dark skin"
                  className="w-full aspect-square object-cover rounded-tl-[76px] rounded-tr-[76px] rounded-br-0 rounded-bl-[76px] border-2 border-white"
                />

                {/* Top Right */}
                <img
                  src="./Detailes page/image 26.jpg"
                  alt="Smiling team member with light skin"
                  className="w-full aspect-square object-cover rounded-tl-[76px] rounded-tr-[73px] rounded-br-[76px] rounded-bl-0 border-2 border-white"
                />

                {/* Bottom Left */}
                <img
                  src="./Detailes page/image 27.jpg"
                  alt="Professional team member in dark clothing"
                  className="w-full aspect-square object-cover rounded-tl-[76px] rounded-tr-0 rounded-br-[76px] rounded-bl-[76px] border-2 border-white"
                />

                {/* Bottom Right */}
                <img
                  src="./Detailes page/image 28.jpg"
                  alt="Team member in light colored sweater"
                  className="w-full aspect-square object-cover rounded-tl-0 rounded-tr-[76px] rounded-br-[76px] rounded-bl-[46px] border-2 border-white"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-white text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="font-prompt text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[50px] font-normal leading-[1.1] mb-8 md:mb-10 lg:mb-12 max-w-[690px]">
                Who Uses Resource Commander? 
              </h1>

              {/* Benefits Container */}
              <div className="relative max-w-[628px]">
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-12">
                  {/* Top Left */}
                  <div className="text-center flex items-center justify-center min-h-[72px] md:min-h-[95px]">
                    <h3 className="font-prompt text-lg md:text-xl lg:text-2xl font-normal leading-tight max-w-[295px]">
                      Schools & Universities managing labs, hostels, AV equipment, libraries
                    </h3>
                  </div>

                  {/* Top Right */}
                  <div className="text-center flex items-center justify-center min-h-[72px] md:min-h-[95px]">
                    <h3 className="font-prompt text-lg md:text-xl lg:text-2xl font-normal leading-tight max-w-[263px]">
                       Corporates & Coworking Spaces optimizing space and asset usage 
                    </h3>
                  </div>

                  {/* Bottom Left */}
                  <div className="text-center flex items-center justify-center min-h-[108px] md:min-h-[120px]">
                    <h3 className="font-prompt text-lg md:text-xl lg:text-2xl font-normal leading-tight max-w-[328px]">
                      Administrative Teams handling logistics, housekeeping, and front-desk 
                    </h3>
                  </div>

                  {/* Bottom Right */}
                  <div className="text-center flex items-center justify-center min-h-[72px] md:min-h-[95px]">
                    <h3 className="font-prompt text-lg md:text-xl lg:text-2xl font-normal leading-tight max-w-[280px]">
                      Institutions needing real-time facility oversight and communication 
                    </h3>
                  </div>
                </div>

                {/* Divider Lines - Desktop Only */}
                <div className="hidden sm:block absolute inset-0 pointer-events-none">
                  {/* Vertical center line */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-full transform -translate-x-1/2">
                    {/* Top part - red (from top to middle) */}
                    <div className="h-1/2 bg-[#FF4E65]"></div>
                    {/* Bottom part - orange (from middle to bottom) */}
                    <div className="h-1/2 bg-[#FF9B00]"></div>
                  </div>

                  {/* Horizontal center line */}
                  <div className="absolute left-0 top-1/2 w-full h-0.5 transform -translate-y-1/2">
                    <div className="flex">
                      {/* Left part - purple */}
                      <div className="w-1/2 h-0.5 bg-[#EE27FF]"></div>
                      {/* Right part - blue */}
                      <div className="w-1/2 h-0.5 bg-[#1657FF]"></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Dividers - Simple lines between items */}
                <div className="sm:hidden">
                  <div className="absolute top-1/3 left-0 w-full h-0.5 bg-benefit-purple transform -translate-y-1/2"></div>
                  <div className="absolute top-2/3 left-0 w-full h-0.5 bg-benefit-orange transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-full max-w-[1400px] h-[314px] flex flex-col justify-center items-center">
            <div className="w-full max-w-[1400px] mb-[113px]">
              <h2 className="font-prompt text-[24px] md:text-[30px] lg:text-[36px] font-bold text-black leading-normal mb-4">
                 Outcomes That Matter
              </h2>
              <p className="font-prompt text-[18px] md:text-[21px] lg:text-[24px] font-normal text-black leading-normal mb-4">
                  50% faster issue resolution. 75% reduction in manual tracking errors. 100% transparency in inventory movement. 1-click reporting for audits, bookings, or maintenance. 
              </p>
              <h3 className="font-prompt text-[18px] md:text-[21px] lg:text-[24px] font-bold text-black">
               Ready to Take Full Command of Your Operations? 
              </h3>
            </div>
            <button className="inline-flex items-center justify-center gap-3 px-4 bg-[#014D68] border border-[#2463EB] rounded-xl text-white font-sans text-[14px] font-bold leading-7 hover:bg-opacity-90 transition-all duration-200 w-[182px] h-11 shrink-0">
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
