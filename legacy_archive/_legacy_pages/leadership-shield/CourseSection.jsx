export default function Index() {
  return (   
    <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1561px] lg:mx-20 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
            {/* Left Images */}
            <div className="relative w-full lg:w-[700px]">
              {/* Top row images */}
              <div className="flex gap-4 lg:gap-7 mb-4 lg:mb-7">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97676c8645e39ed000b29fa6345f93a97028bbb6?width=671"
                  alt="Sales training session"
                  className="w-full lg:w-[300px] h-[200px] lg:h-[288px] object-cover rounded-lg"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be6f186c12c4239680df9a60ffcbaf1bd6cf7d6e?width=671"
                  alt="Business meeting"
                  className="lg:flex sm:hidden w-full lg:w-[300px] h-[200px] lg:h-[269px] object-cover rounded-lg mt-0 lg:mt-[20px]"
                />
              </div>

              {/* Bottom large image */}
              <div className="lg:ml-[29px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f7abedf9dfe48ebb4d1464b22ca8adfb075500f?width=1285"
                  alt="Team collaboration"
                  className="w-full lg:w-[600px] h-[200px] lg:h-[307px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 lg:space-y-6">
              {/* Section Header */}
              <p className="font-urbanist text-lg lg:text-sm font-semibold text-[#026A8F] uppercase tracking-wider">
                What You&rsquo;ll Achieve with Leadership Shield
              </p>

              {/* Main Title */}
              <h2 className="font-urbanist text-3xl sm:text-4xl lg:text-[36px] font-semibold text-course-title leading-tight">
                Future-Proof Your Organization
                with Leadership Intelligence 
              </h2>

              {/* Course Phases */}
              <div className="space-y-6 lg:space-y-4">
                {/* Phase 1 */}
                <div className="max-w-[707px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-2">
                  Phase 1: Analyze Leadership Gaps
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                    Pinpoint roles at risk due to retirement, attrition, or lack of successors. Gain visibility into where urgent succession planning is needed.  
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="max-w-[647px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-1">
                    Phase 2: Identify High Potentials (HiPos) 
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                   Use data-driven tools and behavioral benchmarks to identify emerging leaders who align with your organization&rsquo;s mission, vision, and values. 
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="max-w-[647px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-1">
                  Phase 3: Simulate Bench Strength
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                    Visualize potential successors for every critical role. Run what-if simulations to measure leadership depth and develop contingency plans.  
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-4 py-3 bg-[#014D68] hover:bg-[#013B4D] border border-sales-blue rounded-xl text-white font-inter font-bold text-lg transition-colors duration-200 h-[44px] w-[224px]">
                Get Your Course Now!
              </button>
            </div>
          </div>
        </div>
      </div> 
  );
}
