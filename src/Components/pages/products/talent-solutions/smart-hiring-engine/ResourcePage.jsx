import React from "react";
import ResourceButton from "./ResourceButton";
import Contact from "../Contact/ContactCard";
import Scroll from "@/Components/layout/scroll-to-top/ScrollToTop";
const resourceTypes = [
  "Blogs/Vlogs",
  "Webinar",
  "Playback",
  "E-book",
  "Client Testimonial",
  "News Letter",
  "Edu News",
  "Future"
];

function ResourcePage() {
  return (
    <main className="flex flex-col text-xl rounded-none overflow-x-hidden">
     <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5dc64c4f987e181bb00649e7979a67f12917a4040747c7021b68464f6a96168?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
        alt="Resource page header"
        className="object-contain w-full aspect-[2.6] max-md:max-w-full"
      />
      <section className="flex flex-wrap mt-12 items-center sm:mx-2 lg:mx-0">
        <div className="flex flex-wrap gap-3 justify-center items-center w-full text-lg text-white max-md:gap-2 max-md:max-w-full">
          {resourceTypes.map((type, index) => (
            <ResourceButton key={index} text={type} className="lg:px-3 lg:py-2 sm:px-1.5 sm:py-1 bg-blue-600 rounded-md lg:text-sm sm:text-xs max-md:text-xs" />
          ))}
        </div>
        <div className="flex overflow-hidden flex-col lg:px-12 lg:py-4 sm:px-6 sm:py-2 lg:mt-24 sm:mt-20 sm:mx-10 lg:ml-40 sm:items-center max-w-full text-black whitespace-nowrap rounded-2xl border-sky-500 lg:border-solid lg:border-[5px] sm:border-solid sm:border-[2px] lg:w-[310px] sm:w-[90%] max-md:px-5 max-md:mt-10">
                <img loading="lazy" src="/resources/Group 125.png" alt="Group 125" className="lg:w-full sm:w-[200px] h-auto object-contain" />
        </div>
      </section>
      {/* Contact Us Section */}
      <div className="contact-us w-full mt-16">
          <h1 className="lg:text-4xl sm:text-2xl font-bold text-center text-sky-500 mb-12">
            Contact Us
          </h1>
          <Contact />
        </div>
      <Scroll />
    </main>
  );
}

export default ResourcePage;

