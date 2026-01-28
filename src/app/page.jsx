import React from 'react';
import Client from '@/Components/pages/home/ClientSection';
import Scroll from '@/Components/layout/scroll-to-top/ScrollToTop';
import ElevateWorkforce from '@/Components/pages/home/ElevateWorkforce';
import Image from '@/Components/pages/home/Image';
import ExpertiseSolutions from '@/Components/pages/home/ExpertiseSolutions';
import BenefitsSection from '@/Components/pages/home/BenefitsSection';
import TestimonialSection from '@/Components/pages/home/TestimonialSection';
import LandingSection from '@/Components/pages/home/LandingSection';
import ScrollAnimationWrapper from '@/Components/ui/animations/ScrollAnimationWrapper';

function Home() {
    return (
        <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">

            <ScrollAnimationWrapper effect="fadeUp"><ElevateWorkforce /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="fadeLeft" delay={0.4}><Image /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="fadeRight" delay={0.5}><ExpertiseSolutions /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="zoomIn" delay={0.6}><BenefitsSection /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="rotateIn" delay={0.7}><TestimonialSection /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="fadeUp" delay={0.8}><Client /></ScrollAnimationWrapper>
            <ScrollAnimationWrapper effect="zoomIn" delay={0.9}><LandingSection /></ScrollAnimationWrapper>

            <Scroll />
        </div>
    );
}

export default Home;

