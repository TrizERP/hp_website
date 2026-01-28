export default function Index() {
  return (
    <div className=" bg-white">
      {/* Skill Development Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side - Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f1c525f8fdbebe46e31670c5cfa73288c719a7?width=1000"
                alt="Skill Development Illustration"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <h2 className="text-skill-heading text-2xl md:text-3xl lg:text-[24px] font-semibold leading-[1.47] font-inter">
                  Skill Development
                </h2>
                <p className="text-skill-description text-base md:text-lg lg:text-[14px] font-semibold leading-[1.47] font-inter">
                  Empower individuals with resources for growth through the
                  Reskilling/Upskilling Course Library, offering courses in
                  Technology, Soft Skills, and more. Advance careers with
                  Leadership Development programs and validate learning with
                  Certification Management, enabling continuous improvement and
                  credibility.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="relative space-y-6 md:space-y-8">
                {/* Reskilling/Upskilling Card */}
                <div className="relative max-w-[500px]">
                  <div
                    className="rounded-[20px] h-[70px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "#FAA9A9",
                      boxShadow: "4px 4px 0px 0px #CF4141",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb84442a7dbdae4cee84241488162b2522d3f18?width=80"
                        alt="Course Library Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-reskill-text text-[#740505] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Reskilling/Upskilling Course Library
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Leadership Development Card */}
                <div className="relative max-w-[450px] ml-auto mr-0 md:ml-48 lg:ml-60">
                  <div
                    className="rounded-[20px] h-[70px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(153, 255, 175, 0.30)",
                      boxShadow: "4px 4px 0px 0px #85EFAC",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b5c91bf93f93fca95eb8aa1263cd2e478ce345d?width=80"
                        alt="Leadership Development Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-leadership-text text-[#16A249] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Leadership Development
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Certification Management Card */}
                <div className="relative max-w-[450px] ml-8 md:ml-16 lg:ml-20">
                  <div
                    className="rounded-[20px] h-[70px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(115, 233, 226, 0.20)",
                      boxShadow: "4px 4px 0px 0px #2CDFD5",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14f9c74e815345ab88e404bbf1e03e853a72dc27?width=80"
                        alt="Certification Management Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-certification-text text-[#0D978F] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Certification Management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Enablement Section */}
      <section
        className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-40"
        style={{ backgroundColor: "rgba(115, 233, 226, 0.10)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <h2 className="text-skill-heading text-2xl md:text-3xl lg:text-[22px] font-semibold leading-[1.47] font-inter">
                  Team Enablement
                </h2>
                <p className="text-skill-description text-base md:text-lg lg:text-[14px] font-semibold leading-[1.47] font-inter">
                  Enhance team performance with Medium-Level Team Development
                  and Junior-Level Team Development, providing essential and
                  foundational skills. Boost sales efficiency with Sales
                  Training, and foster collaboration through Knowledge Sharing &
                  Collaboration for a connected and productive workforce.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="relative space-y-6 md:space-y-8">
                {/* Medium-Level Team Development Card */}
                <div className="relative max-w-[650px] ml-auto mr-0 md:ml-44 lg:ml-48">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "#FAA9A9",
                      boxShadow: "4px 4px 0px 0px #CF4141",
                    }}
                  >
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-skill-reskill-text text-[#740505] text-lg md:text-xl lg:text-[16px] font-semibold leading-[1.47] font-inter">
                        Medium-Level Team Development
                      </h3>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 ml-5 border border-[#740505]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/069f53b7c91e266541e264b31f384740857355c9?width=80"
                        alt="Medium Team Development Icon"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>
                {/* Junior-Level Team Development Card */}
                <div className="relative max-w-[450px]">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(153, 255, 175, 0.30)",
                      boxShadow: "4px 4px 0px 0px #85EFAC",
                    }}
                  >
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-skill-leadership-text text-[#16A249] text-lg md:text-xl lg:text-[16px] font-semibold leading-[1.47] font-inter">
                        Junior-Level Team Development
                      </h3>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 ml-5 border border-[#16A249]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b16c1fe70a93857c9e25e8abb53989122337ac?width=80"
                        alt="Junior Team Development Icon"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>

                

                {/* Sales Training Card */}
                <div className="relative max-w-[400px] ml-8 md:ml-16 lg:ml-28">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(115, 233, 226, 0.20)",
                      boxShadow: "4px 4px 0px 0px #2CDFD5",
                    }}
                  >
                    {/* Text */}
                    <div className="flex-1 text-center">
                      <h3 className="text-skill-certification-text text-[#0D978F] text-lg md:text-xl lg:text-[16px] font-semibold leading-[1.47] font-inter">
                        Sales Training
                      </h3>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 ml-5 border border-[#20B2AA]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2cc1008f3edb53cb17a3e77d034114271673ef3?width=80"
                        alt="Sales Training Icon"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Knowledge Sharing & Collaboration Card */}
                <div className="relative max-w-[500px] ml-auto mr-0 md:ml-56 lg:ml-40">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(255, 238, 144, 0.50)",
                      boxShadow: "4px 4px 0px 0px #FB923C",
                    }}
                  >
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-skill-knowledge-text text-[#FB923C] text-lg md:text-xl lg:text-[16px] font-semibold leading-[1.47] font-inter">
                        Knowledge Sharing & Collaboration
                      </h3>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 ml-5 border border-[#FB923C]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8719844ca2dee27d33eb3b0128fb00145ae2a0c?width=80"
                        alt="Knowledge Sharing Icon"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4821036edd0b29276a64006bdb4d555a544131?width=1000"
                alt="Team Enablement Illustration"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Talent Optimization Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side - Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40de57d8e5fe1df3bb334e65d213d23bf297af08?width=1295"
                alt="Talent Optimization Illustration"
                className="w-full max-w-[648px] h-auto object-contain"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <h2 className="text-skill-heading text-2xl md:text-3xl lg:text-[22px] font-semibold leading-[1.47] font-inter">
                  Talent Optimization
                </h2>
                <p className="text-skill-description text-base md:text-lg lg:text-[14px] font-semibold leading-[1.47] font-inter">
                  Optimize workforce management with Training Progress Tracking
                  for real-time insights and Compliance Training for legal
                  adherence. Use Talent Pool Management to nurture top
                  performers and Talent Assessment to monitor and enhance skills
                  with AI-driven analytics.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="relative space-y-6 md:space-y-8">
                {/* Training Progress Tracking Card */}
                <div className="relative max-w-[500px] ml-8 md:ml-12 lg:ml-8">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "#FAA9A9",
                      boxShadow: "4px 4px 0px 0px #CF4141",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[#740505]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cdbaf8f54b5e34e18ccc05f9be10bc730729bfe?width=80"
                        alt="Training Progress Tracking Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-reskill-text text-[#740505] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Training Progress Tracking
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Compliance Training Card */}
                <div className="relative max-w-[450px] ml-auto mr-0 md:ml-72 lg:ml-64">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(153, 255, 175, 0.30)",
                      boxShadow: "4px 4px 0px 0px #85EFAC",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[#16A249]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3724f9194e897db5b2522d3f0182c835084f1b3c?width=80"
                        alt="Compliance Training Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-leadership-text text-[#16A249] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Compliance Training
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Talent Pool Management Card */}
                <div className="relative max-w-[450px] ml-auto mr-0 md:ml-44 lg:ml-45">
                  <div
                    className="rounded-[20px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(115, 233, 226, 0.20)",
                      boxShadow: "4px 4px 0px 0px #2CDFD5",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[#20B2AA]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a74ac8b3ab746204fc75b98ccf34cb899c8ea2?width=80"
                        alt="Talent Pool Management Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-certification-text text-[#0D978F] text-lg md:text-xl lg:text-[18px] font-semibold leading-[1.47] font-inter">
                        Talent Pool Management
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Talent Assessment Card */}
                <div className="relative max-w-[550px] md:ml-44 lg:ml-0">
                  <div
                    className="rounded-[26px] h-[60px] flex items-center px-5 relative"
                    style={{
                      backgroundColor: "rgba(255, 238, 144, 0.50)",
                      boxShadow: "4px 4px 0px 0px #FB923C",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[#FB923C]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38790bcf0e2e45c3e8621ac2444869f69a5d4ff5?width=80"
                        alt="Talent Assessment Icon"
                        className="w-10 h-10"
                      />
                    </div>

                    {/* Text */}
                    <div className="ml-5 flex-1">
                      <h3 className="text-skill-knowledge-text text-[#FB923C] text-lg md:text-xl lg:text-[17px] font-semibold leading-[1.47] font-inter">
                        Talent Assessment for Skill Upgradation/Degradation
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
