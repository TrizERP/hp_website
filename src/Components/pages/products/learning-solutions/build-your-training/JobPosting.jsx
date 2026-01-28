import React from "react";

const JobPosting = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white px-4 py-10 lg:py-20 ${className}`}
    >
      <div className="lg:mx-20 sm:mx-6 max-w-[1440px] relative">
        {/* Title */}
        <h1 className="text-[#ff9d48] text-3xl md:text-4xl lg:text-[32px] font-bold font-onest mb-5">
          Simple & Intuitive Course Designer
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text Section */}
          <div className="flex-1 space-y-6">
            <p className="text-black text-lg md:text-sm font-normal font-onest leading-relaxed">
              Build professional-grade courses in minutes using our drag-and-drop interface. No coding, no complexity just easy tools to bring your training vision to life.
            </p>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Visual course layout builder  </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Modular structure with chapters & lessons </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Real-time preview and editing  </span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Upload Existing Training Materials
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>✔️</span> <span>Support for multimedia (videos, PDFs, audio, presentations) </span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Import content from cloud or local storage</span></li>
              <li className="flex gap-2"><span>✔️</span> <span>Organize materials by topic, skill, or department </span></li>
            </ul>

            <h3 className="text-[#ff9d48] text-xl md:text-2xl lg:text-[18px] font-bold font-onest">
              Quiz Maker Toolkit 
            </h3>

            <ul className="text-black text-lg md:text-sm font-normal font-onest space-y-2">
              <li className="flex gap-2"><span>📊</span> <span>Multiple choice, fill-in-the-blank, matching, and more </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Auto-graded quizzes and feedback options </span></li>
              <li className="flex gap-2"><span>📊</span> <span>Analytics to track learner performance </span></li>
            </ul>

            <p className="text-black text-lg md:text-sm font-normal font-onest mt-2">
             Engage learners and assess progress with our interactive Quiz Maker.  
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
