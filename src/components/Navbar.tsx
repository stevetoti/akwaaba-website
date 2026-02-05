"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasWhiteBg =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/cookie-policy";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || hasWhiteBg;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo white={!solid} />

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? solid
                      ? "text-vibrant-orange bg-vibrant-orange/10"
                      : "text-white bg-white/20"
                    : solid
                    ? "text-gray-700 hover:text-vibrant-orange hover:bg-gray-50"
                    : "text-white hover:text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`flex items-center space-x-3 ml-6 pl-6 border-l ${solid ? "border-gray-200" : "border-white/20"}`}>
              <a
                href="https://app.akwaabaai.com/login"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  solid ? "text-gray-700 hover:text-vibrant-orange" : "text-white hover:text-white/80"
                }`}
              >
                Login
              </a>
              <a href="https://app.akwaabaai.com/signup" className="btn-primary !py-2.5 !px-6 text-sm">
                Sign Up Free
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              solid ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/20 text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  pathname === link.href
                    ? "text-vibrant-orange bg-vibrant-orange/10"
                    : "text-gray-700 hover:text-vibrant-orange hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://app.akwaabaai.com/login"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-vibrant-orange hover:bg-gray-50"
              >
                Login
              </a>
              <a
                href="https://app.akwaabaai.com/signup"
                className="block btn-primary text-center"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
