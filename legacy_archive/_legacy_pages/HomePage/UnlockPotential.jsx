import React from 'react';
import Newone from './NewOne';
import Header from '../Header/Header';
import MainContent from './MainContent';
import Client from './ClientSection';
import Contact from '../Contact/ContactCard';
import Scroll from '@/components/layout/scroll-to-top/ScrollToTop';
import Footer from '@/components/layout/footer/Footer';
import TestimonialsSection from './TestimonialsSection';
function UnlockPotential() {
  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
      <main className="text-xl">
      <Header/>
      </main>
      <Newone />
      <MainContent />
      <TestimonialsSection />
      <Client />
      {/* Contact Us Section */}
      <div className="contact-us w-full mt-10">
        <h1 className="lg:text-4xl sm:text-2xl md:text-2xl font-bold text-center text-sky-500 mb-12">
        Contact Us
      </h1> 
        <Contact />
      </div>
      <Scroll />
      <Footer />
    </div>
  );
}

export default UnlockPotential;
