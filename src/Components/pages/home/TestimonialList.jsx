import React from "react";
import TestimonialCard from "./TestimonialCardNew";

const testimonials = [
  {
    quote: `"Our students and parent love whole child concept as on single platform we are getting main stream curricula, social and emotional learning ( SEL) science, technology. Engineering and math soft skill and vocational training and many more."`,
    author: "The radiant  international school",
    authorImage: "/home_images/clients/1.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"The support we received from scholar clone team is extra ordinary as government organization we expect 24x7 support when we work with scholar clone for integrated academic platform for learning out come solutions."`,
    author: "Silvassa Government",
    authorImage: "/home_images/clients/2.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"Scholar clone team provide us learning out come, learning objective and learning indicator solutions we deployed this solutions in more than 12000 schools across the state we found state of the art solutions and very good supports from Scholar clone team."`,
    author: "Gujarat Government",
    authorImage: "/home_images/clients/3.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"I have worked in academics for over 20 years. The impact of personalized learning learner learning outcome improved, engagement improved and it decrease the load of teacher to knowing each student detail data and student profile."`,
    author: "Jayesh bane",
    authorImage: "/home_images/clients/4.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"We are working with small kids where students and parents involvement is highly expected through teacher and student parent mobile app  we improved our foundation learning which is important pillar for student development."`,
    author: "Farida Mam",
    authorImage: "/home_images/clients/5.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"We are happy to work with Scholar clone as we improved student learning  in our school, the important part I observed is map and aligned content it save teacher and student time and shift from rote learning to personalized learning through data."`,
    author: "Manisha kerkar",
    authorImage: "/home_images/clients/6.png",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  }
];

export default function TestimonialList() {
  const testimonialWidth = 660; // Width of each testimonial card
  const containerWidth = testimonialWidth * testimonials.length; // Total width of all testimonials

  return (
    <section className="flex flex-col w-full">
      <div className="mt-0 max-md:mt-10 relative w-full">
        {/* Testimonial container with smooth scrolling animation */}
        <div
          className="flex relative gap-5 top-0 left-0 h-full animate-scroll"
          style={{
            width: `${containerWidth * 2}px`, // Container width to accommodate both the original and duplicate sets
          }}
        >
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.author + index} className="">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                authorImage={testimonial.authorImage}
                ratingImage={testimonial.ratingImage}
                companyLogo={testimonial.companyLogo}
              />
            </div>
          ))}

          {/* Duplicate the testimonials to create a continuous loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author + "-duplicate" + index}
              className=""
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                authorImage={testimonial.authorImage}
                ratingImage={testimonial.ratingImage}
                companyLogo={testimonial.companyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
