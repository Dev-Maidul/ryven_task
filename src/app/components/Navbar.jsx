"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/ryven_co_logo 1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[100px] flex items-center bg-gradient-to-b from-[rgba(65,62,105,0.25)] to-[rgba(16,15,35,1)] relative">
      {/* Container */}
      <div className="w-full max-w-[641px] mx-auto px-4">
        {/* Menu pill */}
        <div className="menu bg-white flex items-center justify-between w-full h-[54px] rounded-[99px] text-black p-4 mt-4 relative">
          {/* logo */}
          <Link href="/"><div className="logo flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              className="object-contain w-[100px] h-[32px] sm:w-[120px] sm:h-[40px]"
            />
          </div></Link>

          {/* Desktop links */}
          <nav className="menuItem hidden md:flex items-center gap-4">
            {["Services", "Experiences", "Work"].map((item, idx) => (
              <Link
                key={idx}
                href={"/services"}
                className="whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:text-[#ff512f] hover:scale-105"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* action button */}
          <div className="button hidden md:block">
            <button className="linkedIn cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ff512f] hover:text-[#ff512f] hover:scale-105 px-4 py-1 rounded-full">
              LinkedIn
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="md:hidden ml-2 inline-flex items-center justify-center p-2 rounded-full focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[68px] w-[90%] bg-white rounded-xl p-4 flex flex-col items-center gap-3 md:hidden z-30 shadow-lg">
              {["Services", "Experiences", "Work"].map((item, idx) => (
                <Link
                  key={idx}
                  href={"/services"}
                  className="w-full text-center py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#ff512f] hover:scale-105"
                >
                  {item}
                </Link>
              ))}
              <div className="w-full flex justify-center pt-1">
                <button className="linkedIn cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ff512f] hover:text-white hover:scale-105 px-4 py-1 rounded-full">
                  LinkedIn
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
