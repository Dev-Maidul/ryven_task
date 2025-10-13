"use client";
import React, { useState } from "react";
import bannerImage from "../../../public/background.png";
import LeftQuote from "../../../public/Vector.svg";
import rightQuote from "../../../public/Vector.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Products = () => {
  const [active, setActive] = useState("Todos");
  const buttons = ["Todos", "Destacados", "Side Projects"];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="max-w-[1062px] mx-auto text-white p-4 sm:p-6 mt-4 border-l border-r border-dashed border-gray-600">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Projects and Products
        </h1>
        <h2 className="text-lg sm:text-xl text-[#ADABC7]">Lista de productos</h2>

        {/* Filter Buttons (Centered) */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 bg-[#1e1d2b] rounded-full p-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`px-3 sm:px-4 py-2 rounded-full cursor-pointer transition duration-300 text-sm sm:text-base ${
                active === btn
                  ? "bg-white text-[#1e1d2b]"
                  : "bg-gray-700 text-white hover:bg-[#ff512f] hover:text-white"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      {[
        {
          id: 1,
          image: bannerImage,
          quote: LeftQuote,
          title: "A Visual Journey Through Stories from Around the World",
          subtitle: "Huma Legends",
          reverse: false,
        },
        {
          id: 2,
          image: bannerImage,
          quote: rightQuote,
          title: "App Web de Aprendizaje para todas las edades...",
          subtitle: "Memory (MCS)",
          reverse: true,
        },
        {
          id: 3,
          image: bannerImage,
          quote: LeftQuote,
          title: "Ultimos lanzamientos Hola Ultimos lanzamientos",
          subtitle: "UBRAND",
          reverse: false,
        },
      ].map((card) => (
        <motion.div
          key={card.id}
          className={`flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg p-2 sm:p-4 mb-4 cursor-pointer ${
            card.reverse ? "md:flex-row-reverse" : ""
          }`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={card.image}
              alt="banner"
              className="rounded-lg w-full h-auto object-cover sm:h-[230px]"
            />
          </motion.div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <Image src={card.quote} alt="quote" className="w-8 h-8 mb-2" />
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-1">
              {card.title}
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold">{card.subtitle}</h2>
          </div>
        </motion.div>
      ))}

      {/* Load More Button */}
      <div className="text-center mt-6">
  <motion.button
    className="px-6 py-3 bg-gray-700 rounded-lg text-white cursor-pointer transition-all duration-300 touch-manipulation select-none min-h-[44px] min-w-[44px]"
    whileHover={{
      scale: 1.05,
      filter: "brightness(1.2)",
      boxShadow: "0px 4px 15px rgba(255, 81, 47, 0.4)",
    }}
    whileTap={{
      scale: 0.95,
      filter: "brightness(0.9)",
      boxShadow: "0px 2px 8px rgba(255, 81, 47, 0.3)",
    }}
    transition={{ 
      type: "spring",
      stiffness: 400,
      damping: 17
    }}
    onTapStart={(e) => e.preventDefault()}
    style={{ 
      WebkitTapHighlightColor: 'transparent',
      WebkitTouchCallout: 'none'
    }}
  >
    Ver mas
  </motion.button>
</div>
    </div>
  );
};

export default Products;
