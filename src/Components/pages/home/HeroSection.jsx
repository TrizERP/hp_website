
import React from "react";
import EmailForm from "./EmailForm";

function HeroSection() {
  return (
    <div className="flex flex-col w-[80%] max-md:ml-0 max-md:w-full mb-15">
      <div className="flex flex-col mx-14 items-start  w-full font-semibold max-md:mt-10 max-md:max-w-full">
        <h1 className="self-stretch text-6xl mt-20 leading-[65px] text-black max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Elevate Potential, <br />Redefine Workforce{" "}
          <span className="text-teal-400"><br />Excellence</span>
        </h1>
        <p className="mt-10 text-2xl font-medium leading-10 text-black lg:w-[600px] max-md:max-w-full">
          A Future-Proof Symphony of AI, Automation, and Human Ingenuity.
        </p>
        <div className="flex flex-wrap lg:gap-5 mt-20 text-xl leading-none max-md:mt-10">
          <EmailForm />
          <button suppressHydrationWarning className="lg:px-5 sm:px-10 lg:h-12 sm:h-20 lg:mt-0 sm:mt-8 lg:mb-0 sm:mb-5   text-white bg-sky-900 rounded shadow-[0px_15px_26px_rgba(0,0,0,0.03)] lg:max-md:px-5">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
