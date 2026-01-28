import React from "react";

function ResourceButton({ text }) {
  return (
    <button className="lg:gap-2.5 sm:gap-1.5 self-stretch font-bold lg:px-5 lg:py-3.5 sm:px-2.5 sm:text-xs lg:text-xl sm:py-2.5 whitespace-nowrap bg-sky-500 lg:rounded-3xl sm:rounded-xl lg:min-h-[50px] sm:min-h-[25px]">
      {text}
    </button>
  );
}

export default ResourceButton;
