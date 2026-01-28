import React from 'react';

const features = [
  "Personalized Learning Journeys",
  "Real-Time Skill Tracking",
  "Smart Curriculum Insights",
  "AI-Powered Career Guidance",
  "Tailored & Adaptive Evaluations"
];

function RevolutionarySystem() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white-100 py-16 px-4 mt-[-80px]">
      <div className="flex flex-1 items-center justify-center h-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc9ac5783021706346e42d2e2730b5a06986803b845e12a54a41bf2dba3a54fc?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt="School management system interface"
          className="h-full w-auto max-h-[500px] rounded-lg shadow-lg object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center h-full max-w-xl md:pl-12">
        <h2 className="text-3xl font-bold text-amber-500 mb-6">
          A Revolutionary School Management System
        </h2>
        <p className="text-xl mb-8">
          We&apos;ve developed a school management system that addresses today&apos;s most critical educational challenges, empowering students, educators, and institutions alike.
        </p>
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="mr-4 text-sky-500">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RevolutionarySystem;
