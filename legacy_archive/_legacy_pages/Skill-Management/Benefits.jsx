import React from 'react';
const benefits = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e716e8366bb4be2901dceb27117e523af6dc95c",
      circleColor: "bg-benefits-green",
      title: "Enhanced Efficiency and Time Savings",
      description:
        "Automate repetitive HR tasks, reducing errors and freeing up valuable time for strategic activities.",
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1734efb0847dc566613cccbbb0fea0a58815df77",
      circleColor: "bg-benefits-yellow",
      title: "Streamlined Workforce Management",
      description:
        "Manage payroll, leave, recruitment, and assessments seamlessly in one unified platform for better organization and control",
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/987e028fa12676bbb01cc341a7aee4983327c16f",
      circleColor: "bg-benefits-blue",
      title: "Data-Driven Decision Making",
      description:
        "Leverage powerful analytics to gain actionable insights, ensuring accurate and informed decisions.",
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/58aeddab93b92fee63413ee240855d6773f7e4a2",
      circleColor: "bg-benefits-pink",
      title: "Improved Employee Experience",
      description:
        "Provide employees with transparent systems and efficient processes, boosting satisfaction and productivity.",
    },
  ];
export default function Index() {
  return (
<section className="bg-[#E8FAFA] lg:mb-0 sm:mb-5 py-16 lg:py-16 px-4 lg:px-28">
  <div className="max-w-auto mx-auto">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-12">
      <span className="text-lg font-bold text-[#00818A] uppercase">Your Benefits</span>
      <div className="w-20 h-px bg-[#00818A]"></div>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="bg-white rounded-[40px_0px] p-6 flex flex-col shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Icon Container */}
          <div className="mb-6">
            <div
              className={`w-[80px] h-[80px] rounded-full ${benefit.circleColor} flex items-center justify-center`}
            >
              <img
                src={benefit.icon}
                alt=""
                className="w-[50px] h-[50px] object-contain"
              />
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
              {benefit.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    );
}
