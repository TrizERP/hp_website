import React from 'react';
import FeatureItem from './FeatureItem';
import Link from 'next/link';  // Importing Link from Next.js

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad22d36250ef71779b52eea90cf67595f0a81d2d73da7d6f092f5a9103aa0a9f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Integration", href: "/integration" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d81e63b4139d1892a022a32aebf587db3e8f8f09cf0dabeedd3d9e10309c58ff?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Services supports", href: "/supportservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed38bf784c488a7f503c528faec435652fdb25d7c3455c0ba60c307051bd60e6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Mobile app", href: "/mobileservices" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/845c07c89ec1f81b342386c0080c7ac1a1a2add3bb5eb82f32720e2b6f28ec3c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Quality improvement", href: "/pione" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bf6db5976fca0b641cb90f62becd98e717089777435a4f87dc4756af9a58aa1?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Process improvement", href: "/pitwo" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7e17c9183d9d574b551d05d545941de71c83e45130d236a773d2ac68af1454f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Rolewise solutions", href: "/pithree" }
];

const FeatureList = () => {
  return (
    <section className="flex overflow-hidden flex-col py-2.5 text-xl font-medium text-sky-500 bg-white rounded-2xl border border-black border-solid max-w-[270px] shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
      {features.map((feature, index) => (
        <Link key={index} href={feature.href}>  {/* Wrapping FeatureItem with Link */}
          <a className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 transition-colors duration-1000">
            <img src={feature.icon} alt={feature.label} className="w-6 h-6" />
            <span>{feature.label}</span>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default FeatureList;
