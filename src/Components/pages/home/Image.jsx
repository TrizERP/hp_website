import React from "react";

const ImageComponent = () => {
  return (
    <div className="rounded-2xl overflow-hidden pt-5 lg:mx-2 lg:mt-20 sm:mt-5  flex justify-center">
    <img
      loading="lazy"
      src="./home_images/image.png"
      className="object-contain lg:w-[80%] sm:w-[75%] aspect-[2.51]"
      alt="Content image"
    />
    </div>
  );
};

export default ImageComponent;
