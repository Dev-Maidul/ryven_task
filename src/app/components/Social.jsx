import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaFigma,
  FaDribbble,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import socialImage from "../../../public/MainCardTech.png";

function Social() {
  return (
    <div className="grid grid-cols-12 gap-4 items-center p-4 w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 
h-[413px]">
      {/* Left Image */}
      <div className="col-span-4 flex justify-center cursor-pointer h-[
413px]">
        <Image src={socialImage} alt="socialImage" className="rounded-lg" />
      </div>

      {/* Social Buttons */}
      <div className="col-span-8 border border-gray-600 h-[
413px] px-5 py-18 rounded-xl">
        <div className="flex flex-col gap-4 mb-4">
          <p className="text-[24px]">LINKS</p>
          <span className="text-[26px] font-bold">Social Media</span>
        </div>

        <div className="grid grid-cols-4 gap-4 items-stretch">
          {/* Facebook */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer h-full">
            <FaFacebook /> Facebook
          </button>

          {/* LinkedIn */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-blue-700 hover:border-blue-700 transition cursor-pointer h-full">
            <FaLinkedin /> LinkedIn
          </button>

          {/* Figma */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-purple-500 hover:border-purple-500 transition cursor-pointer h-full">
            <FaFigma /> Figma
          </button>

          {/* Dribbble */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-pink-500 hover:border-pink-500 transition cursor-pointer h-full">
            <FaDribbble /> Dribbble
          </button>

          {/* Twitter */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-sky-400 hover:border-sky-400 transition cursor-pointer h-full">
            <FaTwitter /> Twitter
          </button>

          {/* GitHub */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:  hover:border-gray-800 transition cursor-pointer h-full">
            <FaGithub /> GitHub
          </button>

          {/* Instagram */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-pink-600 hover:border-pink-600 transition cursor-pointer h-full">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default Social;