import * as React from "react";
import { useState } from "react";
const PricingCard = ({ title, price, recommended, bestValue, buttonColor, borderColor, features,Prerequisite,featuresDescription }) => {
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);
  const [rotatedIndex, setRotatedIndex] = useState(null);
  const toggleDescription = (index) => {
    if (openFeatureIndex === index) {
      setOpenFeatureIndex(null); 
    } else {
      setOpenFeatureIndex(index);
    }
  };
  const toggleRotation = (index) => {
    if (rotatedIndex === index) {
      setRotatedIndex(null);
    } else {
      setRotatedIndex(index);
    }
  };
  return (
    <div className={`flex flex-col font-inter rounded-xl lg:w-[28%] sm:w-full  max-md:w-full ${recommended ? 'bg-sky-500 lg:-mt-20 sm:mt-10' : bestValue ? 'bg-green-600 lg:mt-0 sm:mt-10' : ''} p-2`}>
      {recommended && <div className="self-center mb-0 text-white text-sm px-4 py-0 bg-sky-500 rounded">Recommended</div>}
      <div
        className={`flex flex-col px-6 w-full text-sm font-bold text-black bg-white rounded-lg shadow-lg ${
          recommended ? 'mt-0 py-10' : bestValue ? 'mt-0 pt-0 pb-8' : 'mt-10 py-8'
        }`}
      >
        {bestValue && (
          <div className="self-center mb-10 text-white text-sm px-4 py-1 bg-green-600 rounded-b">
            Best Value
          </div>
        )}
        {/* <div className="self-center text-lg">{title}</div>
        <div className="self-center mt-2 text-xl text-sky-950">
          <span className="text-sky-950">₹ {price}/</span>
          <span>Year</span>
        </div> */}
        {/* <div className="self-center mt-2 text-sm text-zinc-600">Annual</div> */}
        {/* <div className="self-center mt-2 text-xs text-zinc-600">(Includes 1000 Users)</div> */}
        <div className="my-4 w-full h-px border border-gray-300" />
        {/* Render prerequisite if it exists */}
        {Prerequisite && (
          <div className="self-center mb-2 text-sm text-blue-700">
            <strong> {Prerequisite} </strong>
          </div>
        )}
        {features?.map((feature, index) => (
          <div key={index}>
          <div key={index} className="flex gap-2 items-center mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6584c070b022da334e18774febceaeef0a5298e7feeb409d64c5e4c9276cf2da?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              alt=""
              className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${
                  rotatedIndex === index ? "rotate-90" : ""}`}
              onClick={() => {
                toggleDescription(index);
                toggleRotation(index);
              }}
            />
            <div className="text-sm cursor-pointer"
             onClick={() => {
              toggleDescription(index);
              toggleRotation(index);
            }}
            >{feature}</div>
            </div>
            <div
            className={`text-xs text-gray-700 overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: openFeatureIndex === index ? '545px' : '0', 
              padding: openFeatureIndex === index ? '10px' : '0',
            }}
            >
            {openFeatureIndex === index && (
                <div dangerouslySetInnerHTML={{ __html: featuresDescription[feature] }} />
              )}
            </div>
            </div>
        ))}
         <button
          className={`overflow-hidden px-6 py-2 mt-6 rounded-lg border-2 border-solid text-${buttonColor} border-${borderColor} relative group`}
          tabIndex={0}
        >
          <span className="relative z-10 group-hover:text-white">Get Started</span>
          <span
            className={`absolute top-0 left-0 w-0 h-full bg-${borderColor} font-inter transition-all duration-300 group-hover:w-full`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
