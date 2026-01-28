export default function Index() {
  return (
    <div className="h-fit" style={{ backgroundColor: "rgba(115, 233, 226, 0.2)" }}>
      <section className="relative flex items-center justify-center px-4 sm:px-8 lg:px-20 xl:px-24 py-6 lg:py-14">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-9 lg:space-y-14">
            {/* Main Heading */}
            <div className="self-stretch lg:text-4xl sm:text-3xl font-bold leading-tight max-md:text-3xl">
              <span>Transforming Learning with Agile, </span>
              <span className="text-teal-500">Empowered </span>
              <span>Data-Driven Solutions </span>
              <span>for Organizational </span>
              <span className="text-teal-500">Growth</span>
              
            </div>

            {/* Sub-heading */}
            <p className="text-brand-light-gray mt-6 lg:text-xl sm:text-lg font-medium leading-8 text-black lg:w-[90%] max-md:w-full">
              Spark a culture of continuous learning by delivering dynamic, 
              personalized training journeys, tracking real-time progress, 
              and integrating collaborative, gamified knowledge experiences. 
              Leverage modern learning strategies to build an adaptable, 
              future-ready workforce  engineered for tomorrow&rsquo;s challenges, today.
            </p>

            {/* CTA Button */}
          
              <div className="inline-block px-6 py-2 mt-6  text-base font-bold text-black border border-gray-300 rounded-md border-[2px]">
                Explore Services
              </div>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Blurred Image */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1183cb3c67b3db0aa563ea18c72ef14d339c2eec?width=1640"
                alt=""
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain filter blur-lg opacity-50"
              />
            </div>

            {/* Foreground Clear Image */}
            <div className="relative z-10 flex items-center justify-center lg:justify-end">
              <img
                src="/home_images/HRIT/image 1.png"
                alt="3D personal goal with gold trophy and dartboard"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
