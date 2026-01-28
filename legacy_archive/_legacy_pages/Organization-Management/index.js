import React from "react";
import Header from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Client from '@/components/pages/home/ClientSection';
import LandingSection from "@/components/pages/home/LandingSection";
import ScrollToTop from "@/components/layout/scroll-to-top/ScrollToTop";
import HeroSection from "./HeroSection";
import Careercarft from "./Careercarft";
import SkillMapping from "./SkillMapping";
import Benefits from "./Benefits";


export default function SkillManagementPage() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <Header />
      <HeroSection />
      <Careercarft />
      <SkillMapping />
      <Benefits />
      <Client />
      <LandingSection  />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
