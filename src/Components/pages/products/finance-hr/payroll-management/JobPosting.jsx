import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Payroll Type: Create & Edit with Ease
            </h2>

            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
              Define and manage multiple payroll categories that suit your organization&rsquo;s unique requirements. Whether it&rsquo;s basic pay, overtime, bonuses, or special allowances, you can:
            </p>
            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>Create new payroll types instantly</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Edit or customize categories to match evolving policies</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Standardize payroll structures across departments</span></li>
            </ul>

            <h3 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Salary Structure: Fixed + Variable Components
            </h3>
             <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
             Easily design salary packages with both fixed and variable components. Our platform allows you to:
            </p>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Assign salary structures to individual employees or groups</span></li>
              <li className="flex gap-2"><span>📊</span> <span>Include allowances, incentives, and performance-based pay</span></li>
              <li className="flex gap-2"><span>📊</span> <span>Ensure transparency for both HR teams and employees</span></li>
            </ul>

           
          </div>

          {/* Right Visual Section */}
          <div className="flex-1 flex justify-center items-center">
              <img
                className=" w-[600px] h-[500px]  border border-[#b3b3b3] rounded-lg object-cover bg-white"
                src="/m_image.png"
                alt="Team collaboration in office environment"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default JobPosting;
