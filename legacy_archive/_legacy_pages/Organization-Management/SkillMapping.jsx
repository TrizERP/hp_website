import React from 'react';
export default function Index() {
  return (
        <div className="h-fit bg-white text-inter">
      {/* Main Container */}
      <div className="lg:container mx-auto px-6 py-12 lg:py-20">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-2 lg:order-2">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Department Management
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  Enable structured and scalable department-level operations with centralized tools 
                  to manage teams, tasks, and capabilities efficiently.
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-4 mb-6">
                {/* Organization-Wide Framework */}
                <div>
                  <h3 className="text-[#1A1A1A] text-base lg:text-lg font-bold mb-2">
                   • Add Department Details (Teams, Tasks, Skills, Settings)
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                   Define and manage department-specific teams, assign tasks, associate 
                   skills, and configure custom settings to suit each department’s goals and workflows.
                  </p>
                </div>

                {/* Comprehensive Library */}
                <div>
                  <h3 className="text-[#1A1A1A] text-base lg:text-lg font-bold mb-2">
                    • Department Handbook with Sharing Facility
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed mb-2">
                   Create a digital handbook for each department containing guidelines, policies, 
                   team structures, and responsibilities. Enable internal or cross-department sharing to support alignment.
                  </p>
                  <h3 className="text-[#1A1A1A] text-base lg:text-lg font-bold mb-2">
                    • Task, Skill, and Employee Mapping (Department-Wise)
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed mb-2">
                    Link tasks and required skills to employees at the department level. 
                    Identify skill gaps, streamline assignments, and align departmental capacity with organizational objectives.
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
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img
                src="./home_images/Skill Page images/image 1.png"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto px-6 py-12 lg:py-20">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-2 lg:order-1">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Compliance Management
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  Ensure your organization meets essential legal, regulatory, and 
                  industry-specific compliance standards with a structured and auditable approach.
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-4 mb-2">
                {/* Organization-Wide Framework */}
            
                  <h3 className="text-[#1A1A1A] text-base lg:text-lg font-bold">
                   • Government & Industry Compliance
                  </h3>
                  <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                   Manage mandatory compliance requirements such as labor laws, industry 
                   certifications, safety standards, and government regulations. 
                   Track, document, and stay updated with compliance obligations across departments.
                  </p>
              </div>

              {/* Know More Button */}
              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[rgba(1,77,104,0.5)] rounded-lg bg-transparent hover:bg-gray-50 transition-colors duration-200">
                <span className="text-brand-gray text-xs lg:text-base font-bold">
                  Know More
                </span>
              </button>
            </div>
            <div className="bg-[rgba(32,207,198,0.08)] mt-2 rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Organization Handbook
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  The Organization Handbook for K–12 institutions is a centralized digital 
                  guide covering school policies, curriculum standards, and operational 
                  procedures. It includes academic, administrative, and safety protocols 
                  aligned with NEP 2020 and CBSE/State Boards, with role-based access for 
                  teachers, students, and parents to ensure clarity and compliance.
                </p>
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
                src="./home_images/Skill Page images/image 2.png"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-[90%] h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Second Section - Compliance Management */}
        <div className="grid lg:grid-cols-2 gap-12 mt-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-1 lg:order-2">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Front Desk Operations
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  Manage visitor logs, appointments, and general inquiries with a 
                  centralized system that ensures smooth and professional front office workflows.
                </p>
              </div>
              {/* Know More Button */}
              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[rgba(1,77,104,0.5)] rounded-lg bg-transparent hover:bg-gray-50 transition-colors duration-200">
                <span className="text-brand-gray text-xs lg:text-base font-bold">
                  Know More
                </span>
              </button>
            </div>
            <div className="bg-[rgba(32,207,198,0.08)] mt-2 rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Inventory Management
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  Track, monitor, and manage school supplies, lab equipment, and 
                  assets efficiently. Ensure optimal usage and timely procurement.
                </p>
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
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="./home_images/image 2.jpg"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-[80%] h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* third Section - Compliance Management */}
        <div className="grid lg:grid-cols-2 gap-12 mt-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-2 lg:order-1">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Communication Tools
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                 Facilitate seamless communication among staff, students, and parents 
                 through integrated channels like messaging, announcements, and alerts.
                </p>
              </div>
              {/* Know More Button */}
              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[rgba(1,77,104,0.5)] rounded-lg bg-transparent hover:bg-gray-50 transition-colors duration-200">
                <span className="text-brand-gray text-xs lg:text-base font-bold">
                  Know More
                </span>
              </button>
            </div>
            <div className="bg-[rgba(32,207,198,0.08)] mt-2 rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                 Document Library
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                  Store and manage critical documents such as certificates, circulars, 
                  and letters. Supports inward/outward tracking and secure sharing.
                </p>
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
                src="./home_images/image 3.jpg"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-[80%] h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Fourth Section - Compliance Management */}
        <div className="grid lg:grid-cols-2 gap-12 mt-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content Card */ }
          <div className="order-1 lg:order-2">
            <div className="bg-[rgba(32,207,198,0.08)] rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                  Career Path
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                 Guide students and staff through structured growth opportunities. 
                 Map progressions aligned with academic goals or professional development.
                </p>
              </div>
              {/* Know More Button */}
              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-[rgba(1,77,104,0.5)] rounded-lg bg-transparent hover:bg-gray-50 transition-colors duration-200">
                <span className="text-brand-gray text-xs lg:text-base font-bold">
                  Know More
                </span>
              </button>
            </div>
            <div className="bg-[rgba(32,207,198,0.08)] mt-2 rounded-lg p-5 lg:p-7 shadow-md">
              {/* Card Header */}
              <div className="mb-4">
                <h2 className="text-[#014D68] text-lg lg:text-xl font-bold mb-3 leading-tight">
                 Curriculum
                </h2>
                <p className="text-[#4D4D4D] text-xs font-semibold leading-relaxed">
                 Design and manage subject-wise curriculum plans aligned with educational 
                 standards like NEP 2020, CBSE, or state boards.
                </p>
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
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="./home_images/image 4.jpg"
                alt="Businessman examining decision tree with various career options and paths"
                className="w-[80%] h-auto max-w-lg mx-auto lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
