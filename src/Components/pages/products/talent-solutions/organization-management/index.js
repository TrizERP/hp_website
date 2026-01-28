import React from "react";
import Client from '@/Components/pages/home/ClientSection';
import LandingSection from "@/Components/pages/home/LandingSection";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";
import HeroSection from "./HeroSection";
import Careercarft from "./Careercarft";
import SkillMapping from "./SkillMapping";
import Benefits from "./Benefits";


export default function SkillManagementPage() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <Careercarft />
      <SkillMapping />
      <Benefits />
      <Client />
      <LandingSection  />
      <ScrollToTop />
    </div>
  );
}

