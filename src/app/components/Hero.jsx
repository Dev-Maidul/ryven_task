"use client";
import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../../public/thumbnail.png";

function Hero() {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const yearVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.5 }
    }
  };

  const yearBounceVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, delay: 1.2, ease: "easeOut" }
    }
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.1], 
      transition: { duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 pt-16 z-1" 
      style={{ backgroundImage: `url(${bannerImage.src})` }}
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121120]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-[840px]">
        {/* Title */}
        <motion.h1 
          className="font-bold tracking-[-0.02em] leading-tight text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px]"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          CREATIVE DEVELOPER SINCE{" "} <br />
          <motion.span 
            className="text-[#ff512f] inline-block"
            variants={yearVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={yearBounceVariants}
              animate="animate"
            >
              2020
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Text below */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-bold text-[16px] sm:text-[20px] md:text-[25px] mt-4">
            Over the last 5y, I've empowered +9 companies
          </p>

          <p className="text-[#F5F5F5B8] text-[14px] sm:text-[16px] md:text-[20px] mt-2 leading-relaxed">
            Developing user-centric interfaces that captivate and engage <br className="hidden sm:block" />
            audiences and make a real impact.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;