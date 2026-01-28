
import React from "react";

import SkillDevelopment from "./SkillDevelopment";
import Client from '@/Components/pages/home/ClientSection';
import LandingSection from "@/Components/pages/home/LandingSection";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";
import HeroSection from "./HeroSection";;
import Benefits from "@/Components/pages/products/talent-solutions/skill-management/Benefits";

export default function SkillManagementPage() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <SkillDevelopment />
      <Benefits />
      <Client />
      <LandingSection />
      <ScrollToTop />
    </div>
  );
}

