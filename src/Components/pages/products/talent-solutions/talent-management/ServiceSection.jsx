export default function Index() {
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <div className="max-w-[1440px] lg:mx-40 sm:mx-10 relative px-4  xl:px-0">
        {/* Services Section */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Card 1 - Employee Onboarding */}
            <div className="relative">
              <div className="pb-8 border-b border-[#12141D]">
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(18px, 1.67vw, 24px)",
                      lineHeight: "clamp(22px, 2vw, 28px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Employee Onboarding
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Ensure smooth integration of new hires with automated
                    onboarding workflows, document management, and role-specific
                    training plans.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 - Succession Planning */}
            <div className="relative">
              <div className="pb-5 border-b border-[#12141D]">
                <div className="mb-6">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(17px, 1.67vw, 22px)",
                      lineHeight: "clamp(21px, 2vw, 24px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Succession Planning & Performance Management
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Identify and develop future leaders by aligning performance
                    data with career progression plans and internal mobility
                    opportunities.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 - KPI & Goal Setting */}
            <div className="relative">
              <div className="pb-8 border-b border-[#12141D]">
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(18px, 1.67vw, 24px)",
                      lineHeight: "clamp(22px, 2vw, 28px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    KPI & Goal Setting
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Define and align individual goals with organizational KPIs
                    to track progress, boost accountability, and support
                    performance alignment.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 4 - Talent Pool Management */}
            <div className="relative">
              <div className="pb-8 border-b border-[#12141D]">
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(18px, 1.67vw, 24px)",
                      lineHeight: "clamp(22px, 2vw, 28px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Talent Pool Management
                  </h3>
                  <p
                    style={{
                     fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Maintain a centralized database of qualified candidates for
                    future roles, ensuring quick access to top talent when
                    needed.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                      fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 5 - Recommendation Engine */}
            <div className="relative">
              <div className="pb-8 border-b border-[#12141D]">
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(18px, 1.67vw, 24px)",
                      lineHeight: "clamp(22px, 2vw, 28px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Recommendation Engine
                  </h3>
                  <p
                    style={{
                       fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Leverage AI to suggest relevant learning modules, job roles,
                    or development plans based on performance, skills, and
                    interests.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                       fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 6 - Learning Paths */}
            <div className="relative">
              <div className="pb-8 border-b border-[#12141D]">
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                       fontSize: "clamp(18px, 0.97vw, 14px)",
                      lineHeight: "clamp(22px, 1.39vw, 20px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Learning Paths
                  </h3>
                  <p
                    style={{
                       fontSize: "clamp(12px, 0.97vw, 14px)",
                      lineHeight: "clamp(18px, 1.39vw, 20px)",
                      fontWeight: "400",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Create structured, role-based learning journeys to guide
                    employee development and support long-term career growth.
                  </p>
                </div>
                <button className="flex items-center gap-2 group">
                  <span
                    style={{
                      fontSize: "clamp(14px, 1.11vw, 16px)",
                      lineHeight: "clamp(20px, 1.67vw, 24px)",
                      fontWeight: "700",
                      color: "#12141D",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Discover More
                  </span>
                  <svg
                    className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
                      stroke="#12141D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
