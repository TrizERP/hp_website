import React from "react";


const BenefitsSection = ({
  title = "Essential Features for Smarter Team Development ",
  features = [
    {
      title: "Real-Time Skill Mapping",
      description:
        "Visual dashboards show live data on skills aligned to roles, departments, and future needs.",
    },
    {
      title: "Role-Based Benchmarks ",
      description:
        "Set and compare against predefined skill benchmarks tailored to each role. ",
    },
    {
      title: "Gap Identification Engine",
      description:
        "AI-driven analytics pinpoint skill gaps by role, team, and function. ",
    },
    {
      title: "Training Recommendations",
      description:
        "Auto-suggest learning paths to bridge identified gaps and upskill strategically.",
    },
    {
      title: "Department Skill Gaps Overview",
      description:
        " Department-wise breakdowns help prioritize development areas and allocate resources.",
    },
    {
      title: "Customizable Scoring Models",
      description:
        "Define how skills are scored—by experience, proficiency, or learning completion.",
    },
  ],
  imageUrl = "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C180614638-1751629387510-node-3553%3A770-1751629379056.png",
  imageAlt = "Document management workspace showing hands typing on a laptop",
}) => {
  return (
    <div className="bg-white w-full lg:py-16 sm:py-8 px-4 lg:px-16">
      <div className="max-w-7xl lg:mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Image Section */}
        <div className="flex-1 max-w-[450px] relative order-2 lg:order-1">
          {/* Blur Background */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] -z-10">
            <div className="absolute inset-0 bg-[#20b2aa]/40 rounded-full blur-[195px]"></div>
            <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[85px]"></div>
          </div>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-[450px] h-[450px] object-cover opacity-95 border border-[#b3b3b3] rounded-sm"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 lg:max-w-[864px]">
          {/* Title */}
          <h2 className="font-inter font-bold lg:text-3xl sm:text-2xl leading-[42px] text-[#014c68] mb-10">
            {title}
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => {
              const isTopRow = index < 3;
              const titleSize = isTopRow ? "text-[20px]" : "text-[18px]";
              return (
                <div key={index} className="flex flex-col gap-2.5">
                  <h3
                    className={`font-inter font-semibold ${titleSize} leading-7 text-black lg:max-w-[240px]`}
                  >
                    {feature.title}
                  </h3>
                  <p className="font-inter font-normal text-[18px] leading-7 text-black lg:max-w-[276px]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
