import React from 'react';

const socialIcons = [
  { src: "/footer_c_images/Social Icons-3.png", alt: "Facebook" },
  { src: "/footer_c_images/Social Icons-2.png", alt: "Twitter" },
  { src: "/footer_c_images/Social Icons.png", alt: "Instagram" },
  { src: "/footer_c_images/Social Icons-1.png", alt: "LinkedIn" },
  { src: "/footer_c_images/Social Icons-4.png", alt: "YouTube" }
];

function SocialIcons() {
  return (
    <div className="flex lg:gap-8 max-md:max-w-full sm:gap-4 sm:justify-center  md:mb-[5px]">
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 aspect-square lg:w-[30px] sm:w-[20px]"
        />
      ))}
    </div>
  );
}

export default SocialIcons;
