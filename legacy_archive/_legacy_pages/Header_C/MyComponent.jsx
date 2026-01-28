import React, { useState, useEffect } from "react";
import Link from 'next/link';
function MyComponent() {
    const [visible, setVisible] = useState(false);
  const featuresData = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d981de9461c0de9797a5ff3f68b1045987f9a007d3f8f72c73883ae521eb5793?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
      title: "Administrative Efficiency",
      description: "Streamline operations with precision, freeing time for meaningful impact.",
      link: "https://example.com/admin-efficiency"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74ac2a2c35d71a48e927916cdbd551c621366ba299a84551879e402d5dc7b46f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
      title: "Academic Excellence",
      description: "Equip for tomorrow with tailored pathways and skill-driven programs.",
      link: "https://example.com/academic-excellence"
    },
    {
        imgSrc: "/center_home_images/Frame 267.png",
        title: "Career Readiness",
        description: "Ignite minds with unparalleled resources and transformative learning tools.",
        link: "https://example.com/academic-excellence"
      },
      {
        imgSrc: "/center_home_images/Frame 267-1.png",
        title: "Quality & Process Improvement",
        description: "Redefine success through data-driven decisions and agile methodologies.",
        link: "https://example.com/academic-excellence"
      },
      {
        imgSrc: "/center_home_images/Frame 267-2.png",
        title: "AI-Powered Personalized Adaptive Learning",
        description: "Your personalized assistant for smarter workflows and instant solutions.",
        link: "https://example.com/academic-excellence"
      },
      {
        imgSrc: "/center_home_images/Frame 267-4.png",
        title: "AI-Driven Chat Bot",
        description: "Elevate engagement with intuitive, real-time interactions.",
        link: "https://example.com/academic-excellence"
      },
      {
        imgSrc: "/center_home_images/Frame 267-5.png",
        title: "Engagement & Communication",
        description: "Foster connection, clarity, and collaboration in every interaction.",
        link: "https://example.com/academic-excellence"
      },
      {
        imgSrc: "/center_home_images/Frame 267-3.png",
        title: "Leadership Development & Talent Management",
        description: "Redefine success through data-driven decisions and agile methodologies.",
        link: "https://example.com/academic-excellence"
      },         
  ];
  useEffect(() => {
    // Fade in effect when the component mounts
    setVisible(true);
    

  }, []);
  return (
    <div className={`flex overflow-hidden flex-col items-center px-6 pt-5 pb-4 m-4 bg-white rounded-xl shadow-sm max-md:px-3 max-md:pb-10 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{
        boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
      }}>
      <div className="w-full max-w-[1450px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* First Section with clickable images */}
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <Link href="/" className="flex overflow-hidden flex-col py-0.5 pr-5 w-full text-center rounded-lg max-md:mt-5">
              <img
                loading="lazy"
                src="/center_home_images/Group 242.png"
              />
            </Link >
          </div>

          {/* Second Section with clickable images */}
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <Link href="https://triz-apphigher-education.vercel.app/" className="flex overflow-hidden flex-col grow py-0.5 pr-5 w-full text-center rounded-lg max-md:mt-5">
              <img
                loading="lazy"
                src="/center_home_images/Group 243.png"
              />
            </Link>
          </div>

          {/* Third Section with clickable images */}
          <div className="flex flex-col ml-5 mr-[-18px] w-[33%] max-md:ml-0 max-md:w-full">
            <Link href="https://example.com/corporate" className="flex overflow-hidden flex-col grow py-0.5 pr-5 w-full text-center rounded-lg max-md:mt-5">
              <img
                loading="lazy"
                src="/center_home_images/Group 244.png"
              />
            </Link >
          </div>
        </div>

        {/* Top Features Section */}
        <div className="flex items-center justify-center mt-2">
          <img
            loading="lazy"
            src="/center_home_images/clean 1.png"
            alt="Top Features"
            className="w-[50px] h-auto"
          />
          <span className="text-md font-noto ml-2 text-slate-700">Our Top Features</span>
        </div>

        {/* Fourth Section (Grid of Items) */}
        <div className="self-stretch mt-8 max-md:mt-4"> {/* Reduced margin-top */}
  <div className="grid grid-cols-4 gap-6"> {/* Increased gap between items */}
    {/* Map through the featuresData array to create grid items */}
    {featuresData.map((feature, index) => (
      <div key={index} className="flex flex-1 flex-auto gap-3"> {/* Adjusted gap here as well */}
        <Link href={feature.link} className="flex flex-1 flex-auto gap-3 items-start"> {/* Adjusted gap here as well */}
          <img
            loading="lazy"
            src={feature.imgSrc}
            className="object-contain shrink-0 self-start aspect-square w-[35px]"
          />
          <div className="flex flex-col ">
            <div className="text-sm font-bold font-noto text-left text-slate-700"> {/* Reduced font size */}
              {feature.title}
            </div>
            <div className="self-start text-xs font-noto text-slate-700 text-opacity-80">
              {feature.description}
            </div>
          </div>
        </Link >
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}

export default MyComponent;
