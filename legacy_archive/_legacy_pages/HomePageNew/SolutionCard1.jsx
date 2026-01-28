import * as React from "react";
import ImageCard from "./ImageCard";
const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fd0311a3ef12d779ef13eb9a0d802b142bef8eea0c234c66082154398a75aed?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cb1a77fa7cbbb7b01e54497a367a4b6f35937e1d233e895c54d76661281bb23?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bfccba3184ce6e5c122c7034b09b8412a2a98355cbe773744f6b68865381a85?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d988235953d7011f0d4b7661617899319e9b2bb15c748603b8d1dd5302a0466b?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 4" }
];

const SolutionCard1 = () => {
  return (
    <div className="overflow-hidden self-stretch px-2.5 pt-0 pb-4 mt-0 -ml-px w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full" style={{
      boxShadow: '0 0 9px 5px rgba(64, 96, 146, 0.5)', // custom shadow style
    }}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2Fbcdf7444fa8d40af93d0a5da1a4645bd"
            alt="K-12 Solution Overview"
            className="box-border object-cover overflow-hidden shrink-0 mt-12 ml-6 w-full aspect-square max-w-[479px] min-h-[20px] min-w-[20px]"
          />
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-4 w-full max-md:mt-10 max-md:max-w-full">
            <div className="self-start mt-12 text-2xl font-bold text-black font-noto">
              Solution For K-12
            </div>
            <div className="mt-10 text-xl font-bold text-black max-md:max-w-full font-roboto text-justify leading-relaxed">
              Scholar Clone redefines K-12 education with its all-in-one
              future-ready solution, blending AI-powered automation, seamless
              school management, and personalized learning. From dynamic
              timetable creation to psychometric career guidance, interactive
              course management, and adaptive learning analytics, it empowers
              schools to inspire success.
            </div>
            <div className="mt-3.5 w-full max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <a
                    href="/"
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

export default SolutionCard1;
