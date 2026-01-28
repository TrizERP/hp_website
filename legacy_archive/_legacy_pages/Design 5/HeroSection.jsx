export default function Index() {
  return (
    <div className="h-fit bg-white">
      {/* Hero Section */}
      <div className="relative max-w-[1470px] lg:mx-40 px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="absolute inset-4 bg-[linear-gradient(to_right,_#4DECE3_0%,_#F0FFFE_51%,_#4DECE3_100%)] rounded-2xl shadow-2xl"></div>

        <div className="relative max-w-[1290px]">
          <div className="grid lg:grid-cols-[700px_1fr] gap-8 lg:gap-12 items-center ">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-6 ml-5">
              {/* Main Heading */}
              <h1 className="font-urbanist text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight lg:leading-[50.2px]">
                <span className="text-sales-text">Master the </span>
                <span className="text-sales-primary">Art of Selling</span>
                <span className="text-sales-text">
                  {" "}
                  with Our Ultimate Sales Training Course
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-urbanist text-lg sm:text-xl lg:text-[19px] text-sales-subtitle font-medium leading-relaxed lg:leading-[34.5px] max-w-[465px]">
                Boost sales with proven strategies, real techniques, and a
                success-driven mindset!
              </p>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-4 py-3 bg-[#014D68] hover:bg-sales-primary/90 border border-sales-blue rounded-xl text-white font-inter font-bold text-lg transition-colors duration-200 h-[44px] w-[182px]">
                Get Started Now!
              </button>
            </div>

            {/* Right Image */}
            <div className="relative lg:ml-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d709ab75b56b092ee00f83522dec19b8ebacd734?width=1220"
                alt="Sales training illustration with person and global network"
                className="w-full h-auto max-w-[610px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
