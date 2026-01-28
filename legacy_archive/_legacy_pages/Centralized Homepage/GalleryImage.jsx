import * as React from "react";

function GalleryImage({ src, className, aspectRatio, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`box-border object-cover overflow-hidden shrink-0 aspect-[${aspectRatio}] min-h-[200px] min-w-[300px] ${className}`}
    />
  );
}

export default GalleryImage;
