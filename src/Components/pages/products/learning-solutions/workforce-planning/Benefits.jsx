'use client';

const benefits = [
  {
    title: ' Capacity Optimization',
    description:
      'Forecast shortages and surpluses with AI-based insights, helping balance workloads.',
  },
  {
    title: 'Centralized Role Architecture',
    description:
      'Maintain clear job definitions, responsibilities, and skill expectations across campuses.',
  },
  {
    title: 'Scalable Structure',
    description:
      'Easily adapt org design to new programs, digital initiatives, or multi-campus setups. ',
  },
  {
    title: 'HR + Admin Integration',
    description:
      'Automatically sync workforce plans with recruitment, onboarding, and LMS platforms. ',
  },
];

export default function Index() {
  return (
    <section className="w-full lg:py-16 sm:py-8 px-4 bg-white">
      <div className="max-w-[1440px] lg:mx-20 sm:mx-10">
        <div className="grid lg:grid-cols-[550fr,848fr] gap-8 lg:gap-16 items-start mb-16">
          {/* Left Side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69342154cff746a9e81ec6ef148596373a4eba0?width=1100"
              alt="Integration and connectivity illustration"
              className="w-full max-w-[550px] h-auto"
            />
          </div>

          {/* Right Side - Benefits Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Section Heading */}
            <h2 className="font-inter text-3xl sm:text-2xl md:text-4xl lg:text-[42px] font-bold text-[#014D68] leading-tight lg:leading-[56px] tracking-[-1px] text-center lg:text-left">
              Benefits to Institutions 
            </h2>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {benefits.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-onest text-xl lg:text-[18px] font-bold text-black leading-6">
                    {item.title}
                  </h3>
                  <p className="font-[Verdana] text-lg sm:text-sm lg:text-[18px] text-black leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="text-center">
          <h2 className="font-open-sans text-4xl sm:text-2xl md:text-6xl lg:text-[50px] font-bold text-[#014D68] leading-normal">
           Workforce Planning empowers institutional leaders to not just react but to architect their workforce around purpose, performance, and potential. 
          </h2>
        </div>
      </div>
    </section>
  );
}
