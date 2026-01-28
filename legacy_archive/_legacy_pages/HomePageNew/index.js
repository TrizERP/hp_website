import React from 'react';
import Header from '@/components/layout/navbar/Navbar';
import Client from './ClientSection';
import Scroll from '@/components/layout/scroll-to-top/ScrollToTop';
import Footer from '@/components/layout/footer/Footer';
import ElevateWorkforce from '../ElevateWorkforce/ElevateWorkforce';
import Image from '../ImageComponent/Image';
import ExpertiseSolutions from '../ExpertiseSolutions/ExpertiseSolutions';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import TestimonialSection from '../testimonials/TestimonialSection';
import LandingSection from './LandingSection';
import ScrollAnimationWrapper from '@/components/ui/animations/ScrollAnimationWrapper';

function Home() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <main className="text-xl">
        <Header />
      </main>

      <ScrollAnimationWrapper effect="fadeUp"><ElevateWorkforce /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="fadeLeft" delay={0.4}><Image /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="fadeRight" delay={0.5}><ExpertiseSolutions /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="zoomIn" delay={0.6}><BenefitsSection /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="rotateIn" delay={0.7}><TestimonialSection /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="fadeUp" delay={0.8}><Client /></ScrollAnimationWrapper>
      <ScrollAnimationWrapper effect="zoomIn" delay={0.9}><LandingSection /></ScrollAnimationWrapper>

      <Scroll />
      <Footer />
    </div>
  );
}

export default Home;
