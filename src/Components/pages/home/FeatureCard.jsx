import * as React from "react";

export default function FeatureCard({ icon, title }) {
  return (
    <div className="flex overflow-hidden gap-4 px-2.5 py-10 bg-white rounded-xl shadow-[0px_0px_25px_rgba(36,174,139,0.45)]">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} feature icon`}
        className="object-contain shrink-0 max-w-full aspect-square w-[100px]"
      />
      <div className="my-auto text-md font-bold text-black">{title}</div>
    </div>
  );
}
