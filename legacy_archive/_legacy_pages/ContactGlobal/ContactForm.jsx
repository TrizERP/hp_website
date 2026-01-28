import React from 'react';
import ContactInfo from './ContactInfo';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import Header from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import Head from 'next/head';
import ContactCard from '../../ContactForm/ContactForm';
function ContactForm() {
  return (
    <>
    <main className="text-xl">
      <Header />
    </main>
    <div
        style={{
          backgroundImage: 'url("/contactGlobal_images/image (13).png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '90vh',
          marginTop: '-6px'
        }}
        className=""
      />
    <div className="flex flex-col rounded-none">
      {/* <header className="flex overflow-hidden flex-col w-full bg-white-950 bg-opacity-60 max-md:max-w-full">
        <div className="flex relative flex-col items-end px-10 w-full max-w-[1500px] h-[10px] pt-[390px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
          <img loading="lazy" src="/contactGlobal_images/image (8).png" alt="" className="object-cover absolute inset-0 h-10px" />
        </div>
      </header> */}
     {/* <main className="overflow-hidden self-center lg:pl-6 lg:mt-10 sm:mb-0 max-w-full  bg-white rounded-3xl border-solid shadow-sm border-[5px] lg:w-[950px] sm:w-full max-md:pl-5 max-md:mt-8" style={{
      borderColor:'rgba(21, 70, 120, 1)'
      }}>
         <div className="lg:flex lg:gap-5 sm:gap-0 sm:w-full max-md:flex-col">
          <section className="flex lg:flex-row sm:flex-col lg:w-[54%] sm:px-4 sm:pt-2 lg:px-0 lg:pt-0 sm:w-full max-md:ml-0 max-md:w-full">
            <form className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <FormInput label="Name" />
              <FormInput label="Email" />
              <FormInput label="Contact Number" />
              <FormTextArea label="Write Your Message" />
              <button type="submit" className="self-center px-5 py-1 lg:mt-10 sm:mt-4 lg:text-[15px] sm:text-xs font-bold text-white hover:bg-lime-600 hover:scale-95 rounded-3xl max-md:mt-10" style={{
                background:'rgba(17, 134, 254, 1)'
              }}>
                Contact Us
              </button>
            </form>
          </section>
          <ContactInfo />
        </div> 
      </main>*/}
      <ContactCard />
      <br></br>
      <br></br>
      <footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789123!2d72.1234567!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0512345678901%3A0x1234567890abcdef!2sTriz%20Innovation%20Pvt%20Ltd%2C%20Surat!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
          //   src="https://www.google.com/maps/embed/v1/place?q=Triz%20Innovation%20Pvt%20Ltd%2C%20Surat&key=YOUR_API_KEY"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Triz Innovation Location"
        ></iframe>
      </footer>
      <br></br>
    </div>
    <Footer/>
    </>
  );
}

export default ContactForm;
