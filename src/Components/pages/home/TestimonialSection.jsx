"use client";
import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import NavigationArrow from "./NavigationArrow";
import TestimonialList from "./TestimonialList";

const testimonialData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/753c4f53ae51af5fa9a317d3add5bf52d13892f22c8001083ea9995856590cf6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    name: "Meghna Mehta",
    review: "Scholar Clone is a comprehensive solution transforming education management with seamless integration of ERP, LMS, and career counseling tools."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/753c4f53ae51af5fa9a317d3add5bf52d13892f22c8001083ea9995856590cf6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    name: "Sargun Mehta",
    review: "Scholar Clone is a comprehensive solution transforming education management with seamless integration of ERP, LMS, and career counseling tools."
  }
];

function TestimonialSection() {
  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Handle the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length); // Loop back to 0 after the last item
  };

  // Handle the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length); // Loop to the last item when going backward
  };

  return (
    <>
    {/* <div className="flex flex-col items-center rounded-none mt-40">
      <h1 className="text-4xl font-bold text-black max-md:max-w-full max-md:text-2xl font-noto">
        Our Client&apos;s Review
      </h1>
      <div className="flex items-center justify-center gap-10 mt-16 w-full relative px-10">
        
        <NavigationArrow 
          direction="left" 
          src="/home_images/Frame 245.png" 
          onClick={prevTestimonial} 
        />
        
        <div className="relative flex items-center justify-center w-full">
          <TestimonialCard
            image={testimonialData[currentIndex].image}
            name={testimonialData[currentIndex].name}
            review={testimonialData[currentIndex].review}
            className="transition-all duration-500 ease-in-out transform opacity-100 translate-x-0"
          />
        </div>

        <NavigationArrow 
          direction="right" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e75f137b4fcdad276b0062bc6eed03ca72b6d41b89fe3161bf503638442405d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
          onClick={nextTestimonial} 
        />
      </div>
    </div> */}
    <div className="mt-40"></div>
    <section className="bg-blue-100 bg-opacity-80">
    <h1 className="mt-10 lg:px-[100px] sm:px-10 mb-10 text-center font-inter lg:text-4xl sm:text-2xl" style={{
      color:'rgba(17, 134, 254, 1)'
     }}>
     Empowering Learning and Growth Across Education and Enterprise
     </h1>
     <TestimonialList />
     <div className="mt-10"></div>
     </section>
    </>
  );
}

export default TestimonialSection;
