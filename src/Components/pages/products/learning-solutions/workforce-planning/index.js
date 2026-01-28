
import React from "react";
import HeroSection from "./HeroSection";
import EssentailSection from "./EssentailSection";
import SoftwareSection from "./SoftwareSection";
import Benefits from "./Benefits";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <EssentailSection />
      <SoftwareSection />
      <Benefits />
      <ScrollToTop />
    </div>
  );
}

