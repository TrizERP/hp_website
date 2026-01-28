// import React from 'react';

// function NewOne() {
//   return (
//     <header className="h-screen flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-white">
//       <h1 className="text-6xl font-bold text-center px-4 max-w-4xl">
//         Unlock Every Student&apos;s Potential with Tailored Learning Solutions
//       </h1>
//     </header>
//   );
// }
// export default NewOne;
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <section className="relative bg-white py-20 overflow-hidden">
//       {/* Background Abstract Shapes */}
//       <div className="absolute inset-0">
//         {/* Top Left Dotted Pattern */}
//         <div className="absolute top-8 left-10">
//           <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
//             {[...Array(5)].map((_, row) =>
//               [...Array(5)].map((_, col) => (
//                 <circle
//                   key={`${row}-${col}`}
//                   cx={10 + col * 15}
//                   cy={10 + row * 15}
//                   r="2"
//                   fill="#4B5563"
//                 />
//               ))
//             )}
//           </svg>
//         </div>
//         {/* Red Triangle */}
//         <div className="absolute top-20 left-40 w-40 h-40">
//           <svg
//             width="100%"
//             height="100%"
//             viewBox="0 0 100 100"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <polygon points="0,0 100,50 0,100" fill="#EF4444" />
//           </svg>
//         </div>
//         {/* Bottom Left Blue Blob */}
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
//         {/* Bottom Right Yellow Blob */}
//         <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
//         {/* Red Circle */}
//         <div className="absolute top-40 right-40 w-10 h-10 bg-red-500 rounded-full"></div>
//         {/* Blue Lines */}
//         <div className="absolute bottom-8 right-24">
//           <svg
//             width="100"
//             height="80"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-blue-500"
//           >
//             <line
//               x1="0"
//               y1="10"
//               x2="100"
//               y2="10"
//               stroke="currentColor"
//               strokeWidth="2"
//             />
//             <line
//               x1="0"
//               y1="30"
//               x2="100"
//               y2="30"
//               stroke="currentColor"
//               strokeWidth="2"
//             />
//             <line
//               x1="0"
//               y1="50"
//               x2="100"
//               y2="50"
//               stroke="currentColor"
//               strokeWidth="2"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Centered Text */}
//         <div className="text-center">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600 leading-tight">
//             Empowering Potential, <br /><t></t> Redefined by Insight
//           </h1>
//           <p className="mt-20 text-gray-700 text-xl">
//             Unlock solutions that adapt, inspire, and drive excellence where
//             innovation meets opportunity to shape brighter outcomes.
//           </p>
//         </div>
//         {/* Images */}
//         <div className="flex justify-between items-center mt-12">
//           {/* Left Image */}
//           <div className="relative">
//             <Image
//               src="/home_images/image1 (2).png" // Replace with actual path
//               alt="Woman"
//               width={200}
//               height={200}
//               className="rounded-full border-4 border-white shadow-lg"
//             />
//           </div>
//           {/* Right Image */}
//           <div className="relative">
//             <Image
//               src="/home_images/image1 (1).png" // Replace with actual path
//               alt="Student"
//               width={200}
//               height={200}
//               className="rounded-full border-4 border-white shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import * as React from "react";
import Service from "./ServicesSection";
function ImageComponent() {
  return (
    <>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2Ff6979ed98c4843369e65ddb0f2b1e92c"
      alt="Gallery image"
      className="object-cover overflow-hidden shrink-0 mt-2 w-full aspect-[2.2] min-h-[20px] min-w-[20px]"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      tabIndex={0}
      role="img"
    />
    <Service />
    </>
    
  );
}

export default ImageComponent;
