import React from "react";


const Second = ({
  title = "Unlock the Benefits",
  description = "Our Leave Management system improves efficiency and employee satisfaction by:",
  benefits = [
    {
      category: "Reducing Administrative Work:",
      description:
        "Automates the entire leave process.",
    },
    {
      category: " Enhancing Transparency:",
      description:
        "Clear visibility for both employees and managers.",
    },
    {
      category: "Ensuring Policy Compliance:",
      description:
        "Adheres to company rules and labor laws.",
    },
    {
      category: "Supporting Workforce Planning:",
      description:
        "Managers can forecast staffing needs better.",
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
