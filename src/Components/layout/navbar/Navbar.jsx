"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, Handshake, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductsDropdown from "./ProductsDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { gsap } from "gsap";
import { MAIN_NAVIGATION } from "@/lib/data";

const navigation = MAIN_NAVIGATION;

const NavPill = ({ label, href, onClick, isActive, children, className, dropdownOpen, variant = "ghost" }) => {
  const circleRef = useRef(null);
  const labelRef = useRef(null);
  const labelHoverRef = useRef(null);
  const iconRef = useRef(null);
  const iconHoverRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current || !labelRef.current || !labelHoverRef.current) return;

    const circle = circleRef.current;
    const labelEl = labelRef.current;
    const hoverEl = labelHoverRef.current;
    const pill = circle.parentElement;

    const layout = () => {
      if (!pill) return;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      gsap.set(labelEl, { y: 0 });
      gsap.set(hoverEl, { y: h + 12, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease: "power3.out" }, 0);
      tl.to(labelEl, { y: -(h + 8), duration: 0.6, ease: "power3.out" }, 0);

      gsap.set(hoverEl, { y: Math.ceil(h + 20), opacity: 0 });
      tl.to(hoverEl, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0);

      tlRef.current = tl;
    };

    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [label]);


  const handleEnter = () => {
    if (!tlRef.current) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tlRef.current.tweenTo(tlRef.current.duration(), {
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  const handleLeave = () => {
    if (!tlRef.current) return;
    if (dropdownOpen) return;

    activeTweenRef.current?.kill();
    activeTweenRef.current = tlRef.current.tweenTo(0, {
      duration: 0.3,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  useEffect(() => {
    if (dropdownOpen) {
      handleEnter();
    } else {
      if (!tlRef.current) return;
      activeTweenRef.current = tlRef.current.tweenTo(0, {
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  }, [dropdownOpen]);


  const textColorClass = variant === "solid" ? "text-white" : "text-slate-200";

  const content = (
    <>
      <span
        ref={circleRef}
        className="absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none bg-white"
        aria-hidden="true"
      />
      <span className="relative inline-block leading-[1] z-[2] overflow-hidden">
        <span
          ref={labelRef}
          className={`relative z-[2] inline-block font-medium ${textColorClass}`}
        >
          {label}
        </span>
        <span
          ref={labelHoverRef}
          className="absolute left-0 top-0 z-[3] inline-block font-medium text-[#2A3E5C]"
          aria-hidden="true"
        >
          {label}
        </span>
      </span>
      {children && (
        <span className="relative z-[10] ml-1 inline-flex items-center justify-center overflow-hidden h-4 w-4 align-middle">
          <span
            ref={iconRef}
            className={`relative z-[2] inline-flex items-center justify-center ${textColorClass}`}
          >
            {children}
          </span>
          <span
            ref={iconHoverRef}
            className="absolute left-0 top-0 z-[3] inline-flex items-center justify-center text-[#2A3E5C]"
            aria-hidden="true"
          >
            {children}
          </span>
        </span>
      )}
    </>
  );

  const baseClasses = cn(
    "relative overflow-hidden inline-flex items-center justify-center rounded-full px-5 py-2 transition-colors",
    variant === "solid" ? "bg-[#0066CC] shadow-sm hover:bg-[#005bb5]" : "",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      suppressHydrationWarning={true}
    >
      {content}
    </button>
  );
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const productsDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;
      if (productsDropdownOpen && productsDropdownRef.current && !productsDropdownRef.current.contains(target)) {
        setProductsDropdownOpen(false);
      }
      if (companyDropdownOpen && companyDropdownRef.current && !companyDropdownRef.current.contains(target)) {
        setCompanyDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [productsDropdownOpen, companyDropdownOpen]);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#2A3E5C] text-white shadow-[0_8px_10px_0px_rgba(42,62,92,0.5)]">
      <nav className="mx-auto w-full max-w-[1920px] flex h-20 items-center justify-between px-4 lg:px-10" aria-label="Global">
        <div className="flex flex-none">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <img
              src="/assets/Logo.png"
              alt="Scholar Clone Logo"
              className="h-12 w-auto transition-transform duration-500 group-hover:rotate-[360deg]"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-white">
                Scholar
              </span>
              <span className="text-xl font-bold leading-none text-white">
                Clone
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-x-4">
          {navigation.map((item) => {
            if (item.name === "PRODUCTS") {
              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  ref={productsDropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavPill
                    label={item.name}
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    dropdownOpen={productsDropdownOpen}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ zIndex: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavPill>

                  {/* Products Dropdown - Centered on Screen */}
                  {productsDropdownOpen && (
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] z-50">
                      <ProductsDropdown />
                    </div>
                  )}
                </div>
              );
            } else if (item.name === "COMPANY") {
              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  ref={companyDropdownRef}
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                >
                  <NavPill
                    label={item.name}
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    dropdownOpen={companyDropdownOpen}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ zIndex: 20 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavPill>

                  <CompanyDropdown
                    isOpen={companyDropdownOpen}
                    onClose={() => setCompanyDropdownOpen(false)}
                    onMouseEnter={() => setCompanyDropdownOpen(true)}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                  />
                </div>
              );
            } else {
              return (
                <NavPill
                  key={item.name}
                  label={item.name}
                  href={item.href}
                />
              );
            }
          })}
          <NavPill
            label="Contact Us"
            href="/contact"
            variant="solid"
            className="ml-4 z-20"
          />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 z-50 bg-[#2A3E5C] border-t border-slate-700 shadow-lg transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100dvh-5rem)]",
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => {
            if (item.name === "PRODUCTS") {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className="w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    productsDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {/* Manually mapped mobile product links matching existing routes */}
                      {[
                        { name: "ERP Solutions", href: "/erpservice" },
                        { name: "LMS Solutions", href: "/lmsservice" },
                        { name: "Career Counselling", href: "/ccservice" },
                        { name: "Education AI", href: "/aiservice" },
                        { name: "Communication", href: "/commservice" },
                        { name: "Analytics", href: "/analyticsservice" },
                      ].map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else if (item.name === "COMPANY") {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className="w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    companyDropdownOpen ? "max-h-[150px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      <Link
                        href="/company/careers"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => {
                          setCompanyDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Briefcase className="w-4 h-4" />
                        Careers
                      </Link>
                      <Link
                        href="/company/partners"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => {
                          setCompanyDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Handshake className="w-4 h-4" />
                        Partners
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            }
          })}
          <Link
            href="/contact"
            className="mt-4 block w-full rounded-md bg-[#0066CC] px-3 py-2 text-center text-base font-medium text-white hover:bg-[#005bb5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
