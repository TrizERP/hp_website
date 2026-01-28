import * as React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} service icon`}
        className="object-contain lg:w-12 md:w-12 sm:w-5 aspect-square"
      />
      <div className="text-base md:text-lg lg:text-xl font-semibold">{title}</div>
    </div>
  );
};

export default ServiceCard;
