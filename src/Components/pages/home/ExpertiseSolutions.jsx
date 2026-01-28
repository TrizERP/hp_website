import React from "react";
import ExpertiseHeader from "./ExpertiseHeader";
import SolutionItem from "./SolutionItem";
import ExploreButton from "./ExploreButton";
import ImageContainer from "./ImageContainer";

const solutions = [
  {
    icon: "./home_images/Rectangle 54.svg",
    text: "HRIT Solutions",
  },
  {
    icon: "./home_images/Rectangle 54.svg",
    text: "Organization Development",
  },
  {
    icon: "./home_images/Rectangle 54.svg",
    text: "Talent Management",
  },
  {
    icon: "./home_images/Rectangle 54.svg",
    text: "Skill Matrix & Taxonomy",
  },
];

function ExpertiseSolutions() {
  return (
    <div className="lg:flex gap-5 pt-14 lg:px-20 max-md:flex-col lg:mx-20 sm:mx-10">
      <div className="flex lg:flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start w-full font-semibold max-md:mt-10 max-md:max-w-full">
          <ExpertiseHeader />
          <h2 className="mt-6 lg:text-5xl sm:text-2xl font-bold leading-[48px] text-black max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Uncover Scholar Clone&rsquo;s 4 Power-Packed Solutions
          </h2>
          <p className="self-stretch mt-3 text-sm font-medium leading-9 text-black max-md:max-w-full">
            At Scholar Clone, we believe in blending technology with innovation
            to revolutionize workforce management. Our solution is built to
            cater to businesses of every size, helping them optimize talent,
            embrace continuous learning, and achieve operational excellence.
          </p>
          <div className="flex flex-wrap gap-5 self-stretch mt-8 w-full max-md:mr-1.5 max-md:max-w-full">
            {solutions.slice(0, 2).map((solution, index) => (
              <SolutionItem
                key={index}
                icon={solution.icon}
                text={solution.text}
              />
            ))}
          </div>
          <div className="flex gap-6 mt-6 max-md:mt-10">
            {solutions.slice(2).map((solution, index) => (
              <SolutionItem
                key={index}
                icon={solution.icon}
                text={solution.text}
              />
            ))}
          </div>
          <ExploreButton />
        </div>
      </div>
      <ImageContainer />
    </div>
  );
}

export default ExpertiseSolutions;
