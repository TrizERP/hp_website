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
                Rollover Salary Structure: Save Time Every Year
              </h1>

              {/* Content sections */}
              <div className="space-y-6 lg:space-y-8">
                {/* Automated Resume Parsing */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Avoid rebuilding salary plans from scratch. With just a click, you can:
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <ul className="space-y-1 ml-4">
                      <li>📌 Copy previous year&rsquo;s salary structure into the new cycle</li>
                      <li>📌 Make batch-wise edits for quick adjustments</li>
                      <li>📌 Maintain consistency while accommodating changes</li>
                    </ul>
                  </div>
                </div>

                {/* Intelligent Candidate Filtering */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                   Payroll Deduction: Smart & Flexible
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                      Our Dynamic Formula Builder makes payroll deduction calculations effortless and accurate. You can manage:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>✔️ Taxes – Auto-calculated as per government regulations</li>
                      <li>✔️ Provident Fund (PF) – Flexible contribution settings</li>
                      <li>
                        ✔️ Insurance – Deduct premiums without manual tracking
                      </li>
                      <li>✔️ Create custom deduction rules tailored to company policies</li>
                    </ul>
                  </div>
                </div>

                {/* Reduce Bias & Improve Fairness */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-black font-sans">
                    Form 16 & Salary Certificates: Ready in Seconds
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                     Generate official salary-related documents with ease:
                    </p>
                    <li>Downloadable PDFs for Form 16, salary slips, and salary certificates</li>
                    <li>Merge custom templates with real-time payroll data</li>
                    <li>Ensure accuracy while reducing HR&rsquo;s administrative workload</li>
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
