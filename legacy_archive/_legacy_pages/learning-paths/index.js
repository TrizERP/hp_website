
import React from "react";
import Header from "@/components/layout/navbar/Navbar";
import HeroSection from "./HeroSection";
import EssentailSection from "./EssentailSection";
import SoftwareSection from "./SoftwareSection";
import Benefits from "./Benefits";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTop from "@/components/layout/scroll-to-top/ScrollToTop";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <Header />
      <HeroSection />
      <EssentailSection />
      <SoftwareSection />
      <Benefits />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
