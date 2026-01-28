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
    <div className="overflow-hidden self-stretch px-2.5 pt-0 pb-4 mt-0 -ml-px w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full" style={{
      boxShadow: '0 0 9px 5px rgba(64, 96, 146, 0.5)', // custom shadow style
    }}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94971d1342021f66b6bdb99e08e0eed39a3fe4d94ea0070e3f43ce9f0466bb5?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
            alt="K-12 Solution Overview"
            className="box-border object-cover overflow-visible shrink-0 mt-12 ml-6 w-full aspect-square max-w-[479px] min-h-[20px] min-w-[20px]"
          />
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-4 w-full max-md:mt-10 max-md:max-w-full">
            <div className="self-start mt-12 text-2xl font-bold text-black font-noto">
            Solution For Higher Education
            </div>
            <div className="mt-10 text-xl font-bold text-black max-md:max-w-full font-roboto text-justify leading-relaxed">
            Scholar Clone transforms higher education with its AI-driven, all-in-one solution, streamlining campus operations, enhancing student engagement, and delivering personalized learning. From advanced analytics to career-focused resources, it empowers institutions to prepare globally competitive graduates and achieve academic excellence.
            </div>
            <div className="mt-3.5 w-full max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <a
                    href="https://triz-apphigher-education.vercel.app/"
                    className="flex gap-2.5 justify-center text-lg items-center self-center py-2.5 pr-5 pl-5 mt-6 max-w-[150px] text-white rounded-lg pointer-events-auto min-h-[10px] shadow-[0px_17px_33px_rgba(51,32,0,0.8)] w-[200px] max-md:px-5 max-md:mt-10 bg-[rgb(122, 194, 68)] transition-all duration-300 transform hover:scale-105 hover:bg-rgb(122, 194, 68) animate-blink font-bold"
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
                <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      {images.map((image, index) => (
                        <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
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
    </div>
  );
};
export default SolutionCard2;
