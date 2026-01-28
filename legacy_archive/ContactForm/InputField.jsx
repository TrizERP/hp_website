import React from "react";

function InputField({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mb-9">
      <label
        htmlFor={id}
        className="self-start ml-5 text-lg font-intersemibold text-neutral-800 max-md:ml-2.5"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="flex shrink-0 mt-1.5 bg-gray-200 rounded-2xl h-[80px] w-full max-md:max-w-full"
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="flex shrink-0 mt-1.5 bg-gray-200 rounded-2xl h-[40px] w-full max-md:max-w-full"
          aria-label={label}
        />
      )}
    </div>
  );
}

export default InputField;
