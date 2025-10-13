"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import socialImage from "../../../public/MainCardTech.png";
import backgroundImage from "../../../public/background.png";
import portfolio from "../../../public/MainCardTech.png";
import mobile from "../../../public/mobile.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaFigma,
  FaDribbble,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const tabs = [
  { id: "social", label: "Social Media" },
  { id: "story", label: "My Story" },
  { id: "portfolio", label: "Download Portfolio" },
];

const TabContent = ({ activeTab }) => {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      {activeTab === "social" && (
        <motion.div
          key="social"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <img
              src={socialImage.src}
              alt="Social section"
              className="rounded-lg w-full max-w-[300px] md:max-w-full h-auto object-contain"
            />
          </div>
          <div className="md:col-span-8 border border-gray-600 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col gap-2 mb-6 text-center md:text-left">
              <p className="text-[20px] sm:text-[22px] font-medium text-gray-300">LINKS</p>
              <span className="text-[24px] sm:text-[28px] font-bold text-white">Social Media</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: <FaFacebook />, label: "Facebook", hover: "blue-600" },
                { icon: <FaLinkedin />, label: "LinkedIn", hover: "blue-700" },
                { icon: <FaFigma />, label: "Figma", hover: "purple-500" },
                { icon: <FaDribbble />, label: "Dribbble", hover: "pink-500" },
                { icon: <FaTwitter />, label: "Twitter", hover: "sky-400" },
                { icon: <FaGithub />, label: "GitHub", hover: "gray-800" },
                { icon: <FaInstagram />, label: "Instagram", hover: "pink-600" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  className={`flex items-center justify-center gap-2 px-4 py-3 text-sm sm:text-base text-white rounded border-2 border-white bg-[#1e1d2b] hover:bg-${btn.hover} hover:border-${btn.hover} transition-all duration-300`}
                >
                  {btn.icon} {btn.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === "story" && (
        <motion.div
          key="story"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col gap-6"
        >
          <div
            className="text-white p-6 rounded-lg flex flex-col justify-end h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          >
            <h2 className="text-lg sm:text-xl font-bold mb-1 text-gray-400">ABOUT ME</h2>
            <p className="text-2xl sm:text-4xl font-bold text-white leading-tight">My Story</p>
          </div>
        </motion.div>
      )}

      {activeTab === "portfolio" && (
        <motion.div
          key="portfolio"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Figma Portfolio */}
          <div
            className="text-white p-6 rounded-lg flex flex-col justify-end h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolio.src})` }}
          >
            <h2 className="text-lg sm:text-xl font-bold mb-1 text-gray-400">FIGMA</h2>
            <p className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Download <br /> Portfolio
            </p>
          </div>

          {/* Mobile Project */}
          <div
            className="text-white p-6 rounded-lg flex flex-col justify-between h-[520px] sm:h-[600px] md:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${mobile.src})` }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">APP</h2>
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                LAST PRODUCT IN <br /> PORTFOLIO
              </p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end bg-[#000000B0] w-full p-4 rounded-lg gap-3 sm:gap-0">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold mb-1">Memory ClickSt...</h2>
                <p className="text-sm sm:text-lg">PRODUCT</p>
              </div>
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-[#ff512f] transition duration-300">
                Visit
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function SocialPortfolioTabs() {
  const [activeTab, setActiveTab] = useState("social");

  return (
    <div className="max-w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 p-4 sm:p-6">
      {/* Tabs */}
      <div className="flex gap-6 mb-6 relative justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative text-white font-semibold text-lg sm:text-xl pb-2 ${
              activeTab === tab.id ? "text-[#ff512f] cursor-pointer" : "text-gray-400 cursor-pointer"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff512f] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <TabContent activeTab={activeTab} />
    </div>
  );
}
