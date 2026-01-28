import React from "react";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import CourseSection from "./CourseSection";
import TrainingSection from "./TrainingSection";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <SecondSection />
      <CourseSection />
      <TrainingSection />
      <ScrollToTop />
    </div>
  );
}

