import React from "react";

function EmailForm() {
  return (
    <form className="flex flex-auto gap-4 px-7 py-4 bg-white rounded shadow-[0px_10px_50px_rgba(11,11,11,0.08)] text-zinc-500 max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80b545deeddfbb82bc797aeb6c31e8aeb4da447a718d2d674f654cd3eb8b5e1?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
        alt=""
        className="object-contain shrink-0 my-auto w-6 aspect-square"
      />
      <label htmlFor="emailInput" className="sr-only">
        Your email address
      </label>
      <input
        type="email"
        id="emailInput"
        placeholder="Your email address"
        className="lg:flex-auto bg-transparent border-none outline-none"
        aria-label="Your email address"
      />
    </form>
  );
}

export default EmailForm;
