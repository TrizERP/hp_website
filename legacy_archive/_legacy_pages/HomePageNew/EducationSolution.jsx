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
    <div className="flex flex-col items-center px-20 mt-10">
      <div className="text-4xl font-bold text-slate-700 max-md:max-w-full max-md:text-xl font-merriweather">
        Find a Way to your Success
    </div>
      <div className="flex flex-wrap gap-[-100px] justify-between mt-16 max-w-full text-xl font-semibold text-black w-[444px] max-md:mt-10 font-roboto">
        {/* K-12 Option */}
        <div className="flex flex-col text-center cursor-pointer" onClick={() => handleSolutionSelect('k12')}>
          <div>K-12</div>
          {selectedSolution === 'k12' && <hr className="border-black my-4 w-[50px] mx-auto" />}
        </div>

        {/* Higher Education Option */}
        <div className="text-center cursor-pointer" onClick={() => handleSolutionSelect('higherEducation')}>
          Higher Education
          {selectedSolution === 'higherEducation' && <hr className="border-black my-4 w-[50px] mx-auto" />}
        </div>

        {/* Corporate Option */}
        <div className="text-center cursor-pointer" onClick={() => handleSolutionSelect('corporate')}>
          Corporate
          {selectedSolution === 'corporate' && <hr className="border-black my-4 w-[50px] mx-auto" />}
        </div>
      </div>

      {/* Render SolutionCard with Transition based on selected solution */}
      <div className="mt-10 w-full">
        <div
          className={`transition-opacity duration-700 ${selectedSolution ? 'opacity-100' : 'opacity-0'}`}
        >
          {selectedSolution === 'k12' && (
            <SolutionCard1/>
          )}
          {selectedSolution === 'higherEducation' && (
            <SolutionCard2/>
          )}
          {selectedSolution === 'corporate' && (
            <SolutionCard3/>
          )}
        </div>
      </div>
    </div>
  );
}
