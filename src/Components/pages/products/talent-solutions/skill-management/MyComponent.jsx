import * as React from "react";


function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-white">
        <div className="lg:w-full max-w-3xl lg:mx-auto mt-20 text-center">
          <h1 className="text-[#014D68] text-1xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-[1.145]">
            Unleash Your Organization&apos;s Potential
          </h1>
        </div>
        {/* Features Section */}
        <section className="relative  min-h-screen bg-white lg:overflow-hidden">
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

          <div className="relative lg:z-10 lg:container lg:mx-auto sm:mx-8 px-4 lg:py-12 sm:py-6 lg:py-20">
            {/* Top Row - 3 Cards */}
            <div className="grid lg:px-20 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20">
              {/* Organizational Structure Management */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[260px] lg:max-w-xs lg:mx-auto">
                <div className="text-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5caf76ba7deb5511a51beede5c194597a76873e3"
                    alt="Organizational Structure"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    Skill Database & Repo
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Centralize Your Skill Assets
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Create a single source of truth for all skill-related data. 
                    Store, organize, and manage comprehensive skill records that 
                    serve as the foundation for assessments, learning, and workforce planning.
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
                    Skill Repository
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Your Skills Library, Simplified
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Maintain a structured and searchable library of skills that reflects
                    your organization&rsquo;s evolving competencies. Support better
                    decision-making with clearly defined skill sets.
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
                    Skill Taxonomy Creation
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Structure Your Skill Hierarchy
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Design a multi-level skill classification system. Group related skills into categories to support structured learning, role mapping, and effective talent planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section with Illustration and Dark Container */}
            <div className="flex flex-col lg:mt-0 sm:mt-5 lg:flex-row items-center justify-between gap-8 lg:gap-12">
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
                          Skill Matrix Creation
                        </h3>
                        <h4 className="text-sm font-bold text-black">
                          Visualize Team Competencies
                        </h4>
                        <p className="text-xs font-semibold text-black leading-relaxed">
                          Develop matrices to map individual or team skills against roles or requirements. Easily identify strengths, weaknesses, and areas for development.
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
                          Skill Framework Creation
                        </h3>
                        <h4 className="text-sm font-bold text-black">
                          Blueprint for Skill Development
                        </h4>
                        <p className="text-xs font-semibold text-black leading-relaxed">
                          Build an overarching skill framework aligned with organizational goals. Enable consistent assessment, training, and strategic workforce development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid lg:px-20 mt-10 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-0 lg:mb-20">
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
                   Skill Ontology Creation
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Connect and Contextualize Skills
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Create semantic relationships between skills using ontologies. Understand dependencies and links between capabilities for advanced skill intelligence.
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
                   Skill Mapping
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Align Skills to Roles and Needs
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    Link employee skills with job roles, responsibilities, and organizational needs. Discover overlaps, gaps, and opportunities to optimize your workforce.
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
                    Skill Assessment
                  </h3>
                  <h4 className="text-base font-bold text-black">
                    Measure Capabilities Effectively
                  </h4>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                   Evaluate individual skills through structured assessments, quizzes, and evaluations. Identify proficiency levels to inform growth plans and hiring.


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
                Self Skill Rating
              </h3>
              <h4 className="text-sm font-bold text-black">
                Empower Self-Awareness
              </h4>
              <p className="text-xs font-semibold text-black leading-relaxed">
               Allow employees to self-assess and rate their skills. Promote reflection, initiate development conversations, and support personalized learning journeys.
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
                Self-Assessment
              </h3>
              <h4 className="text-sm font-bold text-black">
                Personalize Growth Initiatives
              </h4>
              <p className="text-xs font-semibold text-black leading-relaxed">
                Provide structured self-assessments to help employees benchmark themselves. Guide future learning and development with self-driven insights.
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

    
      </div>
    </div>
  );
}

export default MyComponent;
