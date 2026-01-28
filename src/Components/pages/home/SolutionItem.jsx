import React from "react";

function SolutionItem({ icon, text }) {
  return (
    <div className="flex gap-6 text-1xl leading-none text-black">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
      />
      <div className="my-auto basis-auto">{text}</div>
    </div>
  );
}

export default SolutionItem;
