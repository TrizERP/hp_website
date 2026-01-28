import React, { useState, useRef, useEffect } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NV1 from './Navbar_new';
import FeatureLayout from './FeatureLayout';
import FeatureLayoutNew from '../../SComponents/FeatureLayout';
import FeatureLayoutMax from '../../CComponents/FeatureLayout';
import EducationDashboard from '../../resources/ResourceTypes';
import Logo from './Logo';
import BookDemoButton from './BookDemoButton';

const navItems = [
  { label: 'Home', layerName: 'home', href: '/' },
  { label: 'Products', layerName: 'resources' },
  { label: 'Contact', layerName: 'aboutus', href: '/CONTACT' },
  { label: 'Help', layerName: 'company' },
];

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    zIndex: 1000,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && activeDropdown) {
      const rect = buttonRefs.current[activeDropdown]?.getBoundingClientRect();
      if (rect) {
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 12,
          left: rect.left + window.scrollX - 50,
          zIndex: 1000,
        });
      }
    }
  }, [activeDropdown]);

  const handleClick = () => {
    router.push('/contactGlobal');
  };

  const handleClickHome = () => {
    router.push('/center_home');
  };

  const handleDropdownToggle = (layerName) => {
    setActiveDropdown(layerName);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
    setDropdownPosition({
      top: 0,
      left: 0,
      zIndex: 1000,
    });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="flex flex-col items-center px-16 pt-3 pb-3 text-xl font-semibold leading-none bg-white max-md:px-5">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1619px] max-md:max-w-full">
          {/* Logo */}
          <Logo onClick={handleClickHome} />

          {/* Navigation + Button */}
          <div className="lg:flex sm:hidden flex-wrap items-center gap-10 max-md:max-w-full text-black">
            {/* Nav Items */}
            <nav className="flex gap-10 my-auto whitespace-nowrap text-zinc-800 max-md:max-w-full text-[16px]">
              {navItems.map((item) =>
                item.href ? (
                  <Link key={item.layerName} href={item.href}>
                    <button
                      ref={(el) => (buttonRefs.current[item.layerName] = el)}
                      onMouseEnter={() => handleDropdownToggle(item.layerName)}
                      className="relative z-10 hover:text-blue-600"
                    >
                      <NavItem label={item.label} layerName={item.layerName} />
                    </button>
                  </Link>
                ) : (
                  <button
                    key={item.layerName}
                    ref={(el) => (buttonRefs.current[item.layerName] = el)}
                    onMouseEnter={() => handleDropdownToggle(item.layerName)}
                    className="relative z-10 hover:text-blue-600"
                  >
                    <NavItem label={item.label} layerName={item.layerName} />
                  </button>
                )
              )}
              </nav>

            {/* Book Demo Button */}
            <BookDemoButton onClick={handleClick} />
          </div>
        </div>
      </header>

      {/* Responsive Nav (Mobile) */}
      <header className="lg:hidden md:hidden sm2:flex overflow-hidden flex-wrap">
        <NV1 dropdownDataType="headerNavbar" className="flex-shrink-0 max-w-full" />
      </header>

      {/* Dropdown Menus */}
      {['products', 'Contact', 'Help'].includes(activeDropdown) && (
        <div
          ref={dropdownRef}
          className="absolute transition-all duration-300 ease-in-out fade-in"
          style={dropdownPosition}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          {activeDropdown === 'products' && <FeatureLayout />}
          {activeDropdown === 'Contact' && <FeatureLayoutNew />}
          {activeDropdown === 'Help' && <FeatureLayoutMax />}
        </div>
      )}

      {activeDropdown === 'resources' && (
        <div
          ref={dropdownRef}
          className="absolute transition-all duration-300 ease-in-out fade-in"
          style={{
            top: 50,
            left: '15%',
            transform: 'translateX(-4%)',
            zIndex: 1000,
          }}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <EducationDashboard />
        </div>
      )}
    </>
  );
}

export default NavBar;
