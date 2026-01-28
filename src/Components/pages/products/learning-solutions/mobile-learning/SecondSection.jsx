const features = [
  {
    title: "Mobile-First Experience",
    description:
      "Courses are designed to work seamlessly on any smartphone, ensuring an intuitive, clutter-free learning journey.",
    icon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e34d5eeb5310252f06c84cfb1e3a1617c28069a3?width=100",
  },
  {
    title: "Offline Mode (No Internet Needed)",
    description:
      "Download courses and learn offline perfect for remote regions, travel, or limited connectivity zones. ",
    icon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/18d08cc37dc693d55e86c5d519c13c6b8e141432?width=100",
  },
  {
    title: "WhatsApp Reminders",
    description:
      "Get timely nudges, assignment alerts, and learning progress updates via WhatsApp for consistent engagement",
    icon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/af0e0d5348860f31354f976926d0ae3b7b5921a9?width=100",
  },
  {
    title: "Voice Note Learning",
    description:
      "Short, engaging voice lessons available for on-the-go revision or hands-free learning, even offline.",
    icon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6262300b6b3f871e6d7fd33f9022bcc71bda4e8a?width=100",
  },
  {
    title: "Interactive Microlearning",
    description:
      "Bite-sized, mobile-friendly content to keep learners focused, engaged, and moving forward.",
    icon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/18d08cc37dc693d55e86c5d519c13c6b8e141432?width=100",
  },
];

export default function Index() {
  return (
    <div className="h-fit mt-20">
      {/* Second Section */}
      <div className="bg-[rgba(115,233,226,0.15)] py-16 lg:py-26">
        <div className="max-w-[1505px] lg:mx-40 px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 lg:mb-22">
            <h2 className="font-urbanist text-2xl sm:text-3xl lg:text-[34px] font-semibold text-sales-primary leading-[55.2px]">
              Why Choose Our Mobile Learning Module?
            </h2>
          </div>

          {/* Features Grid */}
          <div className="space-y-16 lg:space-y-24">
            {/* First Row - 3 items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {features.slice(0, 3).map((feature, index) => (
                <div className="flex gap-4" key={index}>
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-[50px] h-[50px] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-xl lg:text-1xl font-bold text-feature-title mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-fredoka text-lg lg:text-lg text-feature-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {features.slice(3).map((feature, index) => (
                <div className="flex gap-4" key={index + 3}>
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-[50px] h-[50px] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-xl lg:text-1xl font-bold text-feature-title mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-fredoka text-lg lg:text-lg text-feature-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
