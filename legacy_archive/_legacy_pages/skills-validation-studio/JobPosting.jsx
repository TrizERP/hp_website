import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}
        <h1 className="text-[#ff9d48] text-3xl md:text-4xl lg:text-[32px] font-bold font-onest mb-5">
            Core Features 
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
               Role-Based Frameworks & Gap Analysis 
            </h2>

            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
              Align candidates with role-specific skill matrices and analyze performance gaps with precision. 
              Map skills to specific job roles and functions. Identify strengths, blind spots, and upskilling opportunities. Customize frameworks for departments, industries, and seniority levels
            </p>

            <p className="text-black text-lg md:text-sm font-bold font-onest mt-4">
              Real Skill Validation – Not Just Certificates
            </p>

            <h3 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Go beyond paper qualifications by validating live, demonstrable skills. 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>Test applied knowledge with live projects and practical challenges</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Simulate workplace scenarios for true-to-role assessments </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Reduce over-inflated resumes and uncover hidden talent</span></li>
            </ul>

            <h3 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Smart Online Tests & Challenges
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Skill-specific MCQs, case-based questions, and coding tasks </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Dynamic difficulty adjustment for personalized testing</span></li>
              <li className="flex gap-2"><span>📊</span> <span>Instant scoring with analytics on accuracy, speed, and consistency </span></li>
            </ul>

            <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
             AI-powered, adaptive tests designed to evaluate core and contextual skills. 
            </p>
          </div>

          {/* Right Visual Section */}
          <div className="flex-1 flex justify-center items-center">
              <img
                className=" w-[600px] h-[500px]  border border-[#b3b3b3] rounded-lg object-cover bg-white"
                src="/Detailes page/image 45.jpg"
                alt="Team collaboration in office environment"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default JobPosting;
