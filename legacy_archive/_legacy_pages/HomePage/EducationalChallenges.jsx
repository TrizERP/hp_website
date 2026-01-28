import React from 'react';
import ChallengeCard from './ChallengeCard';

const challenges = [
  {
    title: 'Lack of Personalized Learning',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e193c58be56cd6384aefbb6b9c67f2536202c2b2f2c3c3223054384422beaca?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3'
  },
  {
    title: 'Poor Skill Development Tracking',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a130b4dbb105fcc5cbba14a5daf331e5f75ad58a95c188b7c047f93dca99bef2?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3'
  },
  {
    title: 'Limited Career Counseling',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5cca759efaa6c772517fe675760faf3729e2d8614c0a7c347c7258d23b76b40a?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3'
  },
  {
    title: 'Curriculum Disconnect',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b671ab4cf645ca821abfa1fbb3efe7e531d93a12cfb2acf76d06245ddd11635?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3'
  },
  {
    title: 'Outdated Assessments',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5459da82ea0daa2f9ae3d91fc1874cc2a2327aa8b1201503ada8e3503a7797cf?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3'
  }
];

function EducationChallenges() {
  return (
    <div className="flex flex-col rounded-md px-4 py-4 md:py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-500 mb-6 md:mb-10">
        Revolutionizing education with personalized learning solutions to unlock every student&apos;s potential.
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-500 mb-4 md:mb-6">
            Global Educational Challenges
          </h2>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            Schools around the world are grappling with the same outdated systems, leaving students without the personalized tools they need to thrive in the modern world.
          </p>
          <p className="text-lg md:text-xl">
            The one-size-fits-all education approach limits personalized learning and prevents effective tracking of job-ready skills. Teachers struggle to align with modern curricula, and students often lack proper career counseling. Outdated assessments further fail to adapt to individual learning paces, hindering accurate progress measurement.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 gap-4">
            <ChallengeCard title={challenges[0].title} image={challenges[0].image} fullWidth={true} />
            <div className="grid grid-cols-2 gap-4">
              {challenges.slice(1).map((challenge, index) => (
                <ChallengeCard key={index} title={challenge.title} image={challenge.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationChallenges;
