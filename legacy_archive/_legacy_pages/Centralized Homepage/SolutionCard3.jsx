import * as React from "react";
import  ImageCard  from "./ImageCard";

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/023e49d1433916dd6dc2b87dbf6af93877539048eeeee8fd4436ebd7df9dcdbc?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Solution feature illustration 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44dcd2ec2efad925f43a9425221e58b8ab0b832864d3cca732c0650827004bb9?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Solution feature illustration 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7139dd7ef307cb3bb988341ffaf3232394274578ed7fcfedf671b234fca6dc8?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Solution feature illustration 3" }
];

export const SolutionCard3 = () => {
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
        src="/center_home_images/Frame 251 (1).png"
        className="box-border object-cover overflow-visible shrink-0 mt-12 lg:ml-6 w-full aspect-square max-w-[479px] min-h-[20px] min-w-[20px]"
      />
    </div>

    {/* Right Content Section */}
    <div className="flex flex-col lg:w-2/3 w-full lg:ml-5">
      <div className="flex flex-col mt-4 w-full">
        {/* Title */}
        <div className="self-start mt-12 text-2xl font-bold text-black font-noto">
          Solution For Corporate
        </div>

        {/* Description */}
        <div className="mt-10 text-xl font-bold text-black text-left text-justify leading-relaxed font-roboto">
          Scholar Clone revolutionizes the corporate sector with its comprehensive HRMS and career-focused solutions, integrating AI-powered tools for streamlined workforce management and employee development. From automated HR workflows to personalized career growth paths, it empowers organizations to boost efficiency, enhance talent retention, and drive success.
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
export default SolutionCard3;
