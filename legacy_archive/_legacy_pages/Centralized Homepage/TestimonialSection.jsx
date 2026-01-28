import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import NavigationArrow from "./NavigationArrow";

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
    <div className="flex flex-col items-center rounded-none mt-20 max-md:mt-10 w-full">
  {/* Heading */}
  <h1 className="lg:text-4xl sm:text-2xl font-bold text-slate-700 font-noto max-md:text-2xl max-md:text-center">
    Our Client&apos;s Review
  </h1>

  {/* Testimonials Section */}
  <div className="flex items-center justify-center gap-10 mt-16 w-full relative px-10 max-md:mt-8 max-md:gap-2 max-md:px-4 max-md:flex-col">
    
    {/* Left Navigation Arrow (Hidden on Small Screens) */}
    <NavigationArrow 
      direction="left" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a292747c051d4854eec32c0a75dde744766c1f53acf3491f0f130609bdfb1560?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
      onClick={prevTestimonial} 
      className="max-md:w-8 max-md:h-8 max-md:absolute max-md:left-2 max-md:top-1/2 max-md:-translate-y-1/2"
    />

    {/* Testimonial Cards with Transition */}
    <div className="relative  flex items-center justify-center w-full max-md:w-[90%] max-md:text-center">
      <TestimonialCard
        image={testimonialData[currentIndex].image}
        name={testimonialData[currentIndex].name}
        review={testimonialData[currentIndex].review}
        className="transition-all duration-500 ease-in-out transform opacity-100 translate-x-0 max-md:text-base max-md:p-4"
      />
    </div>

    {/* Right Navigation Arrow (Hidden on Small Screens) */}
    <NavigationArrow 
      direction="right" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e75f137b4fcdad276b0062bc6eed03ca72b6d41b89fe3161bf503638442405d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
      onClick={nextTestimonial} 
      className="max-md:w-8 max-md:h-8 max-md:absolute max-md:right-2 max-md:top-1/2 max-md:-translate-y-1/2"
    />
  </div>

  {/* Blogs & Articles Section */}
  <h2 className="mt-20 lg:text-4xl sm:text-2xl sm:px-4 sm:text-center font-bold font-noto text-slate-700 text-left max-md:mt-10 max-md:text-2xl max-md:text-center">
    Our Latest Blogs & Articles
</h2>

</div>

  
  );
}

export default TestimonialSection;
