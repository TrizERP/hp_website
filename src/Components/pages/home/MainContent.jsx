import React from 'react';
import EducationSolution from "./EducationSolution";
import HeroSection from './HeroSection';
function MainContent() {
  
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center bg-white-50 py-16">
      <EducationSolution />
      </section>
      <HeroSection />
    </main>
  );
}

export default MainContent;
