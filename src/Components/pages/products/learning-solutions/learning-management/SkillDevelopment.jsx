export default function Index() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Main container */}
      <div className="lg:container lg:mx-auto sm:mx-4 px-4 py-12 lg:py-20">
        {/* Hero section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="sm:text-2xl md:text-4xl lg:text-5xl xl:text-3xl font-bold mb-4 lg:mb-6">
            <span className="text-[#014D68] lg:block">
              Empowering Learning Excellence
            </span>
            <span className="text-brand-text text-2xl md:text-3xl lg:text-4xl xl:text-2xl block mt-2">
              Seamless Solutions for Every Stage of Workforce Development
            </span>
          </h1>
        </div>

        {/* Feature cards section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Left card - Skills Development */}
          <div
            className="w-full max-w-lg lg:max-w-sm bg-white rounded-2xl p-6 lg:p-8 shadow-lg flex-1"
            style={{
              boxShadow:
                "-8px -8px 4px 0px rgba(2, 106, 143, 0.25) inset, 4px 4px 4px 0px rgba(2, 106, 143, 0.25) inset",
            }}
          >
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-lg lg:text-xl xl:text-xl font-bold text-[#014D68] leading-tight">
                Skills Development & Reskilling
              </h2>
              <h3 className="text-base lg:text-sm font-bold text-[#1A1A1A]">
                Reskill, Upskill, Futureproof
              </h3>
              <p className="text-sm lg:text-base font-semibold text-[#4D4D4D] leading-relaxed">
                Access a curated course library designed for reskilling and
                upskilling, empowering employees with critical skills to stay
                agile and drive success in a fast-changing market.
              </p>
              <button className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 
              border-2 border-brand-primary/50 rounded-2xl text-lg lg:text-sm font-bold text-brand-button 
              hover:bg-brand-primary/5 transition-colors">
                Know More
              </button>
            </div>
          </div>

          {/* Right card - Training Progress */}
          <div
            className="w-full max-w-lg lg:max-w-sm bg-white rounded-2xl p-6 lg:p-8 shadow-lg flex-1"
            style={{
              boxShadow:
                "4px 4px 4px 0px rgba(2, 106, 143, 0.25) inset, -8px -8px 4px 0px rgba(2, 106, 143, 0.25) inset",
            }}
          >
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-lg lg:text-xl xl:text-xl font-bold text-[#014D68] leading-tight">
                Training Progress & Certification
              </h2>
              <h3 className="text-base lg:text-sm font-bold text-[#1A1A1A]">
                Transparent, Traceable, Accountable
              </h3>
              <p className="text-sm lg:text-base font-semibold text-[#4D4D4D] leading-relaxed">
                Track training progress and manage certifications with accuracy,
                offering a transparent, data-driven learning experience backed
                by performance insights and skill validation.
              </p>
              <button className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 border-2 
              border-brand-primary/50 rounded-2xl text-sm lg:text-sm font-bold text-brand-button hover:bg-brand-primary/5 
              transition-colors">
                Know More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full max-w-md lg:max-w-xs xl:max-w-sm flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a8c7bbb8905fd14031868ff974e9089ced18bd?width=845"
              alt="Learning illustration showing people working with charts and data"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
    {/* Illustration */}
    <div className="lg:col-span-1 flex justify-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/801ec966ba7a75d527bd884d5fdea362b66b2048?width=1000"
        alt="HR Illustration"
        className="w-full max-w-sm"
      />
    </div>

    {/* Cards */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Row 1 */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-semibold text-[#014D68]">Document Management System</h3>
        <p className="text-sm font-medium text-[#1A1A1A] mt-2">Secure Documents, Simplified Access</p>
        <p className="text-sm text-[#4D4D4D] mt-2">
          Securely store, retrieve, and manage employee records while automating reminders for renewals and ensuring data confidentiality and compliance.
        </p>
        <button className="mt-4 bg-[#20CFC6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#17b3ad] transition">
          Know More
        </button>
      </div>

      <div className="bg-[#E8FBFA] rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-semibold text-[#014D68]">Organization Handbook</h3>
        <p className="text-sm font-medium text-[#1A1A1A] mt-2">Your Policies, Always Accessible</p>
        <p className="text-sm text-[#4D4D4D] mt-2">
          Provide employees with a centralized, easy-to-access digital handbook to align them with company policies, values, and procedures.
        </p>
        <button className="mt-4 bg-[#20CFC6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#17b3ad] transition">
          Know More
        </button>
      </div>

      {/* Row 2 */}
      <div className="bg-[#E8FBFA] rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-[#014D68]">Recruitment Platform</h3>
        <p className="text-md font-medium text-[#1A1A1A] mt-2">Hire Smarter, Faster, Better</p>
        <p className="text-sm text-[#4D4D4D] mt-2">
          Streamline hiring with tools for job posting, resume screening, interview management, and pre-assessment.
        </p>
        <ul className="mt-2 space-y-1 text-sm text-[#4D4D4D] font-medium">
          <li>1. Job Posting & Tracking</li>
          <li>2. Resume Screening</li>
          <li>3. Interview Management</li>
          <li>4. Pre-Assessment Tools</li>
        </ul>
        <button className="mt-4 bg-[#20CFC6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#17b3ad] transition">
          Know More
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-[#014D68]">Employee Onboarding</h3>
        <p className="text-md font-medium text-[#1A1A1A] mt-2">Seamless Starts, Stronger Teams</p>
        <p className="text-sm text-[#4D4D4D] mt-2">
          Make new hires feel welcomed with structured onboarding processes, automated document submission, and access to an interactive organization handbook.
        </p>
        <button className="mt-4 bg-[#20CFC6] text-white text-sm px-4 py-2 rounded-md hover:bg-[#17b3ad] transition">
          Know More
        </button>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}
