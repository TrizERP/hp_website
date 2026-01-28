import * as React from "react";
import FeatureCard from "./FeatureCard";
import CircleImage from "./CircleImage";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b15456a87858eaa14133b898cee41a73f96ac01ee4ebdef3075df15603024471?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Personalized Learning"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7ad7f1d27cffeca617e4e9b3e72e127217a5160e030fbc0eb3e9c038b1264d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Integrated AI-Driven Solution"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/acaa9806be42024e6297ed0b177516d9e57f9d3094d26e24a2db7bc44d843cfa?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    title: "Data-Driven Efficiency"
  }
];

const circleImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3d1a4dfc210b92a959623b345e28de731885b03e422bd16fc2c1a8f6d63938e?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    className: "mr-11 max-md:mr-2.5"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e814c31a39cfd7db32e55fe550b54b038932382250a02d6faced3f226f7b9322?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    className: "mt-9"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a32d938b224f32941cbbb787ece1d2240e5694e913bd80c9c73135d214edafb?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    className: "mt-40 max-md:mt-10"
  }
];

export default function HeroSection() {
  return (
    <div className="flex flex-col px-24 pt-16 rounded-none">
      <h1 className="z-10 self-center mt-0 text-4xl font-bold font-noto text-center text-slate-700 w-[1043px] max-md:max-w-full max-md:text-4xl">
        Empowering Education, Elevating Careers,  <br></br>Transforming Futures
      </h1>
      <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-md font-bold font-roboto max-md:mt-10 max-md:max-w-full">
            <div className="text-black max-md:max-w-full text-justify leading-relaxed">
                Scholar Clone is an all-in-one platform designed for schools,
                higher education institutions, and the corporate sector,
                offering AI-driven tools for efficient management, personalized
                learning, and psychometric career guidance. It enhances
                educator-student engagement, streamlines operations, and fosters
                industry-relevant skills. For organizations, it provides
                advanced HRMS and career solutions to drive growth. Scholar
                Clone empowers students, educators, and businesses, ensuring
                future readiness and endless opportunities.
            </div>
            <div
                className="flex gap-2.5 justify-center items-center self-center py-2.5 mt-11 max-w-full text-white text-md rounded-xl pointer-events-auto min-h-[50px] w-[180px] max-md:px-5 max-md:mt-10 bg-green-400 transition-all duration-300 transform hover:scale-105 hover:bg-green-500 animate-blink font-merriweather"
                tabIndex="0"
                role="button"
                onClick={() => window.open('/aboutus', '_blank')}
                style={{
                  boxShadow: '0 16.67px 33.33px rgba(33, 20, 0, 0.8), 0px -8px 10px rgba(33, 20, 0, 0.5) inset', // Adding inset shadow for bottom side
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                    // Handle click
                    }
                }}
                >
                <span>Know More</span>
            </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-7/12 max-md:ml-0 max-md:w-full backdrop-blur-[200px]">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-end mt-12 w-full text-lg font-bold font-noto text-black max-md:mt-10">
                    <CircleImage src={circleImages[0].src} className={circleImages[0].className} />
                    <FeatureCard icon={features[0].icon} title={features[0].title} />
                    <CircleImage src={circleImages[1].src} className={circleImages[1].className} />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md:mt-9 max-md:max-w-full">
                    <div className="w-full max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                          <FeatureCard icon={features[1].icon} title={features[1].title} />
                        </div>
                        <div className="flex flex-col ml-0 max-md:ml-0 max-md:w-full">
                          <CircleImage src={circleImages[2].src} className={circleImages[2].className} />
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 w-[80%] max-md:ml-2.5">
                      <FeatureCard icon={features[2].icon} title={features[2].title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
