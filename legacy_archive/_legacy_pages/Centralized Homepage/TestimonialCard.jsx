import * as React from "react";

function TestimonialCard({ image, name, review }) {
  return (
    <div className="overflow-hidden flex-auto self-stretch lg:p-20 sm:p-4 lg:mx-auto rounded-2xl bg-slate-700 max-w-[989px] shadow-[6px_6px_15px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="lg:flex gap-5 max-md:flex-col">
        <div className="flex lg:flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={`Profile picture of ${name}`}
            className="object-contain shrink-0 max-w-full rounded-full aspect-square shadow-[0px_0px_15px_rgba(0,0,0,0.25)] w-[180px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col lg:ml-5 sm:ml w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
            <div className="self-start lg:text-2xl sm:text-lg font-bold">
              {name}
            </div>
            <div className="mt-6 lg:text-xl sm:text-sm max-md:max-w-full">
              {review}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
