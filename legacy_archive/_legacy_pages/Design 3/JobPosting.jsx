import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}
        <h1 className="text-[#ff9d48] text-3xl md:text-4xl lg:text-[32px] font-bold font-onest mb-5">
          Job Posting & Tracking
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Post Jobs Quickly & Efficiently
            </h2>

            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
              Recruiters can create job listings in minutes with role descriptions, skills requirements, and application deadlines. The platform integrates with multiple job boards and career pages, expanding reach and attracting more qualified candidates.
            </p>

            <p className="text-black text-lg md:text-sm font-bold font-onest mt-4">
              Real-Time Applicant Tracking
            </p>

            <h3 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              A built-in Applicant Tracking System (ATS) allows HR teams to:
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>Monitor applications as they come in</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Track candidate progress across hiring stages</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Assign hiring managers and recruiters to job postings</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Streamline communication with automated status updates</span></li>
            </ul>

            <h3 className="text-[#014c68] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              The platform provides real-time analytics, helping recruiters track:
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Application trends – See how many candidates apply and from which sources</span></li>
              <li className="flex gap-2"><span>📊</span> <span>Time-to-hire – Identify bottlenecks in the hiring process</span></li>
              <li className="flex gap-2"><span>📊</span> <span>Engagement rates – Measure applicant interest and response times</span></li>
            </ul>

            <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
              By streamlining job postings and tracking, HR teams can fill positions faster and with less effort.
            </p>
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
