import React from 'react';

const userTypes = [
  {
    title: "Teacher",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b08f5364390c6a3c8742429f72abf15d348621bbcc938f6b76e5ab9fa5ac4d9b?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    features: [
      "AI-Powered Curriculum Planning",
      "Real-Time Student Progress Tracking",
      "Simplified Administrative Tasks",
      "Personalized Teaching Strategies",
      "Efficient Communication"
    ]
  },
  {
    title: "Student",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba0c41b0f56918ee13e2893fa278f5b35eadc6170ce5f715451e5178c7c1edc6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    features: [
      "Personalized Learning Journeys",
      "Skill Development Tracking",
      "Access to AI-Powered Career Guidance",
      "Engaging Learning Tools",
      "Immediate Feedback on Assessments"
    ]
  },
  {
    title: "Principal",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ef1b97a4c27b5ab4222dffb11eaa067931e9280e53cda1dc1b14112bc9345a5?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    features: [
      "Comprehensive School Management",
      "Data-Driven Decision Making",
      "Enhanced Staff and Student Coordination",
      "Improved Resource Allocation",
      "Strengthened School Reputation"
    ]
  }
];

function UserTypeCard({ title, image, features }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={`${title} illustration`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PersonalizedLearning() {
  return (
    <section className='mb-10'>
       <img loading="lazy" src="/home_images/Group 193.png" className="w-full h-auto object-cover" alt="Description of the image" />
    </section>
  );
}

export default PersonalizedLearning;
