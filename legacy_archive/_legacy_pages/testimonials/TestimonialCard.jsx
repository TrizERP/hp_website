import React from "react";

function TestimonialCard({ name, role, image, content, theme }) {
  const isLight = theme === "light";
  return (
    <div className="lg:flex flex-col lg:w-[33%] sm:w-auto lg:h-[50%] max-md:ml-0 max-md:w-full">
      <div
        className={`flex flex-col lg:px-9 sm:px-4 pt-6 lg:mb-0 sm:mb-5 w-full leading-none ${
          isLight ? "border-gray-300 border-solid border-[3px]" : "bg-sky-900"
        } rounded-[35px_4px_35px_4px] max-md:px-5 max-md:mt-10 max-md:max-w-full`}
      >
        <div className="flex gap-8 self-start text-2xl max-md:ml-1.5">
          <img
            loading="lazy"
            src={image}
            alt={`Portrait of ${name}`}
            className="object-contain shrink-0 aspect-square w-[75px]"
          />
          <div className="flex flex-col my-auto">
            <div
              className={`font-bold ${
                isLight ? "text-neutral-700" : "text-white"
              }`}
            >
              {name}
            </div>
            <div
              className={`self-start mt-2 font-medium ${
                isLight ? "text-zinc-400" : "text-neutral-200"
              }`}
            >
              {role}
            </div>
          </div>
        </div>
        <div
          className={`mt-11 text-[20px] font-medium leading-9 ${
            isLight ? "text-zinc-600" : "text-white"
          } max-md:mt-10`}
        >
          {content}
        </div>
        <div
          className={`self-end mt-2 text-8xl ${
            isLight ? "text-sky-900" : "text-zinc-100"
          } max-md:mr-2.5 max-md:text-4xl`}
        >
          &quot;
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
