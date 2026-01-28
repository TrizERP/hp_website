export default function Index() {
  return (
    <div className="h-fit bg-white text-inter">
      {/* Main Container */}
      <div className="lg:container mx-auto px-6 py-12 lg:py-20">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-1xl md:text-5xl lg:text-3xl font-bold leading-tight">
            <span className="text-[#014D68]">Career Craft</span>
            <br />
            <span className="text-black">
              Embark on a Journey of Excellence
            </span>
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-2 lg:order-1">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Organizational Structure Management
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  A centralized platform to manage your organization’s structure, 
                  skill libraries, and foundational details across departments and units.
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-4 mb-6">
                {/* Organization-Wide Framework */}
                <div>
                  <h3 className="text-brand-gray-dark text-base lg:text-lg font-bold mb-2">
                   • Add Organization Details (Branches, Units, Logo, Address)
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                    Maintain accurate and up-to-date information about your organization’s 
                    physical and structural components. Easily manage branch-level 
                    addresses, logos, and unit hierarchies in one place.
                  </p>
                </div>

                {/* Comprehensive Library */}
                <div>
                  <h3 className="text-brand-gray-dark text-base lg:text-lg font-bold mb-2">
                    • Organization Skill Library (Skill Taxonomy, Import Options)
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed mb-2">
                    Build a dedicated skill repository for your organization. 
                    Define role-based or unit-based skill taxonomies, and 
                    import existing frameworks with flexible options to streamline setup and scalability.
                  </p>
                </div>
              </div>

              {/* Know More Button */}
              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[rgba(1,77,104,0.5)] rounded-lg bg-transparent hover:bg-gray-50 transition-colors duration-200">
                <span className="text-brand-gray text-xs lg:text-base font-bold">
                  Know More
                </span>
              </button>
            </div>
          </div>

         { /* Right Column - Illustration */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/168584975a75f8cf3a7b85a80b4bcda88128d565?width=1480"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
