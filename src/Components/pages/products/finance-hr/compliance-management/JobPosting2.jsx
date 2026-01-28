export default function Index() {
  return (
    <div className="h-[500px] bg-gradient-to-br from-cyan-50 to-cyan-100 font-sans mb-20">
      {/* Main content section */}
      <div className="relative bg-cyan-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
                Audit Trail Generator
              </h1>

              {/* Content sections */}
              <div className="space-y-6 lg:space-y-8">
                {/* Automated Resume Parsing */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <p>
                    Transparency is key to good governance. Our built-in audit trail system automatically logs every change, action, and user activity providing complete accountability.  
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>📌 Tamper-proof digital logs </li>
                      <li>📌 Track user actions, policy changes, approvals, and communications </li>
                      <li>📌 Exportable reports for audits or compliance checks</li>
                    </ul>
                  </div>
                </div>

                {/* Intelligent Candidate Filtering */}
                <div className="space-y-3 lg:space-y-4">
                  <h2 className="text-1xl lg:text-1xl font-bold text-[#FB923C] font-sans">
                   Why Choose Our Compliance Management Platform? 
                  </h2>
                  <div className="text-sm lg:text-sm text-black leading-relaxed space-y-3 font-sans">
                    <ul className="space-y-1 ml-4">
                      <li>✔️  Fully automated policy & law tracking </li>
                      <li>✔️  Tailored for Indian labor compliance</li>
                      <li>✔️ Centralized audit and document repository</li>
                      <li>✔️ Transparent, secure, and reliable recordkeeping </li>
                      <li>✔️ Built for HR teams, auditors, and operations managers</li> 
                    </ul>
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
