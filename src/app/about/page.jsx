
import AboutHero from "@/Components/pages/about/AboutHero";
import WhatWeDo from "@/Components/pages/about/WhatWeDo";
import SuccessJourney from '@/Components/pages/about/SuccessJourney';

export const metadata = {
  title: "About Us",
  description: "Learn about Scholar Clone's mission to revolutionize education management. Discover our journey, values, and the team driving digital transformation in higher education.",
  openGraph: {
    title: "About Scholar Clone - Revolutionizing Education Management",
    description: "Discover our mission to empower institutions with cutting-edge ERP solutions.",
    images: ['/Images/hero_aboutus.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <WhatWeDo />
      <SuccessJourney />
    </main>
  );
}

