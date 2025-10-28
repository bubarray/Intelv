"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/Image";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const IconBox = () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5841 7.85523L21.4441 7.60523C21.2635 7.30292 21.0088 7.05166 20.7041 6.87523L13.9941 3.00523C13.6903 2.82898 13.3454 2.73585 12.9941 2.73523H12.7041C12.3528 2.73585 12.0079 2.82898 11.7041 3.00523L4.99413 6.88523C4.6911 7.06049 4.43939 7.3122 4.26413 7.61523L4.12413 7.86523C3.94788 8.16907 3.85475 8.51397 3.85413 8.86523V16.6152C3.85475 16.9665 3.94788 17.3114 4.12413 17.6152L4.26413 17.8652C4.44392 18.1647 4.69462 18.4154 4.99413 18.5952L11.7141 22.4652C12.0164 22.6451 12.3623 22.7385 12.7141 22.7352H12.9941C13.3454 22.7346 13.6903 22.6415 13.9941 22.4652L20.7041 18.5852C21.0101 18.4139 21.2628 18.1612 21.4341 17.8552L21.5841 17.6052C21.7582 17.3005 21.8512 16.9562 21.8541 16.6052V8.85523C21.8535 8.50397 21.7604 8.15907 21.5841 7.85523ZM12.7041 4.73523H12.9941L18.8541 8.11523L12.8541 11.5752L6.85412 8.11523L12.7041 4.73523ZM13.8541 20.2352L19.7041 16.8552L19.8541 16.6052V9.84523L13.8541 13.3152V20.2352Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div
          className="w-full bg-[#000000] flex flex-col items-center"
      style={{
        fontFamily: "Hind, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Main Navigation Bar */}
      <div className="flex h-[72px] px-4 md:px-16 justify-between items-center w-full self-stretch">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Logo */}
                  <div className="flex w-[84px] h-9 px-2 justify-center items-center">
                      <Image src="/..public/Logo.png" alt="" width={64} height={64}/>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 ">
            <Link href="/" className="text-white text-base font-normal leading-6">
              Home
            </Link>
            <Link href="/services" className="text-white text-base font-normal leading-6">
              Services
            </Link>
            <Link href="/industries" className="text-white text-base font-normal leading-6">
              Industries
            </Link>
            <Link href="/about" className="text-white text-base font-normal leading-6">
              About Us
            </Link>
            <Link href="/contactus" className="text-white text-base font-normal leading-6">
              Contact Us
            </Link>
          </div>
        </div>

        
      </div>

      {/* Mobile Menu */}
      {isDropdownOpen && (
        <div className="md:hidden w-full bg-[#231D97] border-t border-white/20">
          <div className="flex flex-col py-4 px-4 gap-4">
            <Link href="/" className="text-white text-base font-normal leading-6 py-2">
              Home
            </Link>
            <Link href="/services" className="text-white text-base font-normal leading-6 py-2">
              Services
            </Link>
            <Link href="/industries" className="text-white text-base font-normal leading-6 py-2">
              Industries
            </Link>
            <Link href="/about" className="text-white text-base font-normal leading-6 py-2">
              About Us
            </Link>
            <Link href="/contactus" className="text-white text-base font-normal leading-6 py-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navigation;
