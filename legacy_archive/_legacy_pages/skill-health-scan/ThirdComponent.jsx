export default function Index() {
  return (
    <div className="h-fit">
      <div className="relative lg:py-20 bg-white lg:mx-20 lg:mb-0 sm:mb-5">
        {/* Top Border Line */}
        <div className="w-full h-0.5 bg-payroll-dark mb-16"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="font-prompt font-bold text-4xl lg:text-5xl text-payroll-teal text-center mb-20">
            Key Features
          </h2>

          {/* Feature 1: Automated Payroll & Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Image Container */}
            <div className="relative">
              <div className="w-full max-w-[370px] h-[394px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Decorative Line */}
                <div className="absolute left-2 right-10 top-[350px] h-0.5 bg-payroll-dark transform rotate-1"></div>
                <div className="absolute left-9 right-10 top-[355px] h-6 bg-yellow-300 border-2 border-payroll-dark transform rotate-1"></div>
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="./Detailes page/image 16.jpg"
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
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-payroll-dark mb-4">
                  AI-powered resume screening 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                  Saves 80% time in initial candidate shortlisting 
                </p>
              </div>

              {/* Compliance & Taxation Management */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-payroll-dark mb-4">
                   Skills-first hiring framework
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Ensures job-readiness, not just paper credentials 
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
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-payroll-dark mb-4">
                 Built-in assessment library
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Evaluate candidates with preloaded tests 
                </p>
              </div>

              {/* Employee Self-Service */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-payroll-dark mb-4">
                   Video interviewing tools
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                 Reduce bias, increase speed 

                </p>
              </div>

              {/* Seamless Integration */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-payroll-dark mb-4">
                 Deep integration with ERP & LMS 
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-gray-600 leading-relaxed">
                Aligns hiring with internal skill needs  
                </p>
              </div>
            </div>

            {/* Image Container - Right Side */}
            <div className="relative lg:order-2">
              <div className="w-full max-w-[368px] h-[400px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="./Detailes page/image 17.jpg"
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
