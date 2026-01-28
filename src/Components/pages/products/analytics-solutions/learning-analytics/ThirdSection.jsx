export default function LearningAnalyticsCTA() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Top-right Blur */}
      <div className="absolute top-[-80px] left-[-80px] w-60 h-60 bg-[#ABECE8] opacity-40 rounded-full blur-[10px] z-0" />
      {/* Bottom-left Blur */}
      <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-[#ABECE8] opacity-40 rounded-full blur-[10px] z-0" />

      <div className="w-full max-w-6xl relative z-10">
        {/* Main Call-to-Action Section */}
        <div className="bg-[#ABECE8] rounded-2xl p-8 md:p-16 text-center shadow-lg">
          {/* Main Heading */}
          <h1 className="text-[#014D68] font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 max-w-5xl mx-auto">
            See What&rsquo;s Working. Fix What&rsquo;s Not. Power Up What&rsquo;s Next.
          </h1>

          {/* Subheading */}
          <p className="text-doc-navy font-semibold text-lg md:text-xl lg:text-2xl mb-8">
            With real-time analytics, mobile alerts, and impact-focused dashboards, our Learning Analytics platform empowers you to build a smarter, more skilled workforce.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-[#014D68] hover:bg-[#014D68]/90 text-white font-semibold text-lg px-8 py-3 rounded-xl border border-doc-blue-border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-doc-blue-border focus:ring-offset-2">
            Get Started Now!
          </button>
        </div>
      </div>
    </div>
  );
}
