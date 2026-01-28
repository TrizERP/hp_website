import React from "react";


const Second = ({
  title = "Key Features That Drive High-Performing Teams ",
  description = "",
  benefits = [
    {
      category: "Collaboration Pattern Analysis: ",
      description:
        "Identify communication trends, bottlenecks, and top collaborators using interaction heatmaps and frequency insights. ",
    },
    {
      category: "Skill Clustering & Behavioral Frameworks:",
      description:
        "Understand team capabilities and behavioral strengths. Map team compositions for optimal pairing and project fit.",
    },
    {
      category: "Team-Level Dashboards:",
      description:
        " Monitor performance, engagement, and sentiment at the team level. Customize views by department, role, or function.",
    },
    {
      category: "Real-Time Feedback Loops:",
      description:
        " Empower employees to share feedback anytime. Improve culture with transparent and actionable insights. ",
    },
    {
      category: "Leveling & Role Calibration:",
      description:
        "Use skill and behavior metrics to calibrate team levels fairly and transparently. ",
    }
  ],
  imageUrl = "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C180614638-1751628294595-node-3556%3A854-1751628286680.png",
  imageAlt = "Team collaboration workspace with professionals working together",
}) => {
  return (
    <div className="bg-white w-full lg:py-16 sm:py-8 px-16">
      <div className="max-w-7xl lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          {/* Content Section (left on large screens) */}
          <div className="flex-1 max-w-[864px] order-1 lg:order-2">
            {/* Title */}
            <h2 className="font-inter font-bold text-2xl leading-[42px] text-black mb-3">
              {title}
            </h2>

            {/* Description and Benefits */}
            <div className="lg:max-w-[847px]">
              <p className="text-black text-lg font-semibold font-inter leading-7 lg:mb-3 sm:mb-5">
                {description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <p
                    key={index}
                    className="text-black lg:text-lg sm:text-lg font-inter leading-7"
                  >
                    <span className="font-semibold">{benefit.category}</span>
                    <span className="font-normal"> {benefit.description}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section (right on large screens) */}
          <div className="flex-1 max-w-[864px] order-2 lg:order-1">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto lg:max-h-[524px] object-cover opacity-95 border border-[#b3b3b3] rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
