import * as React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1525aeadfea81ccd0d969e3772dabd6974fc8aafcba4f7a3159f5919a6164b3?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "ERP" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56ee09c9b145aedce9543d66469089ed24b343ba1def608093fc8e8790153260?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "Finance & Operation" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79fc3574aab51c5407c3e6872f37d94a2f96e2abf1bdcdd30ea5c80129f14e94?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "LMS" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d0404e0bc03f0338e226ed31dc97b1955917f584eada4af998f656eead4b666?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "HRMS" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2b44e71e468ad6f92ea8bf884e58531a1d94b877be30030864664137921b94b?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "Career Counselling" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e38549b5cfcac85d09fe9a1e4154fafa126c363d7ea007424b961d1ca3b7f645?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", title: "SQAA" }
];

function ServicesSection() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 px-20 py-2.5 text-2xl font-semibold text-black rounded-md bg-zinc-100 shadow-[4px_4px_15px_rgba(42,62,92,0.5)] max-md:px-5">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
        />
      ))}
    </div>
  );
}

export default ServicesSection;
