import React from 'react';
import OfferingColumn from './OfferingColumn';
import ValueColumn from './ValueColumn';

const offeringData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8998e1a447c6664ecde56b1febc822aab9d14c452801c4e92b4f08f9c3ad2b77?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "School Management System"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1199af64a98bdf8fa85bcb0f1f0e8d9f83ea9e722d2dbcf8121834fe4ffb0fe8?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Learning Management Systemm"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f92bb3570d710ff6a27a3de5bf89a5895222c3d7b1a71a78cef980040a278d4?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Career Counselling"
  }
];

const valueData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a3d9fca7b4fc5c701be4703b84fed0d8ab71ff9961fdf7644042124bfc15bf?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Accountability"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2afd91b236da4dea7e3800b139a1153773fe42c52ddcddc085d855b98e316da9?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Student Success"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7f4187060eb3a8bc989e36b52d46062907be48000b286aff1b86e8509825b6c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Organizational Growth"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/795c0707071acedab8ff59efca097c565e8e655d459984e9257eafbee78f5ddf?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Organizational Leadership"
  }
];

function WhatWeOffer() {
  return (
    <main className="flex flex-col items-center lg:pt-28 sm:pt-[450px]">
      <section className="image-container mt-[100px] md:mt-[390px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/011b67d6c908201d1d22f9afa63229d42faa9b489934fcb61f4b437fe10cea8d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt="Descriptive image content"
          loading="lazy"
          className="object-contain w-[50px] sm:w-[50px] md:w-[150px] lg:w-[100px] aspect-square"
        />
      </section>

      <section className="flex flex-col items-center bg-gray-100 px-4 py-8 md:px-32 md:py-8 mb-[500px]">
        <h1 className="lg:text-3xl sm:text-2xl md:text-3xl font-bold text-amber-500">
          What We Offer
        </h1>
        <p className="self-start mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-black max-w-full text-justify">
          Scholar Clone is a forward-thinking company dedicated to transforming educational experiences through innovative solutions. We specialize in providing a comprehensive school management system that streamlines administrative tasks, enhances communication, and improves operational efficiency. Our Learning Management System (LMS) empowers educators and students with tools for interactive learning, assessment, and progress tracking, tailored to modern educational needs. In addition, our career counseling services guide students toward fulfilling their academic and professional aspirations, ensuring they make informed decisions about their future. At Scholar Clone, we are committed to fostering an environment where education and technology come together to create meaningful impacts on students&apos; lives.
        </p>

        <section className="mt-4 md:mt-10 w-full">
          <div className="flex gap-20 sm:flex-col sm:items-center lg:flex-row lg:items-start">
            {offeringData.map((offering, index) => (
              <OfferingColumn key={index} imageSrc={offering.imageSrc} title={offering.title} />
            ))}
          </div>
        </section>
      </section>

      <section className="flex flex-col items-center bg-gray-100 px-4 py-8 md:px-32 md:py-8 mb-[100px]">
        <h2 className="mt-6 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-bold text-amber-500">
          The Value You Unlock
        </h2>
        
        <ul className="self-start mt-6 sm:mt-10 text-xs sm:text-sm md:text-xl text-black">
          <li className='text-justify'>Automating daily tasks reduces administrative burden and saves valuable time for staff and management.</li>
          <li className='text-justify'>Tracking student progress with real-time data and personalized learning tools improves performance through targeted interventions.</li>
          <li className='text-justify'>Streamlined communication channels strengthen connections between parents, teachers, and management.</li>
          <li className='text-justify'>Detailed analytics help make informed decisions that enhance both educational outcomes and operational efficiency.</li>
          <li className='text-justify'>Equipping students with modern tools and resources prepares them to thrive in a competitive academic and career landscape.</li>
          <li className='text-justify'>Automation and centralized management reduce overhead costs, freeing up the budget for essential growth areas.</li>
          <li className='text-justify'>Supporting academic success alongside career planning ensures students are ready for future challenges.</li>
        </ul>

        <section className="mt-4 md:mt-10 w-full">
          <div className="flex gap-4 sm:flex-col sm:items-center lg:flex-row lg:items-start">
            {valueData.map((value, index) => (
              <ValueColumn key={index} imageSrc={value.imageSrc} title={value.title} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default WhatWeOffer;
