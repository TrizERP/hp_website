import React from 'react';
import EducationChallenges from './EducationalChallenges';
import RevolutionarySystem from './RevolutionarySystem';
import PersonalizedLearning from './PersonalizedLearning';
import GalleryImage from "./GalleryImage";
const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2F6ee99432fa6540c3806389414f37bb46",
    className: "mt-16 ml-32 w-[70%] max-sm:mt-7",
    aspectRatio: "1.45"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2Fa9ec8e1e378c4e8db1facd802f1ad428",
    className: "mt-5 w-full",
    aspectRatio: "1.4"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F170cbe9c02a2485986a6dc949bdc8ad3%2F849f2d2280a04b038422118c4a7e0dbe",
    className: "mt-16 ml-0 w-[70%]",
    aspectRatio: "1.45"
  }
];

function MainContent() {
  
  return (
    <main>
      {/* <section className="min-h-screen flex flex-col items-center justify-center bg-white-50 py-16">
        <EducationChallenges />
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-white py-16 mt-[-100px]">
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-8 px-4 max-w-4xl">
          Redefining education to unlock potential and create brighter futures for every student.
        </h2>
        <div>
      <div className="flex gap-5 max-md:flex-col">
        {galleryImages.map((image, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <GalleryImage
              src={image.src}
              className={image.className}
              aspectRatio={image.aspectRatio}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
      </section>

      <RevolutionarySystem /> */}
      <div className="mt-20">
      <PersonalizedLearning />
      </div>
    </main>
  );
}

export default MainContent;
