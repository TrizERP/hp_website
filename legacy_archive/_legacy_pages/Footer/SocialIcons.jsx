import React from 'react';

const socialIcons = [
  { src: "/footer_c_images/Social Icons-3.png", alt: "Facebook", link: "https://facebook.com/LMS.ScholarClone/" },
  { src: "/footer_c_images/images.png", alt: "X", link: "https://x.com/ScholarClone" },
  { src: "/footer_c_images/Social Icons.png", alt: "Instagram", link: "https://instagram.com/scholarclone/" },
  { src: "/footer_c_images/Social Icons-1.png", alt: "LinkedIn", link: "https://linkedin.com/company/scholar-clone-pvt-ltd/" },
];

function SocialIcons() {
  return (
    <div className="flex lg:gap-8 max-md:max-w-full sm:gap-4 sm:justify-center md:mb-[5px]">
      {socialIcons.map((icon, index) => (
        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain shrink-0 aspect-square lg:w-[30px] sm:w-[20px] hover:opacity-75 transition-opacity"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
