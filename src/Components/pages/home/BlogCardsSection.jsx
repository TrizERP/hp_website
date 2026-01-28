import * as React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/338e1d9d83a04dc4f5023e6c9c67b14a3035e8f2d85f1e39af35aae2cbea3da0?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "A Provost's Guide to Effective Curriculum Design & Compliance",
    imageClassName: "object-contain w-full aspect-[0.89] max-w-[300px]"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0efa2be08deb42ad5ac839820ee9a10edd094be49060ee1953b450b7ec69e2f9?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "How Accessibility Audits Pave the Way for Inclusive Learning Experiences?",
    imageClassName: "object-contain w-full aspect-[0.89] max-w-[300px]"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0d380753e19e2dda33d915926089714138ae61bb2df4d3b0670d7dea42af78a?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Improving Decision-Making in Manuscript Screening with AI Insights",
    imageClassName: "object-contain w-full aspect-[0.87] max-w-[300px]"
  }
];

function BlogCardsSection() {
  return (
    <>
    <h2 className="mt-36 text-4xl font-bold text-center font-noto text-black max-md:mt-10 max-md:max-w-full max-md:text-3xl">
        Our Latest Blogs & Articles
      </h2>
    <div className="px-20 pt-10 rounded-xl mb-10">
      <div className="flex gap-40 max-md:flex-col">
        {blogData.map((blog, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <BlogCard
              imageSrc={blog.imageSrc}
              title={blog.title}
              imageClassName={blog.imageClassName}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default BlogCardsSection;
