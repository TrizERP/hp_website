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

//THIS BELOW CODE WAS REMOVED ON 24 DEC'24 06:25 PM
// import * as React from "react";

// function ImageComponent() {
//   return (
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2F12405dbf109945dba2ed90bc845e9448"
//       alt="Gallery image"
//       className="object-cover lg:w-full lg:h-[490px] min-w-[200px] sm:w-full sm:h-auto md:w-full md:h-auto"
//       onKeyDown={(e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//           e.preventDefault();
//           e.currentTarget.click();
//         }
//       }}
//       tabIndex={0}
//       role="img"
//     />
//   );
// }

// export default ImageComponent;

import * as React from "react";
function ImageComponent() {
  return (
    <>
    <div className="relative mt-10 mx-10">
    <div className="flex  overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("home_images/Hero Seaction (3).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    
  }}
  >
<div className="flex flex-col w-[60%] pl-10 pt-28 items-start justify-start max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start justify-start w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl text-white font-inter max-md:max-w-full max-md:text-4xl">
              Empowering Tomorrow&rsquo;s Leaders Today
              </div>
              <div className="text-xl mt-12 font-intermedium text-justify text-white pr-60 max-md:mt-10 max-md:max-w-full">
              Unlock seamless solutions that adapt, inspire, and drive excellence where innovation meets opportunity to shape brighter outcomes.
              </div>
              <div className="text-[15px] font-interregular mt-4 text-gray-300 pr-40 max-md:mt-10 max-md:max-w-full">
              Schedule a Demo
              </div>
              <div className="flex flex-row gap-10 items-start text-sm justify-start">
              <button 
                className="lg:flex md:hidden sm:hidden bg-blue-500 text-white py-1 px-6 rounded-2xl font-inter shadow-lg hover:bg-blue-600"
              onClick={() => {}}
              tabIndex={0}
              aria-label="Book Your Demo Now"
            >
              Get Started
            </button>
              </div>
            </div>
          </div>
    </div>
    </div>
    <h1 className="text-3xl font-intersemibold text-center mt-20" style={{
      color:'rgba(17, 134, 254, 1)'
    }}>
    The Hidden Costs of Outdated School Systems: Is Your Institution Keeping Up?
    </h1>
    <div className="relative mt-10 mx-10">
    <div className="flex min-h-screen overflow-hidden flex-col justify-center rounded-3xl items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("home_images/Group 290 (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-[-20px] px-10 max-w-full h-full bg-white text-white bg-opacity-0 w-full max-md:px-5 max-md:pb-24">
    <div className="flex flex-row items-end justify-end">
    <button 
    className="lg:flex md:hidden sm:hidden bg-slate-600 text-white py-2 px-[20px] w-[140px] h-[35px] rounded-xl text-xs font-inter shadow-lg hover:bg-slate-700"
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
  Get a free demo
</button>
</div>
  </div>
    </div>
  </div>
  </>
  );
}

export default ImageComponent;
