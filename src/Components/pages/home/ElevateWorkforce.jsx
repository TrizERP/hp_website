import React from "react";
import HeroSection from "./HeroSection";
function ElevateWorkforce() {
  return (
    <div className="rounded-none">
      <div className="lg:flex gap-5 lg:px-20 max-md:flex-col">
        <HeroSection />
        <div className="flex flex-col ml-18 mt-15 lg:w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd879d073e874c75e859f8a1efedf97a2bb41bf4f74fbd14dba12fba54c5a7f?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
            alt="Illustration representing workforce excellence"
            className="object-contain grow w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ElevateWorkforce;
