
import React from "react";
import Client from '@/Components/pages/home/ClientSection';
import LandingSection from "@/Components/pages/home/LandingSection";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";
import HeroSection from "./HeroSection";
import MyComponent from "./MyComponent";
import SecondComponent from "./SecondComponent";
import Benefits from "./Benefits";

export default function SkillManagementPage() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <MyComponent />
      <SecondComponent />
      <Benefits />
      <Client />
      <LandingSection  />
      <ScrollToTop />
    </div>
  );
}

