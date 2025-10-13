"use client";
import React from "react";
import { motion } from "framer-motion";
import Laptop from "../../../public/Laptop1.png";
import Image from "next/image";
import image1 from "../../../public/image 6344300.png";
import image2 from "../../../public/image 6344302.png";
import image3 from "../../../public/image 6344305.png";
import image4 from "../../../public/image 6344307.png";
import image5 from "../../../public/image 6344319 (1).png";
import image6 from "../../../public/image 6344319 (2).png";
import image7 from "../../../public/image 6344319.png";

const OpenSource = () => {
  const icons = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6">
      {/* Laptop Background */}
      <div
        className="w-full max-w-[667px] aspect-[667/295] bg-cover bg-center rounded-lg relative cursor-pointer"
        style={{ backgroundImage: `url(${Laptop.src})` }}
      >
        {/* Icons Container */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-[460px] bg-[rgba(255,255,255,0.1)] rounded-[25px] p-2 overflow-x-auto">
          {icons.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-6 h-6 sm:w-10 sm:h-10 cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img}
                alt={`Open Source Icon ${idx + 1}`}
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <motion.div
        className="mt-6 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Open Source</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          This Portfolio is open source and powered by open source software.
        </p>
        <motion.p
          className="text-gray-400 mt-1 text-sm sm:text-base"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          The code is available on{" "}
          <a
            href="https://github.com"
            className="underline cursor-pointer"
            target="_blank"
          >
            GitHub
          </a>
          .
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OpenSource;
