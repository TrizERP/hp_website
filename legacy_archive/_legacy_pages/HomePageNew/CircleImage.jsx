import * as React from "react";

export default function CircleImage({ src, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain max-w-full rounded-full shadow-sm aspect-square w-[120px] ${className}`}
    />
  );
}
