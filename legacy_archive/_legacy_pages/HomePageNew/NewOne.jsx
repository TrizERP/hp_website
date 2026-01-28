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
import {useRouter} from "next/router";
import Service from './ServicesSection';
const HERO_BUTTONS = [
  { text: "Get a free Demo Now!",bgColor: 'rgb(255, 255, 255)',color: 'rgb(0, 0, 0)' },
  //{ text: "Explore Scholar Clone", bgColor: 'rgb(255, 255, 255)' , color: 'rgb(0, 0, 0)' }
];
 function ImageComponent() {
  const router = useRouter();     
       
  const handleClick = () => {
    router.push("/contactGlobal"); 
  };
   return (
     <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
     <div className="relative mt-10">
     <div className="lg:flex sm:hidden overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full"
     
 
   >
 <div className="flex flex-col w-full pt-10 items-center justify-center max-md:ml-0 max-md:w-full">
             <div className="flex flex-col items-center justify-center w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
               <div className="lg:text-7xl sm:text-5xl text-white text-center font-poppins max-md:max-w-full max-md:text-4xl">
               One platform,<br/>Endless possibilities.
               </div>
               <div className="flex gap-10 mt-16 max-w-full items-center justify-center text-lg w-full max-md:mt-10">
              {HERO_BUTTONS.map((button, index) => (
                <button key={index}
                 className={`gap-2.5 self-stretch px-5 py-1 bg-sky-500 font-inter rounded-3xl transition-all duration-300 transform hover:scale-105`}
                 tabIndex="0"
                 style={{
                    background: button.bgColor,
                    color: button.color,
                 }}
                 onClick={handleClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
             </div>
           </div>
     </div>
     <div className="sm:flex lg:hidden overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full"style={{
     backgroundImage: 'url("/home_images/Group 1321314662 (2).png")',
     backgroundSize: 'contain',
     backgroundPosition: 'center center',
     backgroundRepeat: 'no-repeat',
     height: '48vh',
     
   }}
   >
 <div className="flex flex-col w-full pt-10 items-center justify-center max-md:ml-0 max-md:w-full">
             <div className="flex flex-col items-center justify-center w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
               <div className="lg:text-7xl sm:text-1xl text-white text-center font-poppins max-md:max-w-full max-md:text-3xl">
               One platform,<br/>Endless possibilities.
               </div>
               <div className="flex gap-10 lg:mt-16 sm:mt-1 max-w-full items-center justify-center lg:text-lg sm:text-xs w-[80%] max-md:mt-10">
              {HERO_BUTTONS.map((button, index) => (
                <button key={index}
                 className={`gap-2.5 self-stretch px-3 py-1 bg-sky-500 font-inter sm:rounded-3xl transition-all duration-300 transform hover:scale-105`}
                 tabIndex="0"
                 style={{
                    background: button.bgColor,
                    color: button.color,
                 }}
                 onClick={handleClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
             </div>
           </div>
     </div>
     </div>
     <h1 className="lg:mt-40 sm:mt-30 lg:px-80 text-center font-inter lg:text-4xl sm:text-2xl" style={{
      color:'rgba(17, 134, 254, 1)'
     }}>
     Holistic Solutions for Seamless Management and Growth
     </h1>
     <div className="relative mt-10 lg:mx-[200px]">
     <div className="lg:flex sm:hidden min-h-screen overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full"style={{
     backgroundImage: 'url("/home_images/00 (1).png")',
     backgroundSize: 'cover',
     backgroundPosition: 'center center',
     backgroundRepeat: 'no-repeat',
   }}
   ></div>
  <div className="sm:flex lg:hidden mb-10 overflow-hidden relative flex-col rounded-3xl w-full min-h-[200px] max-md:pl-5 max-md:max-w-full" 
   style={{
     backgroundImage: 'url("/home_images/00 (1).png")',
     backgroundSize: 'contain',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
   }}
></div>


   </div>
   <h1 className="lg:mt-40 sm:mt-5 lg:px-40 text-center font-inter lg:text-4xl sm:text-2xl" style={{
      color:'rgba(17, 134, 254, 1)'
     }}>
   Scholar Clone in Your Pocket Mobile Apps for Everyone
   </h1>
   <Service />
   </div>
   );
 }
 
 export default ImageComponent;
 
