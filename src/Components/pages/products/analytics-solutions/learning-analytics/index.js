"use client";
import React from "react";
import HeroSection from "./HeroSection";
// import Second from "./Second";
// import ThirdSection from "./ThirdSection";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";
// import BenefitsSection from "./BenefitsSection";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      {/* <BenefitsSection /> */}
      {/* <Second /> */}
      {/* <ThirdSection /> */}
      <ScrollToTop />
    </div>
  );
}

