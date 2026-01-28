import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Features Section */}
        <section className="relative min-h-screen bg-white overflow-hidden">
          {/* Curved Background Shape */}
          <div className="lg:flex sm:hidden absolute inset-0 w-full">
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

          <div className="relative z-10 lg:container mx-auto px-4 py-12 lg:py-20">
            {/* Top Row - 3 Cards */}
            <div className="grid llg:px-20 sm:px-8 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20">
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    Manager Skill Validation
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                    Ensure Accuracy & Alignment
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                    Enable managers to validate self-assessments with objective evaluations. Bridge perception gaps and align development goals with business needs.
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    Skill Gap & Analysis
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                    Reveal Development Opportunities
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                   Identify mismatches between current skills and job requirements. Use actionable insights to close skill gaps through learning and hiring.
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                   Learning Paths
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                   Guide Career Progression
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                    Design role-based or skill-based learning paths. Help employees progress through structured, goal-oriented learning experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section with Illustration and Dark Container */}
            <div className="flex flex-col lg:mt-0 sm:mt-5 lg:px-0 sm:px-6 lg:flex-row items-center justify-between gap-8 lg:gap-12">
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
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          Integration with LMS
                        </h3>
                        <h4 className="text-sm font-bold text-gray-900">
                          Connect Learning Ecosystems
                        </h4>
                        <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                          Seamlessly integrate with Learning Management Systems (LMS) to sync skill data, track progress, and streamline employee development.
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
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          Internal Training Programs
                        </h3>
                        <h4 className="text-sm font-bold text-gray-900">
                          Develop Talent from Within
                        </h4>
                        <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                          Build and manage internal training programs aligned to your skill framework. Foster continuous learning and leadership development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid lg:px-20 sm:px-10 lg:mt-10 sm:mt-5 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20 sm:mb-10">
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  Department Skill Management
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                   Customize Skill Oversight
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                    Monitor and manage skills at the department level. Tailor learning paths, assessments, and growth plans to departmental goals.
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                   Department Skill Mapping, Skill Gap Analysis, Department Wide Skill Taxonomy Framework
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                    Elevate Departmental Performance
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                    Implement a structured approach to skill mapping and gap analysis within departments. Design a department-wide taxonomy to align capabilities with objectives.
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
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    Skill Analytics
                  </h3>
                  <h4 className="text-base font-bold text-gray-900">
                   Unlock Skill Intelligence
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                  Gain deep insights into organizational skills through analytics and dashboards. Track trends, identify risks, and optimize talent strategies.
                  </p>
                </div>
              </div>
            </div>


    
      </div>
    </>
  );
}

export default MyComponent;
