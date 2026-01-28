import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}
        <h1 className="text-[#ff9d48] text-3xl md:text-4xl lg:text-[32px] font-bold font-onest mb-5">
          Always Audit-Ready
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
             Compliance doesn&rsquo;t have to be complicated. With real-time tracking and automated documentation, you can stay confident during internal audits, legal inspections, or external reviews.  
            </p>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Maintain full compliance records </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Store regulatory documents securely </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Instant access to audit logs and policy updates </span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Auto Policy Updates 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>HR and operational policy automation </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Built-in templates for quick implementation </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Real-time change notifications to employees</span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              🇮🇳 Labor Law Tracker (India-Specific) 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Track central and state-specific labor law changes </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Alerts on minimum wage revisions, leave policies, PF/ESIC, and more </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Region-wise compliance insights and status indicators </span></li>
            </ul>

            <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
             Stay ahead of India&apos;s complex and ever-evolving labor laws. Our India-specific compliance tracker is regularly updated by legal experts so your HR policies remain legally sound. 
            </p>
          </div>

          {/* Right Visual Section */}
          <div className="flex-1 flex justify-center items-center">
              <img
                className=" w-[600px] h-[500px]  border border-[#b3b3b3] rounded-lg object-cover bg-white"
                src="/Detailes page/image 48.jpg"
                alt="Team collaboration in office environment"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default JobPosting;
