import React from 'react';

function ContactForm() {
  const contactDetails = [
    { icon: "/icons/Phone Icon.png", text: "98241-54142" },
    { icon: "/icons/Envelope Icon.png", text: "hr@triz.co.in" },
    { icon: "/icons/Map Marker Icon.png", text: <>23, Sunder-Chambers, Adajan Patiya, <br /><br />Surat-395009</> }
  ];
  
  const socialIcons = [
    "/icons/Social Icons Group.png"
  ];

  return (
      <div className="flex flex-col lg:flex-row lg:gap-5 sm:gap-5 sm:w-full sm:px-10 lg:px-0">
        {/* Contact Form */}
        <div className="flex flex-col w-full">
        <form className="flex flex-col items-start self-stretch my-auto text-xs font-bold text-slate-800">
          <h2 className="lg:text-4xl sm:text-2xl tracking-tighter text-amber-500 sm:mt-2">Say Hi!</h2>
          <p className="lg:mt-4 sm:mt-2 lg:text-xl sm:text-md leading-none text-slate-500">We&apos;d like to talk with you.</p>
          
          <label htmlFor="fullName" className="lg:mt-20 sm:mt-10 leading-none">My name is</label>
          <input
            id="fullName"
            type="text"
            className="overflow-hidden self-stretch px-8 mt-1.5 text-base leading-10 rounded-2xl shadow bg-slate-100 text-slate-500"
            placeholder="Full name"
            style={{
              background: 'rgba(245, 245, 250, 1)',
              boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
            }}
          />
          
          <label htmlFor="email" className="mt-7 leading-none">My email is</label>
          <input
            id="email"
            type="email"
            className="overflow-hidden self-stretch px-8 mt-2.5 text-base leading-10 whitespace-nowrap rounded-2xl shadow bg-slate-100 text-slate-500"
            placeholder="Email"
            style={{
              background: 'rgba(245, 245, 250, 1)',
              boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
            }}
          />
          
          <label htmlFor="message" className="mt-6 leading-none">Your message</label>
          <textarea
            id="message"
            className="overflow-hidden self-stretch px-9 pt-5 pb-20 mt-3.5 text-base leading-none rounded-2xl shadow bg-slate-100 text-slate-500"
            placeholder="I want to say that..."
            style={{
              background: 'rgba(245, 245, 250, 1)',
              boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
            }}
          ></textarea>
        </form>
      </div>
      
      {/* Contact Info */}
      <div className="flex flex-col w-full">
        <div className="flex relative flex-col lg:px-20 lg:py-36 sm:px-5 sm:py-10 w-full rounded-xl max-h-[550px]">
        <img 
    loading="lazy" 
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2c3230531ec92c352af753de56ba2f3bca43274724991e4f03a34698bea53c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
    alt="" 
    className="lg:object-cover w-full h-full rounded-2xl absolute inset-0" 
  />
        <img 
    loading="lazy" 
    src="https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2F2a1b83f86b9646b8860dae96b6fb0ce3" 
    alt="" 
    className="sm:object-cover lg:hidden w-full h-full rounded-2xl absolute inset-0" 
  />
  <h3 className="relative self-start text-2xl font-bold tracking-tighter text-white">Contact Information</h3>
          <p className="relative self-start mt-2 text-base leading-7 text-white text-opacity-80">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          
          {contactDetails.map((detail, index) => (
            <div key={index} className={`flex relative gap-5 self-start mt-${index === 0 ? '4' : '2'} whitespace-nowrap`}>
              <img src={detail.icon} alt={`${detail.text} icon`} className="w-5 h-5" />
              <div className="text-base font-semibold leading-none text-white text-opacity-80">{detail.text}</div>
            </div>
          ))}
          
          <div className="flex relative gap-9 self-start mt-6 text-xl text-center text-white">
            <img src={socialIcons[0]} alt="Social Icons" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
