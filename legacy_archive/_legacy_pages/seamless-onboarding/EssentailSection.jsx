export default function Index() {
  return (
     <section className="w-full lg:py-14 lg:px-16 sm:px-8 bg-white ">
        <div className="max-w-[1440px]">
          {/* Main Heading */}
          <h2 className="font-[Verdana] ml-6 text-3xl text-center sm:text-2xl md:text-4xl lg:text-[48px] font-bold text-[#20B2AA] leading-tight lg:leading-[54px] tracking-[-1px] mb-12 lg:mb-16 max-w-[1440px]">
            Why Fast, Friendly Onboarding Matters 
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
            <button className="flex items-center justify-center px-4 py-3 rounded-3xl border border-[#E7F8FF] bg-[#E5FFFE] text-[#050038] font-open-sans text-lg leading-5">
              Faster Productivity
            </button>
            <button className="flex items-center justify-center px-4 py-3 rounded-3xl border border-[#F2F2F2] bg-white text-[#050038] font-open-sans text-lg leading-5 hover:border-[#E7F8FF] hover:bg-[#E5FFFE] transition-all duration-200">
              Stronger Culture Fit 
            </button>
            <button className="flex items-center justify-center px-4 py-3 rounded-3xl border border-[#F2F2F2] bg-white text-[#050038] font-open-sans text-lg leading-5 hover:border-[#E7F8FF] hover:bg-[#E5FFFE] transition-all duration-200">
              Risk-Free Compliance
            </button>
            <button className="flex items-center justify-center px-4 py-3 rounded-3xl border border-[#F2F2F2] bg-white text-[#050038] font-open-sans text-lg leading-5 hover:border-[#E7F8FF] hover:bg-[#E5FFFE] transition-all duration-200">
              Better First Impressions
            </button>
          </div>

          {/* Content Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:mx-20 sm:mx-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="font-onest text-2xl lg:text-[28px] font-medium text-[#0B2131] leading-normal">
              One Dashboard. Zero Confusion. 
              </h3>
              <p className="font-[Verdana] text-lg lg:text-[22px] text-[rgba(5,0,56,0.7)] leading-normal max-w-[400px]">
                HRs and admins can track joining status, task completions, pending documents, and team assignments all from one clean interface. No more email chasing or spreadsheet chaos. 
              </p>
              <a
                href="#"
                className="inline-block font-open-sans text-lg text-[#20B2AA] leading-6 hover:underline transition-all duration-200"
              >
               Request a Demo →
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="./Detailes page/image 37.jpg"
                alt="Brainstorming session showing team collaboration"
                className="w-full max-w-[750px] h-auto border-[10px] border-black rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
