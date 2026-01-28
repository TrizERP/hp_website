export default function Index() {
  return (
    <div className="h-fit bg-gradient-to-br from-cyan-50 to-cyan-100 font-sans">
      {/* Main content section */}
      <div className="relative bg-cyan-100/40 min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left side - Image with decorative frames */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">

                {/* Main image */}
                <div className="relative z-10 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/Detailes page/image 46.jpg"
                    alt="Resume screening process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              {/* Main heading */}
              <h1 className="text-3xl sm:text-1xl lg:text-2xl xl:text-2xl font-bold text-[#FB923C] leading-tight font-sans">
                Video Interview Checks 
              </h1>

              {/* Content sections */}
              <div className="space-y-6 lg:space-y-8">
                {/* Automated Resume Parsing */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      Let AI and human reviewers gauge confidence, clarity, and real-time thinking
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>📌 Scenario-based prompts and impromptu Q&A rounds </li>
                      <li>📌 Non-verbal cue tracking for behavioral analysis </li>
                      <li>📌 Role-based question banks for sales, engineering, operations & more </li>
                    </ul>
                  </div>
                </div>

                {/* Intelligent Candidate Filtering */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Practical Skill Challenges
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      Live problem-solving that mirrors real-world job requirements. 
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>✔️ Coding projects, content creation tasks, design briefs, sales pitch simulations </li>
                      <li>✔️ Evaluate critical thinking, decision-making, and collaboration skills </li>
                      <li>
                        ✔️ Deliverables judged by experts or benchmarked by AI 
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Reduce Bias & Improve Fairness */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Smart Proctored Assessments 
                  </h2>
                  <ul className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                     <li>📌
                      Secure, credible, and cheat-resistant testing anytime, anywhere. 
                    </li>
                     <li>📌                         
                      AI + human hybrid proctoring 
                    </li>
                     <li>📌
                      Browser lock, face detection, and screen monitoring 
                    </li>
                     <li>📌
                      Auto-flag suspicious behavior for audit and review 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
