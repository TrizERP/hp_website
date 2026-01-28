import React from "react";
const features = [
  {
    title: "Custom-Fit for Your Ecosystem",
    description:
      "Whether you're in tech, healthcare, education, or retail our predictor adapts to your industry’s evolving needs.",
  },
  {
    title: "AI-Driven Precision ",
    description:
      " Our proprietary algorithms ensure forecasting accuracy and real-time data interpretation. ",
  },
  {
    title: "Integrated with Learning Systems ",
    description:
      "Seamlessly connect with your existing LMS and HR platforms for continuous learning and tracking.",
  },
];

export default function Index() {
return (
    <>
    <div className="sm:py-8 lg:py-16 bg-white">
        <div className="max-w-[1570px] lg:mx-20 sm:mx-8 lg:px-4  lg:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_530px] gap-6 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-4 lg:space-y-8">
                    {/* Main Title */}
                    <h2 className="font-urbanist text-3xl sm:text-3xl lg:text-[32px] font-bold text-black leading-tight max-w-[880px]">
                        What Makes Growth Predictor Different? 
                    </h2>

                    {/* Features List */}
                    <div className="space-y-4 lg:space-y-6 lg:max-w-[950px]">
                        {features.map((feature, index) => (
                            <div key={index}>
                                <span className="font-open-sans lg:text-xl sm:text-lg lg:text-[22px] font-bold text-black">
                                    {feature.title}{" "}
                                </span>
                                <span className="font-open-sans text-lg lg:text-1xl text-black">
                                    – {feature.description}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="inline-flex items-center justify-center px-4 py-3 bg-[#014D68] hover:bg-[#014D68]/90 border border-sales-blue rounded-xl text-white font-inter font-bold text-lg transition-colors duration-200 h-[44px] w-[182px]">
                        Get Started Now!
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1fd24424203e4c389e59f0249ed82cc374f2ed6?width=1060"
                        alt="Sales training analytics and charts illustration"
                        className="w-auto h-auto lg:max-w-[530px] object-contain"
                    />
                </div>
            </div>
        </div>
    </div>

    <div className="py-10 lg:py-2">
            <div className="max-w-[1470px] lg:mx-40 px-4 sm:px-6 lg:px-8">
                {/* Background container with overlay */}
                <div
                    className="relative rounded-2xl overflow-hidden bg-[linear-gradient(to_right,_#4DECE3_0%,_#F0FFFE_51%,_#4DECE3_100%)] border-2 border-[#4DECE4] shadow-lg"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: "#FFF",
                        minHeight: "420px",
                    }}
                >
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-white/50 rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative py-10 lg:py-14">
                        <div className="grid lg:grid-cols-[432px_1fr] gap-8 lg:gap-16 items-center max-w-[1320px] mx-auto px-8">
                            {/* Left Illustration */}
                            <div className="relative">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa084cedd706771b3ab7057afbad13173d1a5bde?width=864"
                                    alt="People working with sales analytics and charts"
                                    className="w-full h-auto max-w-[432px] max-h-[280px] object-contain"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-[848px]">
                                {/* Main Title */}
                                <h2 className="font-urbanist text-3xl sm:text-4xl lg:text-[33px] font-extrabold leading-tight">
                                    <span className="text-sales-text">
                                        Join the Winning League –{" "}
                                    </span>
                                    <span className="text-[#014D68]">Enroll Today!</span>
                                </h2>

                                {/* Subtitle */}
                                <p className="font-open-sans text-xl lg:text-[21px] text-sales-subtitle max-w-[800px] mx-auto lg:mx-0">
                                    Unlock Your True Sales Potential & Close More Deals Today!
                                </p>

                                {/* CTA Button */}
                                <div className="flex justify-center lg:justify-start">
                                    <button className="inline-flex items-center justify-center px-4 py-3 bg-[#014D68] hover:bg-[#014D68]/90 border border-sales-blue rounded-xl text-white font-inter font-bold text-lg transition-colors duration-200 h-[44px] w-[182px]">
                                        Get Started Now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
);
}
