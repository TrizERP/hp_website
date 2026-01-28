import React from "react";
import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/2cc478e762f0bcd3cf576147797b0aa9e7f2576cc14cfade69a0bf9eec6a4f46?apiKey=f18a54c668db405eb048e2b0a7685d39&",
    title: "Seamless Talent Optimization",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/439aaff18aa89e740e4704af67dfa8373f37abe4edb6411bbe07146d450d8293?apiKey=f18a54c668db405eb048e2b0a7685d39&",
    title: "Future-Proof Workforce Development",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/aaba1b26e599ba673e392f30cf8bce999b9ec0d3947691bfc3f5e1574b91a661?apiKey=f18a54c668db405eb048e2b0a7685d39&",
    title: "Data-Driven Decisions, Powered by AI",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/2caa60ba3d365fcbf579d3e2dc189366200a6b02ec782699f23620a6e053caa4?apiKey=f18a54c668db405eb048e2b0a7685d39&",
    title: "Automation for Excellence",
  },
];

function BenefitsSection() {
  return (
    <div>
      <div className="lg:flex gap-5 mt-20 mb-20 lg:px-20  max-md:flex-col lg:mx-20 sm:mx-10 ">
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-11 py-11 mt-3 w-full  bg-sky-100 rounded-[35px_4px_35px_4px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/d29c57c1e86895fd15a3684cd45a32df6812c8921a9448ea565a6bbd72493431?apiKey=f18a54c668db405eb048e2b0a7685d39&"
              className="object-contain w-full aspect-[0.97] rounded-[35px_4px_35px_4px] shadow-[4px_4px_50px_rgba(5,58,58,0.06)] max-md:max-w-full"
              alt="Innovative workforce solutions"
            />
          </div>
        </div>
        <div className="lg:flex flex-col lg:ml-5 lg:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex lg:z-10 flex-col items-start w-full lg:max-md:mt-10 max-md:-mr-1 max-md:max-w-full">
            <div className="flex gap-6 mt-5 text-sm font-semibold leading-9 text-sky-900 uppercase">
              <div className="px-1 rounded bg-teal-400 bg-opacity-10">
                Your Benefits
              </div>
              <div className="shrink-0 my-auto w-24 h-0.5 border-2 border-sky-900 border-solid" />
            </div>
            <div className="self-stretch mt-6 lg:mr-7 lg:text-4xl sm:text-2xl font-bold leading-[42px] text-neutral-700 lg:max-md:mr-2.5 lg:max-md:max-w-full max-md:text-4xl lg:max-md:leading-[53px]">
              Innovation Meets Potential:<br/> Redefining Empowerment <br/>for a Limitless
              Workforce.
            </div>
            <div className="mt-8 text-1xl font-medium lg:leading-7 text-zinc-600 max-md:max-w-full">
              Ignite Workforce Evolution with our groundbreaking HRTech<br/>
              platform crafted to drive growth, precision, and unmatched<br/>
              excellence at every interaction.
            </div>
            <div className="grid grid-cols-2 gap-0 mt-8  items-start self-stretch mt-2 max-md:max-w-full">
              {benefitsData.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                />
              ))}
            </div>
            <button className="px-5 pt-4 pb-3 lg:mt-10 sm:mt-5 text-1xl font-semibold leading-none rounded border-gray-300 border-solid border-[3px] text-neutral-700 max-md:px-5">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
