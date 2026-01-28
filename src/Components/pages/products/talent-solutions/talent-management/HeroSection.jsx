export default function Index() {
  return (
    <div
      className="h-fit relative overflow-hidden"
      style={{ backgroundColor: "rgba(115, 233, 226, 0.2)" }}
    >
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        {/* Image Section */}
        <div className="relative z-0 w-full flex justify-center lg:absolute lg:right-0 lg:top-0 lg:w-full lg:h-screen lg:flex lg:justify-end lg:items-center pointer-events-none">
          {/* Background Blur Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa0cabd141a36cd0f3f1a302745a62f91024b405?width=1640"
            alt="Background illustration"
            className="w-[300px] h-[260px] lg:w-[760px] lg:h-[400px] blur-[15px] opacity-30 lg:flex sm:hidden"
          />
          {/* Foreground Main Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47860a16abaea72bb943c43a58d3eab196307fe6?width=904"
            alt="HR Management Illustration"
            className="w-[220px] h-[200px] lg:w-[400px] lg:h-[350px] lg:absolute lg:right-24"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 px-6 lg:px-[150px] pt-20 lg:pt-20 pb-16">
          <div className="max-w-[851px] mx-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold leading-tight lg:leading-[89px] mb-8 lg:mb-12">
              <span className="text-[#12141D]">
                Smart Talent Management <br />
                for{" "}
              </span>
              <span className="text-teal-500">Hiring</span>
              <span className="text-[#12141D]"> & </span>
              <span className="text-teal-500">Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-[22px] text-[#12141D] opacity-80 leading-relaxed lg:leading-8 tracking-wide mb-12 lg:mb-16 max-w-[696px]">
              Recruit smarter, boost performance, and build future-ready teams
              with our scalable HR solution—trusted by companies across
            </p>

            {/* CTA Button */}
            <div className="inline-block px-6 py-2 mt-6 text-base font-bold text-black border border-gray-300 rounded-md border-[2px]">
              Explore Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
