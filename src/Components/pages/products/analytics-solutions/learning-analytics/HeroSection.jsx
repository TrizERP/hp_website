export default function LearningAnalyticsHero() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="relative bg-[linear-gradient(to_right,_#CFF4F2_0%,_#9DE9E4_50%,_#CFF4F2_100%)] pt-12 sm:pt-16 lg:pt-28">
          {/* Decorative blur elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="hidden lg:block absolute top-8 right-32 w-96 h-96 bg-teal-500 opacity-45 rounded-full blur-3xl"></div>
            <div className="hidden lg:block absolute top-1/2 -left-24 w-80 h-80 bg-teal-500 opacity-45 rounded-full blur-3xl"></div>
            <div className="hidden lg:block absolute bottom-16 right-16 w-48 h-48 bg-teal-500 opacity-45 rounded-full blur-3xl"></div>
            <div className="hidden lg:block absolute -top-16 -left-24 w-96 h-32 bg-teal-500 opacity-45 rounded-full blur-3xl transform -rotate-12"></div>
            <div className="hidden lg:block absolute top-4 right-8 w-64 h-64 bg-teal-500 opacity-45 rounded-full blur-3xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-8">
            <h1 className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#014D68] leading-tight mb-3">
              Smarter Insights. Real-Time Growth. Measurable Impact.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-semibold text-brand-dark mb-4 sm:mb-6">
              Unlock the Power of Learning Analytics
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed mb-6">
              Transform learning into strategy with intelligent analytics that reveal how your team learns, grows, and performs every step of the way.
            </p>
            <button className="inline-flex mb-10 items-center justify-center px-6 py-3 bg-[#014D68] text-white font-semibold text-sm sm:text-base rounded-xl border border-blue-600 hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started Now!
            </button>
          </div>

          {/* Bottom Rounded Section */}
          <div className="relative overflow-hidden">
            <div className="
              h-full w-full bg-white 
              [border-radius:100%_100%_0_0/70%_70%_0_0] 
              sm:[border-radius:100%_100%_0_0/40%_40%_0_0] 
              px-4 sm:px-6 md:px-10 lg:px-[10px] pt-20 pb-12
            ">
              <div>
                <h2 className="relative text-[20px] sm:text-[22px] md:text-[32px] font-bold text-[#014D68] text-center mb-10">
                  Why Choose Our Learning Analytics Platform?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                  {[
                    {
                      title: "See Real-Time Growth",
                      desc: `Track how learning unfolds across your organization. Visual dashboards show live progress, course completion, and learner engagement metrics at a glance. `,
                    },
                    {
                      title: "Team Completion Reports",
                      desc: `Monitor learning progress by team, department, or role. Instantly see who’s completed training, who’s lagging, and who’s excelling. `,
                    },
                    {
                      title: "Skill Impact Dashboard ",
                      desc: `Link learning to performance. Measure how training directly impacts skills development, productivity, and strategic goals. `,
                    },
                    {
                      title: "Mobile Progress Alerts ",
                      desc: `Stay informed with smart alerts on learning milestones, engagement dips, and completions right from your mobile device. `,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="text-left lg:mx-10 p-4 sm:p-6 bg-[#73E9E2]/20 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-[#014D68] mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
