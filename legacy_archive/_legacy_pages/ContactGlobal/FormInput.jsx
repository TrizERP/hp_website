import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ label }) {
  // Ensure `label` is a string before calling `.toLowerCase()`
  const normalizedLabel = label ? label.toLowerCase() : ''; // Fallback to empty string if `label` is undefined or invalid

  return (
    <div className="flex flex-wrap lg:gap-5 sm:gap-2 justify-between lg:mt-5 sm:mt-2 first:mt-0 lg:text-lg sm:text-sm font-intermedium text-left text-black whitespace-nowrap max-md:max-w-full">
      <label htmlFor={normalizedLabel} className="my-auto">
        {label}
      </label>
      <input
        type={normalizedLabel === 'email' ? 'email' : 'text'}
        id={normalizedLabel}
        name={normalizedLabel}
        className="flex shrink-0 max-w-full rounded-2xl bg-blue-100 bg-opacity-80 lg:h-[40px] sm:h-[30px] lg:w-[300px] sm:w-full"
        aria-label={label}
      />
    </div>
  );
}

// Add PropTypes to validate props and catch issues earlier in development
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
