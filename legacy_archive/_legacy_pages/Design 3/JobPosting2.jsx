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
                    src="/m_image.png"
                    alt="Resume screening process"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              {/* Main heading */}
              <h1 className="text-3xl sm:text-1xl lg:text-2xl xl:text-2xl font-bold text-[#FB923C] leading-tight font-sans">
                Resume Screening: AI-Powered Shortlisting
              </h1>

              {/* Content sections */}
              <div className="space-y-6 lg:space-y-8">
                {/* Automated Resume Parsing */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Automated Resume Parsing
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      The platform automatically extracts key details from
                      resumes, including:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>📌 Work experience</li>
                      <li>📌 Skills and certifications</li>
                      <li>📌 Education and qualifications</li>
                    </ul>
                    <p>
                      By eliminating manual data entry, recruiters can review
                      resumes faster and more efficiently.
                    </p>
                  </div>
                </div>

                {/* Intelligent Candidate Filtering */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Intelligent Candidate Filtering
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      AI-driven keyword matching ensures only the most relevant
                      applicants are shortlisted. The system can:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>✔️ Score resumes based on job requirements</li>
                      <li>✔️ Filter out unqualified candidates instantly</li>
                      <li>
                        ✔️ Prioritize top applicants for faster hiring decisions
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Reduce Bias & Improve Fairness */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Reduce Bias & Improve Fairness
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      With data-driven candidate ranking, recruiters focus on
                      skills and experience rather than subjective
                      factors—leading to more diverse and qualified hires.
                    </p>
                    <p>
                      By automating resume screening, HR teams save time and
                      improve shortlisting accuracy.
                    </p>
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
