import * as React from "react";
import  SolutionCard1  from "./SolutionCard1"; 
import  SolutionCard2  from "./SolutionCard2";
import  SolutionCard3  from "./SolutionCard3";

export default function EducationSolutions() {
  // State to manage the selected solution
  const [selectedSolution, setSelectedSolution] = React.useState('k12');

  // Handler for selecting a solution
  const handleSolutionSelect = (solution) => {
    setSelectedSolution(solution);
  };

  return (
    <div className="flex flex-col items-center px-10 md:px-20 mt-10">
  {/* Heading */}
  <div className="text-4xl font-bold text-slate-700 text-center max-md:text-2xl font-merriweather">
    Find a Way to Your Success
  </div>

  {/* Selection Options */}
  <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-full text-xl font-semibold text-black sm:w-[444px] font-roboto">
    {/* K-12 Option */}
    <div className="flex flex-col text-center cursor-pointer" onClick={() => handleSolutionSelect('k12')}>
      <div>K-12</div>
      {selectedSolution === 'k12' && <hr className="border-black my-2 w-[50px] mx-auto" />}
    </div>

    {/* Higher Education Option */}
    <div className="text-center cursor-pointer" onClick={() => handleSolutionSelect('higherEducation')}>
      Higher Education
      {selectedSolution === 'higherEducation' && <hr className="border-black my-2 w-[50px] mx-auto" />}
    </div>

    {/* Corporate Option */}
    <div className="text-center cursor-pointer" onClick={() => handleSolutionSelect('corporate')}>
      Corporate
      {selectedSolution === 'corporate' && <hr className="border-black my-2 w-[50px] mx-auto" />}
    </div>
  </div>

  {/* Solution Card with Transition */}
  <div className="mt-10 w-full sm:mx-10">
    <div className={`transition-opacity duration-700 ${selectedSolution ? 'opacity-100' : 'opacity-0'}`}>
      {selectedSolution === 'k12' && <SolutionCard1 />}
      {selectedSolution === 'higherEducation' && <SolutionCard2 />}
      {selectedSolution === 'corporate' && <SolutionCard3 />}
    </div>
  </div>
</div>

  );
}
