import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}
        <h1 className="text-[#ff9d48] text-3xl md:text-4xl lg:text-[32px] font-bold font-onest mb-5">
          Goal & KPI Dashboards 
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
             Drive clarity and accountability with dynamic dashboards that keep everyone aligned on what matters most. 
            </p>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Set individual, team, and departmental goals   </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Monitor KPIs and performance metrics in real-time  </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Visual progress bars and performance indicators </span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Continuous Feedback Hub 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>Peer-to-peer and manager feedback options  </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Instant praise, coaching, and constructive input </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Integrated with performance cycles and reviews </span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Performance Journals 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Private and shared journals for self-reflection and manager notes </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Document achievements, challenges, and learning moments </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Prepare better for performance reviews and 1:1 check-ins </span></li>
            </ul>

            <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
             Keep a consistent and structured record of employee development over time. 
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
