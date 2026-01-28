import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';  // Importing Link from Next.js
import '../../app/globals.css';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/710f5aa9596d2e409af407c340cdd79e414af270317bcd1e72665e614c77a6a0?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "ERP", href: "/erpservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7cc58bebedc7dfc9562166dc22534c973f8bc1ff5ae7b0599dc7a48777ac6ba?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "LMS", href: "/lmsservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e01d24e6af89e0160291bc78faa2881ed709c522721979e55e143212a9736757?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Career Counselling", href: "/ccservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/303074fac57b8331680cc908fd72d94606ce919e4845dcb87f032088d7b2a23c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Education Ai", href: "/aiservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/824ed1fac0236d9ec6653d56c0bff2832669a81baa22ae5f576a08a883e5ed84?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Communication", href: "/commservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8bfba8153d971bf805da67f7f74fb9b3fb33f8a10416ff0c7d9e04d01836e12?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Analytics", href: "/analyticservice" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cae688cd453284a63c8e56f4bb2a9549f46ac5043181942c5b49f5045dfd878?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", label: "Integration", href: "/integration" }
];

const Menu = () => (
  <CSSTransition
    in={true}
    timeout={500}
    classNames="roll-down"
    unmountOnExit
  >
    <nav className="flex overflow-hidden flex-col py-2.5 text-xl font-medium text-sky-500 bg-white rounded-2xl border border-black border-solid max-w-[270px] shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href}>  {/* Wrap MenuItem with Link */}
          <a className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 transition-colors duration-1000">
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span>{item.label}</span>
          </a>
        </Link>
      ))}
    </nav>
  </CSSTransition>
);

export default Menu;
