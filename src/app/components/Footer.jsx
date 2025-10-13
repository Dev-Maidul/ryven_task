"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo2 from "../../../public/ryven_co_logo 2.png";
import figma from "../../../public/figma.png";
import vercel from "../../../public/VectorNextJS.svg";

const Footer = () => {
  // Stagger animation for child elements
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center text-center space-y-2 sm:space-y-4 py-6 px-4 sm:py-8 bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div
        className="w-24 h-24 sm:w-[100px] sm:h-[100px] cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 4px 15px rgba(255,255,255,0.3)" }}
        variants={itemVariants}
      >
        <Image
          src={logo2}
          alt="Ryven Logo"
          className="mx-auto object-contain"
        />
      </motion.div>

      {/* Text with icons */}
      <motion.h1
        className="text-white text-[10px] sm:text-[12px] flex justify-center items-center gap-1 sm:gap-2 flex-wrap cursor-default"
        variants={itemVariants}
      >
        Cooked with love in with
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1"
        >
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
        </motion.span>
      </motion.h1>

      {/* Copyright */}
      <motion.div
        className="text-[10px] sm:text-[12px] text-gray-300 block"
        variants={itemVariants}
      >
        © Ryven Global LLC 2025
      </motion.div>
    </motion.div>
  );
};

export default Footer;
