import React from 'react';

function ContactInfo() {
  const contactDetails = [
    { icon: "/icons/Phone Icon.png", text: "98241-54142" },
    { icon: "/icons/Envelope Icon.png", text: "hr@triz.co.in" },
    { icon: "/icons/Map Marker Icon.png", text: <>23, Sunder-Chambers, Adajan Patiya, <br /><br />Surat-395009</> }
  ];

  const socialIcons = [
    "/icons/Social Icons Group.png"
  ];

  return (
    <div className="lg:flex flex-col ml-10 lg:w-[44%] sm:hidden">
      <div className="flex relative flex-col lg:px-20 lg:py-36 sm:px-20 sm:py-36 w-full rounded-xl max-h-[550px] max-md:px-5 max-md:py-20 max-md:mt-4 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2c3230531ec92c352af753de56ba2f3bca43274724991e4f03a34698bea53c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="" className="object-cover absolute inset-0 size-full rounded-2xl" />

        <h3 className="relative self-start text-2xl font-bold tracking-tighter text-white">Contact Information</h3>

        <p className="relative self-start mt-2 text-base leading-7 text-white text-opacity-80 ml-0 max-md:mr-2.5">
          Fill up the form and our Team will get back to you within 24 hours.
        </p>

        {contactDetails.map((detail, index) => (
          <div key={index} className={`flex relative gap-5 self-start mt-${index === 0 ? '4' : '2'} whitespace-nowrap ml-0 max-md:ml-2`}>
            <img src={detail.icon} alt={`${detail.text} icon`} className="w-5 h-5" />
            <div className="text-base font-semibold leading-none text-white text-opacity-80">{detail.text}</div>
          </div>
        ))}

        <div className="flex relative gap-9 self-start mt-6 ml-0 text-xl text-center text-white whitespace-nowrap max-md:mt-4 max-md:ml-2.5">
          <img src={socialIcons[0]} alt="Social Icons" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
