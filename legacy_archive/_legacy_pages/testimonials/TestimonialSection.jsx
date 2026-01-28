import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Grace Turner",
    role: "Director",
    image:
      "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/768ebcc2b147c8547f4610cba13f7834ea4e657718b2bc96365f091cad88d76c?apiKey=f69a2eac66bd4b989d259168a526b24c&",
    content:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    theme: "light",
  },
  {
    name: "Linda Carter",
    role: "Analyst",
    image:
      "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/e3c4ba3623e672b86af6722546562b9aa8a52f9f488a76071b32071c4336ddf0?apiKey=f69a2eac66bd4b989d259168a526b24c&",
    content:
      "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
    theme: "dark",
  },
  {
    name: "Alex Walker",
    role: "Attorney",
    image:
      "https://cdn.builder.io/api/v1/image/assets/f18a54c668db405eb048e2b0a7685d39/390f1e3f618bfd3195b68bc688a2667a8502210f138c028f57e861723359bd73?apiKey=f69a2eac66bd4b989d259168a526b24c&",
    content:
      "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
    theme: "light",
  },
];

function TestimonialSection() {
  return (
    <div className="lg:flex flex-col items-start lg:mx-40 sm:mx-10">
      <div className="flex gap-5 lg:text-xl sm:text-lg font-semibold leading-9 text-sky-900 uppercase whitespace-nowrap">
        <div className="lg:px-2.5 rounded bg-teal-400 bg-opacity-10">
          testimonials
        </div>
        <div className="shrink-0 my-auto w-24 h-0.5 border-2 border-sky-900 border-solid" />
      </div>
      <h2 className="mt-7 lg:text-5xl sm:text-3xl font-bold leading-none text-neutral-700 max-md:max-w-full lg:max-md:text-4xl">
        What Our Customers Say
      </h2>
      <p className="mt-6 lg:text-xl sm:text-lg font-medium leading-9 text-zinc-600 lg:w-[679px] sm:w-full lg:max-md:max-w-full">
        Discover the Success Stories and Satisfaction of Clients Who Have
        Benefited from Our Expertise and Personalized Financial Guidance
      </p>
      <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="lg:flex gap-10 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
