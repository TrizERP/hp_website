import React, { useRef, useEffect, useState } from 'react';
import { FaMapPin } from 'react-icons/fa';

const milestones = [
  {
    year: "2010",
    description: "Established with a focus on education and training solutions.",
  },
  {
    year: "2014",
    description: "Developed teacher attendance systems for the Nagaland Government.",
  },
  {
    year: "2016",
    description: "Expanded into private and public institutions, offering integrated solutions for over 400 schools and 50,000 students.",
  },
  {
    year: "2021",
    description: "Collaborated with Gujarat Government to deliver AI-driven learning outcome solutions.",
  },
  {
    year: "2023",
    description: "Introduced performance-based personalized lesson planning for students.",
  },
];

const JourneyPath = () => {
  const [visibleMilestones, setVisibleMilestones] = useState([]);
  const milestoneRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            // Element has come into view, add it to the visible milestones list
            setVisibleMilestones((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index]; // Prevent duplicate entries
              }
              return prev;
            });
          } else {
            // Element has exited the viewport, remove it from the visible milestones list
            setVisibleMilestones((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.5 } // Trigger observer when 50% of the element is in the viewport
    );

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-16 mb-20">
      <h2 className="lg:text-4xl sm:text-2xl font-bold text-orange-500">Our Success Journey</h2>
      <div className="relative w-full max-w-2xl">
        {/* Map Pin Icon at the Start of the Timeline */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 text-red-500">
          <FaMapPin size={24} />
        </div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={(el) => (milestoneRefs.current[index] = el)}
            data-index={index}
            className={`transition-opacity duration-1000 lg:px-0 sm:px-4 ease-in-out transform ${
              visibleMilestones.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-10'
            } flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full py-4`}
          >
            <div
              className="lg:block sm:hidden p-4 bg-white shadow-lg rounded-lg max-w-md"
              style={{
                marginLeft: index % 2 === 0 ? '20px' : '350px',
                marginRight: index % 2 === 1 ? '20px' : '350px',
              }}
            >
              <h3 className="text-xl font-bold text-blue-500 sm:text-2xl">{milestone.year}</h3>
              <p className="text-gray-700 mt-4 sm:mt-4 sm:text-lg">{milestone.description}</p>
              </div>
              <div
              className="lg:hidden sm:block p-6 bg-white shadow-lg rounded-lg max-w-sm"
              style={{
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 1 ? '0' : 'auto',
              }}
            >
              <h3 className="text-xl font-bold text-blue-500 sm:text-2xl">{milestone.year}</h3>
              <p className="text-gray-700 mt-2 sm:mt-4 sm:text-lg">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyPath;
