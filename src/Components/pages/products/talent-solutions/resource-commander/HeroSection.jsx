export default function Index() {
  return (
    <><div className="h-fit bg-white lg:flex items-center justify-center mt-10">
      <div className="flex flex-col lg:flex-row items-left  w-full">
        {/* Left Section */}
        <div className="lg:w-full lg:w-1/2 mb-12 lg:mx-40 sm:mx-10 lg:mb-0">
          <div className="max-w-xl">
            {/* Heading */}
            <h1 className="leading-relaxed font-prompt font-bold text-4xl sm:text-4xl lg:text-[50px] text-[#0B2131] mb-8">
             Command, Control, and Optimize Every Resource 
            </h1>

            {/* Paragraph */}
            <p className="font-prompt text-base sm:text-sm lg:text-xl text-[#0B2131] leading-relaxed mb-8">
              Whether it&rsquo;s inventory, facilities, front-desk ops, or internal communications—Resource Commander is your centralized hub to manage it all, effortlessly. Empower your institution or enterprise with real-time visibility, smart automation, and full configurability. 
            </p>

            {/* Divider */}
            <div className="w-full max-w-[440px] h-[2px] bg-[#0B2131] mb-8" />

            {/* CTA Button */}
            <button className="px-6 py-3 mb-2 bg-[#014D68] text-white text-base font-semibold rounded-xl hover:bg-opacity-90 transition duration-200">
               One Dashboard. Total Control.
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-full lg:w-1/2 flex justify-center items-left bg-[#D6FAF7]  rounded-lg">
          <img
            src="/Detailes page/image 22.jpg"
            alt="Man with laptop smiling"
            className=" lg:w-[400px] h-auto object-contain" />
        </div>
      </div>
    </div><div className="w-full h-10 bg-[#014D68]"></div></>
  );
}
