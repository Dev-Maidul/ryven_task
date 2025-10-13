import React from "react";
import Image from "next/image";
import logo2 from "../../../public/ryven_co_logo 2.png";
import figma from "../../../public/figma.png";
import vercel from "../../../public/VectorNextJS.svg";

const Footer = () => {
  return (
    <div className="w-full h-[277px] flex flex-col justify-center items-center text-center space-y-4 -mt-4">
      {/* Logo */}
      <div className="w-[137px] h-[137px]">
        <Image src={logo2} alt="Ryven Logo" className="mx-auto" />
      </div>

      {/* Text with icons */}
      <div className="rounded-lg">
        <h1 className="text-white text-[12px] flex justify-center items-center gap-2">
          Cooked with love in with
          <Image
            className="w-[18px] h-[18px]"
            src={figma}
            alt="Figma"
          />
          &
          <Image
            className="w-[18px] h-[18px]"
            src={vercel}
            alt="Vercel"
          />
        </h1>
      </div>

      {/* Copyright */}
      <div>
        <span className="text-[12px] text-gray-300">© Ryven Global LLC 2025</span>
      </div>
    </div>
  );
};

export default Footer;
