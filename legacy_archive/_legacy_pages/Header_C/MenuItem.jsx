import React from 'react';

const MenuItem = ({ icon, label }) => (
  <div className="flex overflow-hidden gap-5 px-5 py-2.5 bg-white rounded-md">
    <img loading="lazy" src={icon} alt={`${label} icon`} className="object-contain shrink-0 aspect-square w-[30px]" />
    <div className="grow shrink my-auto w-[174px]">
      {label}
    </div>
  </div>
);

export default MenuItem;
