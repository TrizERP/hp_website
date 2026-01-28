import React from 'react';
import Link from 'next/link';

function FooterColumn({ title, items = [], itemRoutes = [] }) {
  return (
    <div className="flex flex-col w-[22%] max-md:w-full max-md:mb-4 sm:w-[45%] sm:mb-2">
      <div className="flex flex-col grow text-sm mt-6 items-start text-white">
        <h4 className="lg:text-xl font-bold sm:text-base">{title}</h4>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Link
              key={index}
              href={itemRoutes[index] || "#"}  // Fallback in case itemRoutes[index] is undefined
              className={`mt-${index === 0 ? '4' : '2'} text-sm text-white font-bold hover:text-sky-600`}
            >
              {item}
            </Link>
          ))
        ) : (
          <p>No items available</p>  // Handle case when items array is empty
        )}
      </div>
    </div>
  //   <div className="flex flex-col w-[22%] max-md:w-full max-md:mb-4 sm:w-[45%] sm:mb-2">
  //   <div className="flex flex-col grow text-sm mt-6 items-start text-black">
  //   <h4 className="text-lg font-bold text-black mb-3 sm:text-base sm:mb-2">{title}</h4>
  //     {items.length > 0 ? (
  //       items.map((item, index) => (
  //         <Link
  //           key={index}
  //           href={itemRoutes[index] || "#"}  // Fallback in case itemRoutes[index] is undefined
  //           className={`mt-${index === 0 ? '4' : '2'} text-sm font-bold hover:text-sky-600`}
  //         >
  //           {item}
  //         </Link>
  //       ))
  //     ) : (
  //       <p>No items available</p>  // Handle case when items array is empty
  //     )}
  //   </div>
  // </div>
  );
}

export default FooterColumn;
