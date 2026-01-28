import React from 'react';

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center">
    <button 
      onClick={handleScrollToTop}
      className="flex flex-col justify-center items-center mb-5 px-2.5 mt-8 bg-white rounded-full h-[40px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)] w-[40px] max-md:mt-6"
      aria-label="Scroll to top"
    >
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be76f4743b073701bfb29abc287c6251dd378a6500dcd2427b7e508322a0e015?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="" className="object-contain w-full h-full aspect-[0.75]" />
    </button>
</div>
  );
}

export default ScrollToTop;
