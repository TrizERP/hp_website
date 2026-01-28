import React from "react";
import ImageComponent from "./ImageComponent";

const ImageDisplay = () => {
  return (
    <div className="flex flex-col">
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09e4b93691eae01478e0642b1cc6961247988e452a84f15f8eaabf4fc93b54a?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
        alt="Displayed image"
      />
    </div>
  );
};

export default ImageDisplay;
