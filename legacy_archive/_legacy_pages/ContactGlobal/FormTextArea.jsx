import React from 'react';
import PropTypes from 'prop-types';

function FormTextArea({ label }) {
  // Ensure `label` is a string and handle it safely
  const normalizedLabel = label ? label.toLowerCase().replace(/\s+/g, '-') : ''; // Replace spaces with dashes for id consistency

  return (
    <div className="lg:mt-8 sm:mt-0 max-md:max-w-full">
      <div className="lg:flex lg:gap-5 sm:gap-0 max-md:flex-col">
        <div className="flex flex-col lg:w-[35%] sm:w-full max-md:ml-0 max-md:w-full">
          <label htmlFor={normalizedLabel} className="lg:mt-6 sm:mt-2 ml-0 lg:text-lg sm:text-sm font-medium text-left font-intermedium text-black max-md:mt-10">
            {label}
          </label>
        </div>
        <div className="flex flex-col lg:ml-5 sm:mt-2 lg:mt-0 lg:w-[81%] sm:w-full max-md:ml-0 max-md:w-full">
          <textarea 
            id={normalizedLabel} 
            name={normalizedLabel} 
            className="flex overflow-hidden flex-col grow pt-16 w-full rounded-2xl bg-blue-100 bg-opacity-80 max-md:pt-10 max-md:mt-5 max-md:max-w-full"
            aria-label={label}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

// Prop validation
FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormTextArea;
