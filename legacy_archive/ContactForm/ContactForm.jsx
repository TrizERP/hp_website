import React from "react";
import InputField from "./InputField";
import ContactInfo from "./ContactInfo";

function ContactForm() {
  const formFields = [
    { label: "Enter Your Full name", type: "text" },
    { label: "Enter Your Email Address", type: "email" },
    { label: "Enter Your Mobile Number", type: "tel" },
    { label: "Enter Your Message", type: "textarea" },
  ];

  return (
    <div className="overflow-visible -mt-40 mb-20 mx-20 px-20 py-24 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <form className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            {formFields.map((field, index) => (
              <InputField key={index} label={field.label} type={field.type} />
            ))}
            <div className="flex flex-wrap gap-8 self-center mt-11 max-w-full w-[582px] max-md:mt-10">
              <button
                type="submit"
                className="overflow-hidden  self-stretch p-2.5 text-lg font-medium text-white rounded-xl bg-slate-500 shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
                style={{
                  background:'rgba(61, 96, 149, 1)',
                }}
              >
                Send Message
              </button>
              <div className="flex-auto text-lg font-inter text-neutral-800 w-[323px]">
                We appreciate your message! <br />
                Our team will connect with you soon.
              </div>
            </div>
          </form>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactForm;
