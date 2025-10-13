import React from "react";
import Image from "next/image";
import logo2 from "../../../public/ryven_co_logo 2.png";
import figma from "../../../public/figma.png";
import vercel from "../../../public/VectorNextJS.svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center space-y-2 sm:space-y-4 py-6 px-4 sm:py-8">
      {/* Logo */}
      <div className="w-24 h-24 sm:w-[100px] sm:h-[100px]">
        <Image src={logo2} alt="Ryven Logo" className="mx-auto object-contain" />
      </div>

      {/* Text with icons */}
      <div className="rounded-lg">
        <h1 className="text-white text-[10px] sm:text-[12px] flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
          Cooked with love in with
          <Image
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain"
            src={figma}
            alt="Figma"
          />
          &
          <Image
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain"
            src={vercel}
            alt="Vercel"
          />
        </h1>
      </div>

      {/* Copyright */}
      <div>
        <span className="text-[10px] sm:text-[12px] text-gray-300 block">
          © Ryven Global LLC 2025
        </span>
      </div>
    </div>
  );
};

export default Footer;
