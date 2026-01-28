export default function Index() {
  return (
    <div className="h-fit">
      <div className="relative lg:py-20 bg-white lg:mx-20 lg:mb-0 sm:mb-5">
        {/* Top Border Line */}
        <div className="w-full h-0.5 bg-black mb-16"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="font-prompt font-bold text-4xl lg:text-5xl text-black text-center mb-20">
            Key Features
          </h2>

          {/* Feature 1: Automated Payroll & Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Image Container */}
            <div className="relative">
              <div className="w-full max-w-[370px] h-[394px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Decorative Line */}
                <div className="absolute left-2 right-10 top-[350px] h-0.5 bg-black transform rotate-1"></div>
                <div className="absolute left-9 right-10 top-[355px] h-6 bg-yellow-300 border-2 border-black transform rotate-1"></div>
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="./Detailes page/image 1.png"
                    alt="Professional working on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Automated Payroll Processing */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Skill Categories Setup 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                  Group skills by domain, difficulty, function, or learning goal. Customize categories that align with your growth vision. 
                </p>
              </div>

              {/* Compliance & Taxation Management */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                   Skill Relationship Mapping
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Understand how a skill relates to others across departments or roles—enabling smart succession planning, career paths, and upskilling initiatives. 
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Customizable & Self-Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Left Side */}
            <div className="space-y-12 lg:order-1">
              {/* Customizable Salary Structures */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Ready-Made Frameworks 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                  Need a starting point? Use from our curated set of industry-aligned, NEP-ready frameworks to save time and stay future-ready. 
                </p>
              </div>

              {/* Employee Self-Service */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                   Skill Dictionary Builder 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Create your organization&rsquo;s official skills library—standardized, scalable, and smart. 
                </p>
              </div>

              {/* Seamless Integration */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Ontology & Relationship Mapper 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Create a smart network of how skills are interlinked—understand dependencies, build prerequisites, and map future-ready competencies. 
                </p>
              </div>
            </div>

            {/* Image Container - Right Side */}
            <div className="relative lg:order-2">
              <div className="w-full max-w-[368px] h-[400px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="./Detailes page/image 2.png"
                    alt="Professional using technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
