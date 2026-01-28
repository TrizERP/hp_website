import React from "react";

const BenefitCard = ({ icon, title }) => {
  return (
    <div className="flex gap-6 self-start mt-2">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 self-start rounded-none aspect-square w-[39px]"
        alt=""
      />
      <div className="w-full text-1xl font-semibold leading-8 text-black">
        {title}
      </div>
    </div>
  );
};

export default BenefitCard;
