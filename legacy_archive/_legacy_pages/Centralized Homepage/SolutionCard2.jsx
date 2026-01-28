import * as React from "react";
import  ImageCard  from "./ImageCard";

const images = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f196941d21797d4d014cd11058c9a7aebcbd1d44734168b726edf9e7d10481db?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    alt: "Educational resource visualization"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7bcda5485fdb1b6c3258b73b62a49c5fa3a072fb61a1749aa17a52868dc01ac?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    alt: "Learning analytics dashboard"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a550a3fa93dc11867af272219e7d6adafc1fc634684259d5dab3a89b32540ed?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    alt: "Student engagement metrics"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d53515aa0b9d3b60586a6be2a382edfb54a7d3fc6814bd7d3d40daac8dd6224?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    alt: "Academic performance tracker"
  }
];

export const SolutionCard2 = () => {
  return (
    <div
  className="overflow-hidden self-stretch lg:px-5 sm:px-16 pt-0 pb-4 mt-0 w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full"
  style={{
    boxShadow: "0 0 9px 5px rgba(64, 96, 146, 0.5)", // Custom shadow style
  }}
>
  <div className="flex gap-5 flex-wrap lg:flex-nowrap">
    {/* Left Image Section */}
    <div className="flex flex-col lg:w-1/3 w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94971d1342021f66b6bdb99e08e0eed39a3fe4d94ea0070e3f43ce9f0466bb5?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
        alt="K-12 Solution Overview"
        className="box-border object-cover overflow-visible shrink-0 mt-12 lg:ml-6 w-full aspect-square max-w-[479px] min-h-[20px] min-w-[20px]"
      />
    </div>

    {/* Right Content Section */}
    <div className="flex flex-col lg:w-2/3 w-full lg:ml-5">
      <div className="flex flex-col mt-4 w-full">
        {/* Title */}
        <div className="self-start mt-12 text-2xl font-bold text-black font-noto">
          Solution For Higher Education
        </div>

        {/* Description */}
        <div className="mt-10 text-xl font-bold text-black text-left text-justify leading-relaxed font-roboto">
          Scholar Clone transforms higher education with its AI-driven,
          all-in-one solution, streamlining campus operations, enhancing student
          engagement, and delivering personalized learning. From advanced
          analytics to career-focused resources, it empowers institutions to
          prepare globally competitive graduates and achieve academic
          excellence.
        </div>

        {/* Button & Image Gallery */}
        <div className="mt-4 w-full">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            {/* Button Section */}
            <div className="flex flex-col lg:w-1/4 w-full">
            <a
                    href="/"
                    className="flex gap-2.5 lg:justify-center text-lg lg:items-center lg:self-center py-2.5 pr-5 pl-5 mt-6 max-w-[150px] text-white rounded-lg pointer-events-auto min-h-[10px] shadow-[0px_17px_33px_rgba(51,32,0,0.8)] w-[200px] max-md:px-5 max-md:mt-10 bg-[rgb(122, 194, 68)] transition-all duration-300 transform hover:scale-105 hover:bg-rgb(122, 194, 68) animate-blink font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    tabIndex="0"
                    style={{
                      boxShadow: '0 16.67px 33.33px rgba(33, 20, 0, 0.8), 0px -8px 10px rgba(33, 20, 0, 0.5) inset', // Adding inset shadow for bottom side
                      fontFamily: 'merriweather',
                    }}
                    >
                    Know More
                  </a>
            </div>

            {/* Image Gallery Section */}
            <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col w-full">
                    <ImageCard {...image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default SolutionCard2;
