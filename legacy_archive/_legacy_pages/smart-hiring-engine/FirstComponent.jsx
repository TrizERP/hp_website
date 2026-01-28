export default function Index() {
  return (
    // Services Section
    <div className="relative lg:py-20 sm:py-10 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-300/30 rounded-full blur-[255px]"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-300/30 rounded-full blur-[165px]"></div>
      <div className="max-w-[1440px] lg:mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-prompt font-medium text-4xl lg:text-5xl text-payroll-dark mb-6">
                What Is the Smart Hiring Engine? 
              </h2>
              <p className="font-prompt text-lg lg:text-xl text-gray-600 max-w-1xl mx-auto">
               It&rsquo;s a next-gen recruitment platform that helps HR teams and institutions streamline hiring with AI-backed intelligence. No more sifting through piles of resumes get pre-matched, pre-verified, and pre-assessed candidates ready to onboard.  
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:mx-40 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Payroll Type */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-[32px] border-2 border-payroll-dark bg-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-center mb-6">
                  <div className="relative w-[71px] h-[63px]">
                    {/* Network/Grid Icon */}
                    <div className="absolute inset-0">
                      <div className="w-[60px] h-[52px] border-4 border-payroll-dark absolute left-[6px] top-[6px]"></div>
                      <div className="w-[15px] h-[13px] border-4 border-payroll-dark bg-yellow-300 absolute left-0 top-0"></div>
                      <div className="w-[15px] h-[13px] border-4 border-payroll-dark bg-yellow-300 absolute left-0 top-[50px]"></div>
                      <div className="w-[15px] h-[13px] border-4 border-payroll-dark bg-yellow-300 absolute left-[57px] top-0"></div>
                      <div className="w-[15px] h-[13px] border-4 border-payroll-dark bg-yellow-300 absolute left-[57px] top-[50px]"></div>
                    </div>
                  </div>
                </div>
                <h3 className="font-prompt font-medium text-2xl lg:text-2xl text-payroll-dark text-center">
                  AI Candidate Matching 
                </h3>
              </div>

              {/* Salary Structure */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-[32px] border-2 border-payroll-dark bg-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-center mb-6">
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.0392 50.5933C21.8963 46.0213 17.917 38.7045 17.917 30.4583C17.917 16.6052 29.1472 5.375 43.0003 5.375C56.8535 5.375 68.0837 16.6052 68.0837 30.4583C68.0837 38.5839 64.2199 45.8072 58.2295 50.391"
                      stroke="#0B2131"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.0003 30.4583L78.8337 78.8333H7.16699L43.0003 30.4583Z"
                      fill="#F3DF6B"
                      stroke="#0B2131"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-prompt font-medium text-2xl lg:text-3xl text-payroll-dark text-center">
                  Skills-Based Assessments 
                </h3>
              </div>

              {/* Rollover Salary Structure */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-[32px] border-2 border-payroll-dark bg-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-center mb-6">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.9375 17.9375H69.1875V28.1875H58.9375V17.9375ZM58.9375 33.3125H69.1875V43.5625H58.9375V33.3125ZM43.5625 17.9375H53.8125V28.1875H43.5625V17.9375ZM43.5625 33.3125H53.8125V43.5625H43.5625V33.3125Z"
                      fill="#F3DF6B"
                      stroke="#0B2131"
                      strokeWidth="3" />
                    <path
                      d="M37.1562 66.625C39.2791 66.625 41 64.9041 41 62.7812C41 60.6584 39.2791 58.9375 37.1562 58.9375C35.0334 58.9375 33.3125 60.6584 33.3125 62.7812C33.3125 64.9041 35.0334 66.625 37.1562 66.625Z"
                      fill="#0B2131" />
                    <path
                      d="M53.8125 76.875H20.5C19.1412 76.8736 17.8384 76.3333 16.8776 75.3724C15.9167 74.4116 15.3764 73.1088 15.375 71.75V10.25C15.3764 8.89118 15.9167 7.58841 16.8776 6.62758C17.8384 5.66675 19.1412 5.12636 20.5 5.125H53.8125V10.25H20.5V71.75H53.8125V51.25H58.9375V71.75C58.9361 73.1088 58.3958 74.4116 57.4349 75.3724C56.4741 76.3333 55.1713 76.8736 53.8125 76.875Z"
                      fill="#0B2131" />
                  </svg>
                </div>
                <h3 className="font-prompt font-medium text-2xl lg:text-3xl text-payroll-dark text-center">
                  Integrated Video Interview Tools 
                </h3>
              </div>

              {/* Salary Certificate */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-[32px] border-2 border-payroll-dark bg-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-center mb-6">
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M69.875 5H80.625V15.75H69.875V5ZM69.875 21.125H80.625V31.875H69.875V21.125ZM53.75 5H64.5V15.75H53.75V5ZM53.75 21.125H64.5V31.875H53.75V21.125Z"
                      fill="#F3DF6B"
                      stroke="#0B2131"
                      strokeWidth="3" />
                    <path
                      d="M75.25 42.625V58.75H10.75V15.75H43V10.375H10.75C9.32446 10.375 7.95731 10.9413 6.9493 11.9493C5.94129 12.9573 5.375 14.3245 5.375 15.75V58.75C5.375 60.1755 5.94129 61.5427 6.9493 62.5507C7.95731 63.5587 9.32446 64.125 10.75 64.125H32.25V74.875H21.5V80.25H64.5V74.875H53.75V64.125H75.25C76.6755 64.125 78.0427 63.5587 79.0507 62.5507C80.0587 61.5427 80.625 60.1755 80.625 58.75V42.625H75.25ZM48.375 74.875H37.625V64.125H48.375V74.875Z"
                      fill="#0B2131" />
                  </svg>
                </div>
                <h3 className="font-prompt font-medium text-2xl lg:text-3xl text-payroll-dark text-center">
                 Hiring Analytics Dashboard 
                </h3>
              </div>
          </div>
      </div>
    </div>
  );
}
