import React, { useState } from 'react';

function MemberImage({ src, alt, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {src && (
        <>
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className={`object-cover w-full h-full rounded-3xl shadow-[8px_8px_15px_rgba(0,0,0,0.25)] max-md:mt-10 transition-all duration-300 ${
              isHovered ? 'blur-sm' : ''
            }`}
          />
          {isHovered && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-3xl">
              {text}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MemberImage;
