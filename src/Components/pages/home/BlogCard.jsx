import * as React from "react";

const BlogCard = ({ imageSrc, title, imageClassName }) => {
  return (
    <div className="flex flex-col self-stretch my-auto max-md:mt-10">
      <div className="flex overflow-hidden max-w-[300px] items-center justify-center flex-col bg-white rounded-xl shadow-sm"style={{
      boxShadow: '0 0 10px 4px rgba(00, 00, 00, 0.2)', // custom shadow style
    }}>
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className={imageClassName}
        />
      </div>
      <div className="mt-6 text-sm font-bold font-noto text-center text-black">
        {title}
      </div>
    </div>
  );
};

export default BlogCard;
