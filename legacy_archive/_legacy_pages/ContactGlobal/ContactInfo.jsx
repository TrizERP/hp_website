import React from 'react';

function ContactInfo() {
  const contactDetails = [
    { label: 'Contact Number:', value: '98241-54142' },
    { label: 'Email Address:', value: 'kalpesh@triz.com' },
    { label: 'Address:', value: '203,sundar chambers, rander road, adajan, surat' }
  ];

  return (
    <section className="lg:flex sm:flex-col lg:ml-5 sm:ml-0 lg:w-[44%] sm:w-full lg:mt-0 sm:mt-4 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow lg:pt-10 lg:pr-10 lg:pb-20 lg:pl-10 sm:pt-4 sm:pb-4 sm:pr-4 sm:pl-4 w-full rounded-2xl max-md:px-5 max-md:py-10 max-md:mt-5 max-md:max-w-full" style={{
        background: 'rgba(133, 219, 167, 1)',
        color: 'rgba(88, 88, 88, 1)'
      }}>
        <div className="flex overflow-hidden flex-col justify-center self-center px-8 py-5 ml-4 max-w-full bg-white rounded-2xl w-[200px] max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b6e4a1e9ea1b0a257daefd7bb2538196c8aceff04dba9e0797026c8200e71d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="Contact information icon" className="object-contain w-full aspect-square" />
        </div>
        <div className="flex flex-col mt-10 max-w-full font-medium leading-none text-center items-start w-full max-md:mt-5">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex gap-5 mt-6 first:mt-0">
              <div className="grow font-inter lg:text-[16px]">{detail.label}</div>
              <div className="grow shrink basis-auto font-intermedium lg:text-[15px]">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
