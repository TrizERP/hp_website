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
              What You&rsquo;ll Achieve With This Tool
              </p>

              {/* Main Title */}
              <h2 className="font-urbanist text-3xl sm:text-4xl lg:text-[36px] font-semibold text-course-title leading-tight">
                Managing petty cash is<br/>more than just tracking numbers.
              </h2>

              {/* Description */}
              <p className="font-space-grotesk text-xl lg:text-lg text-course-description font-medium leading-relaxed max-w-[761px]">
                 it&rsquo;s about staying in control, making better financial decisions, and saving time.
Our solution empowers you to:
              </p>

              {/* Course Phases */}
              <div className="space-y-6 lg:space-y-4">
                {/* Phase 1 */}
                <div className="max-w-[707px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-2">
                  Phase 1: Quick & Accurate Expense Logging
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                   Record each expense in seconds with all necessary details.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="max-w-[647px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-1">
                    Phase 2: Proof & Documentation Storage
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                   Attach invoices, bills, or receipts for every transaction.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="max-w-[647px]">
                  <h3 className="font-open-sans text-xl lg:text-[20px] font-bold text-black mb-1">
                  Phase 3: Tracking, Reporting & Insights
                  </h3>
                  <p className="font-open-sans text-lg lg:text-1xl text-black">
                    Monitor spending trends and generate reports to optimize your budget.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-4 py-3 bg-[#014D68] hover:bg-[#013B4D] border border-sales-blue rounded-xl text-white font-inter font-bold text-lg transition-colors duration-200 h-[44px] w-auto">
               Start Managing Expenses Now
              </button>
            </div>
          </div>
        </div>
      </div> 
  );
}
