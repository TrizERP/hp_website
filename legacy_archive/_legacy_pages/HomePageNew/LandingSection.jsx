import React from "react";

const LandingSection = () => {
  return (
    <section className="bg-[#014c68] rounded-tl-[1rem] lg:mt-0 sm:mt-10 rounded-br-[2rem] lg:w-full lg:max-w-7xl lg:mx-auto sm:mx-10 px-6 py-10 lg:py-14 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          {/* START NOW label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#2bdfd5] text-sm font-semibold uppercase tracking-wider">
              Start Now
            </span>
            <div className="flex-grow h-px bg-[#2cdfd5] max-w-[96px]"></div>
          </div>

          {/* Headings */}
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug font-sans">
            Hurry Up!
          </h2>
          <p className="text-white text-xl sm:text-2xl font-semibold mt-1">
            Upskill Your Organization Today.
          </p>

          {/* Form */}
          <form className="flex flex-col space-y-4 mt-6 max-w-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="h-11 px-4 rounded-md text-sm text-gray-800 font-medium outline-none"
            />
            <input
              type="text"
              placeholder="Contact Details"
              className="h-11 px-4 rounded-md text-sm text-gray-800 font-medium outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="h-11 px-4 rounded-md text-sm text-gray-800 font-medium outline-none"
            />
            <button
              type="submit"
              className="h-11 w-36 bg-[#1fcfc5] text-white font-semibold text-sm rounded-md hover:bg-[#18b7ae] transition"
            >
              Get Started
            </button>
          </form>

          {/* Subtext */}
          <p className="text-[#d3d3d3] text-sm mt-4">
            Want to contact our team and book a call?{" "}
            <span className="text-[#1fcfc5] cursor-pointer hover:underline">
              Try it now
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[420px] rounded-xl overflow-hidden">
          <img
            src="/new cor/team.png"
            alt="Team session"
            className="w-full h-auto object-cover rounded-tl-[1rem] rounded-br-[2rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
