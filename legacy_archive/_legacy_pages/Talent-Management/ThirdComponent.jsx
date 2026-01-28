export default function Index() {
  return (
    <div className="h-fit bg-[#E3FBF9] font-[Inter]" style={{ marginTop: "80px", marginBottom: "80px" }}>
      <div className="max-w-[1440px] mx-auto relative px-4 xl:px-0">
        {/* Main Content Section - Auto height container */}
        <div className="h-fit relative lg:flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left Side - Illustration */}
            <div className="relative lg:pl-[6.5%] order-1 pb-0 lg:order-2">
              {/* Circular gradient background */}
              <div className="absolute left-[11.5%] top-1/2 -translate-y-1/2 hidden lg:block">
                <div
                  className="bg-gradient-to-b from-[#A1EEE7] to-[#1E9F95] mt-2"
                  style={{
                    width: "47.2vw",
                    maxWidth: "500px",
                    height: "47.6vw",
                    maxHeight: "575px",
                    borderRadius: "34.7vw 34.7vw 0px 0px",
                    maxBorderRadius: "500px 500px 0px 0px",
                    boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.25)",
                  }}
                ></div>
              </div>

              {/* Illustration */}
              <div className="relative z-8 lg:pl-0 flex justify-start">
                  <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae207fcd724b1b916a15021db746ba444ea4d006?width=1788"
                      alt="Recruitment platform illustration"
                      className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[62vw] xl:max-w-[584px] h-auto object-contain"
                      style={{ marginLeft: 0 }}
                  />
              </div>
            </div>
            <div className="lg:pr-[14.6%] lg:mx-20 lg:flex flex-col justify-center order-2 lg:order-1">
              {/* Header Section */}
              <div className="mb-8 md:mb-10 lg:mb-[44px]">
                <h1
                  className="text-center lg:text-left font-bold mb-6 lg:mb-[30px] leading-tight"
                  style={{
                    fontSize: "clamp(32px, 3.33vw, 32px)",
                    lineHeight: "clamp(38px, 4.03vw, 48px)",
                    color: "#12141D",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    maxWidth: "631px",
                    marginLeft: "auto",
                    fontWeight: "700",
                  }}
                >
                  Talent Assessment for Skill Upgradation/Degradation
                </h1>
                <p
                  className="text-center lg:text-left"
                  style={{
                    fontSize: "clamp(16px, 1.39vw, 18px)",
                    lineHeight: "clamp(24px, 2.08vw, 30px)",
                    color: "#393939",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    maxWidth: "745px",
                    marginLeft: "auto",
                    fontWeight: "400",
                  }}
                >
                  Track and evaluate employee skills in real time to identify growth, 
                  stagnation, or decline. This helps uncover gaps early and align 
                  workforce capabilities with changing business needs.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div
                  className="text-center lg:text-left"
                  style={{ maxWidth: "538px" }}
                >
                  <span
                    style={{
                      fontSize: "clamp(16px, 1.39vw, 18px)",
                      lineHeight: "clamp(24px, 2.08vw, 30px)",
                      color: "#393939",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Reskilling & Upskilling Opportunities:{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(16px, 1.39vw, 18px)",
                      lineHeight: "clamp(24px, 2.08vw, 30px)",
                      color: "#393939",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    AI-driven insights recommend personalized reskilling paths to keep 
                    teams agile and future-ready.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
