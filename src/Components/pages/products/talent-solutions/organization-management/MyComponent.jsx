import * as React from "react";


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

function MyComponent() {
  return (
    <>
      <div className="flex items-center px-32 py-20 bg-teal-300 bg-opacity-20 max-md:flex-col max-md:px-5 max-md:pt-5 max-md:pb-6">
        <div className="w-[60%] max-md:w-full">
          <div className="flex z-10 flex-col items-start font-semibold text-black max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch text-5xl leading-tight max-md:text-3xl">
              <span>Empower </span>
              <span className="text-teal-500">Growth</span>
              <span>, Streamline Operations, Redefine </span>
              <span className="text-teal-500">Excellence</span>
            </div>
            <div className="mt-6 text-xl font-medium leading-8 text-black w-[90%] max-md:w-full">
              Empower your workforce with advanced tools for skill development,
              knowledge sharing, and leadership growth to foster a culture of
              continuous innovation and excellence.
            </div>
            <div className="px-6 py-4 mt-6 text-xl leading-none rounded border-gray-300 border-solid cursor-pointer border-[2px] max-md:px-4">
              Explore Services
            </div>
          </div>
        </div>
        <div className="w-[50%] max-md:w-full flex justify-center relative">
          {/* Blurred Background Image */}
          <img
            src="/home_images/Org page images/Orgfirstcomponent.png"
            alt="Blurred background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] w-full h-auto blur-sm opacity-60 z-0"
          />

          {/* Main Foreground Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18051f73bc1c3f1efbf0bf8dcdac0bf552824034?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
            alt="3D business growth rocket illustration"
            className="relative z-10 w-full max-w-[450px] object-contain"
          />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="w-full max-w-3xl mx-auto mt-20 text-center">
          <h1 className="text-[#014D68] text-1xl sm:text-4xl md:text-3xl lg:text-3xl font-bold leading-[1.145]">
            Unleash Your Organization&apos;s Potential
          </h1>
        </div>
        {/* Features Section */}
        <section className="relative min-h-screen bg-white overflow-hidden">
          {/* Curved Background Shape */}
          <div className="absolute inset-0 w-full">
            <svg
              className="absolute bottom-0 left-0 w-full h-auto"
              style={{ height: "min(auto, 701px)" }}
              viewBox="0 0 1440 710"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1920 749H2.92643e-06V697C9.51091e-06 6.10352e-05 1440 749 1440 0.000152588V800Z"
                fill="#BFFFFB"
                stroke="#D5FFFD"
              />
            </svg>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
            {/* Top Row - 3 Cards */}
            <div className="grid px-20 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20">
              {/* Organizational Structure Management */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5caf76ba7deb5511a51beede5c194597a76873e3"
                    alt="Organizational Structure"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    Organizational Structure Management
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Build Your Foundation
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Streamline your organization&apos;s structure with centralized
                    management of branches, units, logos, and addresses. Empower
                    growth with a customizable skill library to define your unique
                    organizational capabilities.
                  </p>
                </div>
              </div>

              {/* Department Management */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b7828136c6d8af1ec5977ca37de021e005a421"
                    alt="Department Management"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    Department Management
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Optimize Team Dynamics
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Optimize departmental operations by managing tasks, skills,
                    and teams. Share customized handbooks and align employees with
                    roles to enhance accountability and collaboration.
                  </p>
                </div>
              </div>

              {/* Organization Certificates */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a5f36a7aa2cbb08449d7441d53e9ff137513f0"
                    alt="Organization Certificates"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    Organization Certificates
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Secure Compliance Repository
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Centralize vital compliance and accreditation documents to
                    meet legal and operational needs effortlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section with Illustration and Dark Container */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Side Illustration */}
              <div className="w-full lg:w-1/3 order-2 lg:order-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6964013091c514f5f7f118882d653045bf3e14a"
                  alt="Office workers collaboration"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>

              {/* Right Side - Dark Container with 2 Cards */}
              <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <div className="bg-[#014D68] rounded-2xl p-6 lg:p-8 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {/* Organization Library */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[180px] max-w-sm mx-auto">
                      <div className="text-center mb-4">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/558641cf3db0d6e88a79ebd1b9ad4cedff406cff"
                          alt="Organization Library"
                          className="w-14 h-14 mx-auto mb-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-black leading-tight">
                          Organization Library
                        </h3>
                        <h4 className="text-sm font-bold text-black">
                          Empower Continuous Learning
                        </h4>
                        <p className="text-xs font-semibold text-black leading-relaxed">
                          Create a unified hub for training materials,
                          assessments, and resources, fostering growth and skill
                          development across teams.
                        </p>
                      </div>
                    </div>

                    {/* Compliance Management */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[180px] max-w-sm mx-auto">
                      <div className="text-center mb-4">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4230591e80bc779b578bc79e4dc242004a57492"
                          alt="Compliance Management"
                          className="w-14 h-14 mx-auto mb-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-black leading-tight">
                          Compliance Management
                        </h3>
                        <h4 className="text-sm font-bold text-black">
                          Ensure Regulatory Excellence
                        </h4>
                        <p className="text-xs font-semibold text-black leading-relaxed">
                          Stay ahead of government and industry compliance
                          standards with automated tracking, updates, and seamless
                          documentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid px-20 mt-10 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20">
              {/* Organizational Structure Management */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="/home_images/Org page images/image 1.png"
                    alt="Organizational Structure"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                   Succession Planning & Performance Management
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Future-Ready Workforce
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Groom leaders and align employee contributions with organizational goals through structured planning and KPI-based appraisals.
                  </p>
                </div>
              </div>

              {/* Department Management */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="/home_images/Org page images/image 2.png"
                    alt="Department Management"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                   KPI & Goal Setting
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Define and Achieve Success
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Set measurable objectives and track progress with clear KPIs and 
                    goal-setting tools to drive organizational achievements.
                  </p>
                </div>
              </div>

              {/* Organization Certificates */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="/home_images/Org page images/image 3.png"
                    alt="Organization Certificates"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    Communication Tools
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Foster Seamless Connections
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Stay connected across teams and stakeholders with integrated email, SMS, WhatsApp, and chatbot solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom Section with Illustration and Dark Container */}
           <div className="w-full px-5 lg:px-20 py-10 bg-white">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
    
    {/* Left Cards Container */}
    <div className="w-full lg:w-2/3">
      <div className="bg-[#014D68] rounded-2xl p-6 lg:p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Reports & Analytics */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm mx-auto">
            <div className="text-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/558641cf3db0d6e88a79ebd1b9ad4cedff406cff"
                alt="Reports & Analytics"
                className="w-14 h-14 mx-auto mb-2 object-contain"
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-base font-bold text-black leading-tight">
                Reports & Analytics
              </h3>
              <h4 className="text-sm font-bold text-black">
                Data-Driven Insights
              </h4>
              <p className="text-xs font-semibold text-black leading-relaxed">
                Access real-time reports and predictive analytics to support informed decision-making and enhance operational efficiency.
              </p>
            </div>
          </div>

          {/* Card 2: Rights Management */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm mx-auto">
            <div className="text-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4230591e80bc779b578bc79e4dc242004a57492"
                alt="Rights Management"
                className="w-14 h-14 mx-auto mb-2 object-contain"
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-base font-bold text-black leading-tight">
                Rights Management
              </h3>
              <h4 className="text-sm font-bold text-black">
                Secure Access, Enhanced Governance
              </h4>
              <p className="text-xs font-semibold text-black leading-relaxed">
                Assign role-based permissions for secure and scalable access to organizational resources and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right-side Image */}
    <div className="w-full lg:w-1/3 flex justify-center">
      <img
        src="/home_images/Org page images/image 4.png"
        alt="Analytics Illustration"
        className="w-full max-w-md"
      />
    </div>
  </div>
</div>
        { /* Benefits Section */}
        <section className="bg-[#E8FAFA] py-16 lg:py-24 px-4 lg:px-28">
  <div className="max-w-[1700px] mx-auto">
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
            <h3 className="text-lg font-bold text-black mb-2 leading-snug">
              {benefit.title}
            </h3>
            <p className="text-sm font-medium text-black leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    
      </div>
    </>
  );
}

export default MyComponent;
