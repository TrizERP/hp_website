import React from 'react';

const ClientLogo = ({ src, alt }) => {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt} 
      className="object-contain w-full aspect-[19.23] max-md:max-w-full" 
    />
  );
};

export default ClientLogo;
