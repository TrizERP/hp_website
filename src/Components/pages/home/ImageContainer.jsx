import React from "react";

function ImageContainer() {
  return (
    <div className="flex flex-col ml-5 lg:w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center px-16 py-11 mt-2.5 w-full bg-sky-100 rounded-[35px_4px_35px_4px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1106991607fa4cf2ad610b334d10eb6c51a5cefda06d0855272dc0522f7d469?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
          alt="Scholar Clone's solutions illustration"
          className="object-contain w-full aspect-square rounded-[35px_4px_35px_4px] shadow-[4px_4px_50px_rgba(5,58,58,0.06)] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default ImageContainer;
