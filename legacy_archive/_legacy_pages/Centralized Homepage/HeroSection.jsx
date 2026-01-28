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
    className: "lg:flex sm:hidden mt-40 max-md:mt-10"
  }
];

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:px-10 sm:px-4 md:px-24 pt-16 rounded-none">
  {/* Heading */}
  <h1 className="z-10 self-center mt-0 lg:text-4xl sm:text-2xl font-bold font-noto text-center text-slate-700 max-w-[1043px] max-md:max-w-full max-md:text-3xl">
    Empowering Education, Elevating Careers,  
    <br /> Transforming Futures
  </h1>

  <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-wrap md:flex-nowrap gap-5">
      
      {/* Left Side - Description & Button */}
      <div className="flex flex-col md:w-6/12 w-full">
        <div className="flex flex-col self-stretch my-auto w-full text-md font-bold font-roboto max-md:mt-10 max-md:max-w-full">
          <div className="text-justify text-black text-left max-md:text-center max-md:max-w-full leading-relaxed">
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

          {/* "Know More" Button */}
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

      {/* Right Side - Features & Images */}
      <div className="flex flex-col md:w-7/12 w-full md:ml-5 ml-0 backdrop-blur-[200px]">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            
            {/* First Column */}
            <div className="flex flex-col w-full md:w-[45%] max-md:ml-0">
              <div className="flex flex-col items-end mt-12 w-full text-lg font-bold font-noto text-black max-md:mt-10">
                <CircleImage src={circleImages[0].src} className={circleImages[0].className} />
                <FeatureCard icon={features[0].icon} title={features[0].title} />
                <CircleImage src={circleImages[1].src} className={circleImages[1].className} />
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col md:ml-5 ml-0 w-full md:w-[59%]">
              <div className="flex flex-col w-full max-md:mt-9 max-md:max-w-full">
                
                {/* Feature 2 & Image */}
                <div className="w-full max-md:max-w-full">
                  <div className="flex flex-wrap md:flex-nowrap gap-5">
                    <div className="lg:flex sm:hidden  flex-col w-full">
                      <FeatureCard icon={features[1].icon} title={features[1].title} />
                    </div>
                    <div className="flex flex-col ml-0">
                      <CircleImage src={circleImages[2].src} className={circleImages[2].className} />
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="md:ml-5 ml-2.5 w-[80%] max-md:w-full">
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
