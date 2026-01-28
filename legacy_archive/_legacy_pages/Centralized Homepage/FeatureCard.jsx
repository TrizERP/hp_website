import * as React from "react";

export default function FeatureCard({ icon, title }) {
  return (
    <div className="flex items-center gap-4 px-4 py-10 bg-white rounded-xl shadow-[0px_0px_25px_rgba(36,174,139,0.45)] md:flex-row md:text-left flex-col text-center py-6">
  <img
    loading="lazy"
    src={icon}
    alt={`${title} feature icon`}
    className="object-contain shrink-0 aspect-square w-[100px] md:w-[80px] max-md:w-[60px]"
  />
  <div className="my-auto text-md font-bold text-black md:text-left max-md:text-sm">{title}</div>
</div>

  );
}
