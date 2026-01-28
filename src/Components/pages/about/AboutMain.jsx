"use client";
import React, { useState, useEffect } from 'react';
import styles from './Aboutus.module.css';  // Import the CSS module
import Contact from '@/Components/pages/contact/ContactCard';
import Members from './PotentialMembers';
import Journey from './JourneyPath';
import Content from './WhatWeOffer';
const AboutMain = () => {
  const [currentLine, setCurrentLine] = useState(0);  // Manage the visible line

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % 3);  // Cycle through lines (0, 1, 2)
    }, 3000); // Change line every 3 seconds

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
      <main className='font-bold text-xl'>
        </main>
      <div className={styles['aboutus-container-new']}>
        <div className={styles['text-container']}>
          <h1 className={`${styles['rollover-text']} ${styles['line-1']} ${currentLine === 0 ? styles['show'] : ''}`}>Empowering Schools with Smart Technology for Every Need</h1>
          <h1 className={`${styles['rollover-text']} ${styles['line-2']} ${currentLine === 1 ? styles['show'] : ''}`}>Empowering Higher Education with Innovative Technology Solutions</h1>
          <h1 className={`${styles['rollover-text']} ${styles['line-3']} ${currentLine === 2 ? styles['show'] : ''}`}>Optimizing Business with Smart, Scalable Solutions</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 mb-10 bg-white-100">
        <h1 className="text-4xl font-bold text-sky-600 mb-8">Our Company</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-6xl w-full">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/about_images/image1.png" // Save your logo image as logo.png in the public folder
              alt="Scholar Clone Logo"
              width={400} // Adjust width to match your design
              height={400} // Adjust height to match your design
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 text-center md:text-left">
            <p className="text-black">
              Founded in 2010, Scholar Clone has been a pioneering force in transforming technology for education and corporate sectors. Specializes in software solutions for the education and training sectors. It provides next-generation education solutions for schools, colleges, universities, SMEs, and corporate clients, both in India and globally. Our advanced solutions, including automated Learning Management Systems (LMS), cover everything from lesion creation to performance management, enhancing learning experiences and optimizing operational efficiency. Committed to driving growth and innovation, we deliver technology that accelerates success use this for above request          </p>
          </div>
        </div>
      </div>
      <div className={styles['aboutus-container']}>
        <Content />
      </div>
      {/* <Members /> */}
      <Journey />
      <br />
    </div>
  );
};

export default AboutMain;

