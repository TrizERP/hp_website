import React from 'react';

function ValueColumn({ imageSrc, title }) {
  return (
    <div className="flex flex-col sm:w-[80%] md:w-[36%] lg:w-[30%] mb-6 sm:mb-3 items-center">
      <div className="flex flex-col justify-center items-center p-4 sm:p-2 md:p-6">
        <div className="flex justify-center items-center lg:p-12 sm:p-6 bg-sky-500 rounded-full shadow-lg lg:w-[200px] sm:w-[100px]">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain lg:w-[100px] sm:w-[50px] md:w-[100px]" />
        </div>
      </div>
      <h3 className="mt-4 sm:mt-2 lg:text-lg sm:text-sm md:text-xl font-semibold text-amber-500">{title}</h3>
    </div>
  );
}

export default ValueColumn;
