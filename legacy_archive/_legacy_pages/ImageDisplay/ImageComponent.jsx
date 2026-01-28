import React from "react";

const ImageComponent = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src || "/new cor/Company logos.png"}
      alt={alt}
      className="object-contain px-40 mt-5 mx-auto w-full aspect-[23.26] max-md:max-w-full"
    />
  );
};

export default ImageComponent;
