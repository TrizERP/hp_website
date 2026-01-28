import React from "react";

function IntegrationCard({ title, buttonText }) {
  return (
    <section className="flex overflow-hidden flex-col px-16 mt-20 w-full rounded-3xl shadow-[6px_6px_15px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-start py-12 pr-20 bg-white max-md:pr-5 max-md:max-w-full">
        <h2 className="text-3xl font-bold text-amber-500">{title}</h2>
        <button className="overflow-hidden px-2.5 py-3 mt-80 text-xl font-medium text-white bg-lime-500 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] max-md:mt-10">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default IntegrationCard;
