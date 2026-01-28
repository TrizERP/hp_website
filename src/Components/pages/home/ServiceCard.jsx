import * as React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex gap-2 whitespace-nowrap">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} service icon`}
        className="object-contain shrink-0 w-10 aspect-square"
      />
      <div className="my-auto">{title}</div>
    </div>
  );
};

export default ServiceCard;
