import * as React from "react";

const ImageCard = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 max-w-full rounded-full shadow-sm aspect-square w-[120px] max-md:mt-8"
    style={{
      boxShadow: '0 0 8px 1px rgba(36, 173, 139, 0.45)', // custom shadow style
    }}
  />
);

export default ImageCard;
