import * as React from "react";
import ImageCard from "./ImageCard";
import './special.css';
const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fd0311a3ef12d779ef13eb9a0d802b142bef8eea0c234c66082154398a75aed?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cb1a77fa7cbbb7b01e54497a367a4b6f35937e1d233e895c54d76661281bb23?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bfccba3184ce6e5c122c7034b09b8412a2a98355cbe773744f6b68865381a85?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d988235953d7011f0d4b7661617899319e9b2bb15c748603b8d1dd5302a0466b?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Educational solution feature 4" }
];

const SolutionCard1 = () => {
  return (
    <div
  className="overflow-hidden self-stretch lg:px-5 sm:px-16 pt-0 pb-4 w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full"
  style={{
    boxShadow: "0 0 9px 5px rgba(64, 96, 146, 0.5)", // Custom shadow style
  }}
>
  <div className="flex flex-wrap gap-5 lg:flex-nowrap">
    {/* Image Section */}
    <div className="flex flex-col lg:w-1/3 w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2Fbcdf7444fa8d40af93d0a5da1a4645bd"
        alt="K-12 Solution Overview"
        className="box-border object-cover overflow-hidden shrink-0 mt-12 lg:ml-6 w-full aspect-square max-w-[479px] min-h-[20px] min-w-[20px] max-md:mt-6"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col lg:w-2/3 w-full lg:ml-5">
      <div className="flex flex-col mt-4 w-full">
        {/* Title */}
        <div className="self-start mt-12 text-2xl font-bold text-black font-noto max-md:text-xl max-md:mt-6">
          Solution For K-12
        </div>

        {/* Description */}
        <div className="mt-10 text-xl font-bold text-black text-left text-justify leading-relaxed font-roboto max-md:text-lg max-md:mt-6">
          Scholar Clone redefines K-12 education with its all-in-one
          future-ready solution, blending AI-powered automation, seamless
          school management, and personalized learning. From dynamic
          timetable creation to psychometric career guidance, interactive
          course management, and adaptive learning analytics, it empowers
          schools to inspire success.
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
            <div className="lflex flex-col w-full">
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
        {/* End Button & Image Gallery */}
      </div>
    </div>
  </div>
</div>


  );
};

export default SolutionCard1;
