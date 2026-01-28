import * as React from "react";

export default function TestimonialCard({ name, school, testimonial }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-8 bg-blue-100 rounded-2xl max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col pt-4 pl-5 w-full bg-white rounded-3xl max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-6 self-start font-bold text-center text-black">
          <div className="flex shrink-0 rounded-full bg-zinc-300 lg:h-[100px] lg:w-[100px] sm:h-[50px] sm:w-[50px]" />
          <div className="flex flex-col my-auto">
            <div className="self-start lg:text-2xl sm:text-md md:text-lg font-inter">{name}</div>
            <div className="lg:text-xl sm:text-sm md:text-md  font-inter">{school}</div>
          </div>
        </div>
        <div className="self-end mt-3.5 max-w-full w-[539px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
              <div className="z-10 lg:text-xl sm:text-sm md:text-md font-medium font-intermedium text-black max-md:-mr-3.5 max-md:max-w-full">
                {testimonial}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 mx-auto mt-14 bg-green-600 rounded-full border-blue-100 border-solid border-[10px] lg:h-[110px] lg:w-[110px] sm:h-[50px] sm:w-[50px] -mb-2.5 -mr-2 max-md:mt-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
