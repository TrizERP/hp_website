import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

function ContactCard() {
  return (
    <section className="flex flex-col justify-center items-center rounded-none">
      <div className="py-px lg:pl-10 sm:pl-0 lg:w-full sm:w-full lg:max-w-[1000px] bg-white rounded-2xl shadow-[0px_0px_9px_5px_rgba(64,96,146,0.5)] max-md:px-5 max-md:w-full">
        <div className="flex lg:gap-5 sm:gap-2 max-md:flex-col">
          <ContactForm />
          {/* <ContactInfo /> */}
          {/* <div className="sm:flex lg:hidden md:hidden sm:w-full">
            <ContactForm />
          </div>
          <div className="sm:flex lg:hidden md:hidden  sm:w-full">
            <ContactInfo />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
