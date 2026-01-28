import React from "react";

export default function TestimonialCardNew({ quote, author, authorImage, companyLogo, ratingImage }) {
  return (
    <div className="flex flex-col ml-40 rounded-none max-w-[400px] h-[200px] text-neutral-800">
      <div className="flex flex-col px-4 py-4 w-full bg rounded-3xl bg-white h-[200px]">
        <div className="self-start text-sm tracking-tighter font-interregular max-md:max-w-full flex-grow">
          {quote}
        </div>
        <div className="flex flex-wrap gap-5 justify-between w-full font-interregular text-sm tracking-tighter text-center max-md:mt-10">
          <div className="flex gap-2.5 self-end mt-5">
            <img
              loading="lazy"
              src={authorImage}
              alt={`${author} profile picture`}
              className="object-contain shrink-0  w-[50px]"
            />
            <div className="flex flex-col self-start">
              <div>{author}</div>
              <img
                loading="lazy"
                src={ratingImage}
                alt="Rating"
                className="object-contain mt-2  w-[50px]"
              />
            </div>
          </div>
          <img
            loading="lazy"
            src={companyLogo}
            alt="Company logo"
            className="object-contain shrink-0 max-w-full  w-[85px]"
          />
        </div>
      </div>
    </div>
  );
}
