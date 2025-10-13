"use client";
import React, { useState } from "react";
import bannerImage from "../../../public/background.png";
import LeftQuote from "../../../public/Vector.svg";
import rightQuote from "../../../public/Vector.png";
import Image from "next/image";

const Products = () => {
  const [active, setActive] = useState("Todos");
  const buttons = ["Todos", "Destacados", "Side Projects"];

  return (
    <div className="max-w-[1062px] mx-auto text-white p-4 sm:p-6 mt-4 border-l border-r border-dashed border-gray-600">
      {/* Header */}
      <div className="text-left mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Projects and Products
        </h1>
        <h2 className="text-lg sm:text-xl text-[#ADABC7]">Lista de productos</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 bg-[#1e1d2b] rounded-full p-2">
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

      {/* Card 1 */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg p-2 sm:p-4 mb-4">
        <div className="w-full md:w-1/2">
          <Image
            src={bannerImage}
            alt="banner"
            className="rounded-lg w-full h-auto object-cover sm:h-[230px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <Image src={LeftQuote} alt="quote" className="w-8 h-8 mb-2" />
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-1">
            A Visual Journey Through <br /> Stories from Around the World
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">Huma Legends</h2>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 rounded-lg p-2 sm:p-4 mb-4">
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <Image src={rightQuote} alt="quote" className="w-8 h-8 mb-2" />
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-1">
            App Web de Aprendizaje <br /> para todas las edades...
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">Memory (MCS)</h2>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={bannerImage}
            alt="banner"
            className="rounded-lg w-full h-auto object-cover sm:h-[230px]"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg p-2 sm:p-4 mb-4">
        <div className="w-full md:w-1/2">
          <Image
            src={bannerImage}
            alt="banner"
            className="rounded-lg w-full h-auto object-cover sm:h-[230px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <Image src={LeftQuote} alt="quote" className="w-8 h-8 mb-2" />
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-1">
            Ultimos lanzamientos Hola <br /> Ultimos lanzamientos
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">UBRAND</h2>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-gray-700 rounded hover:bg-[#ff512f] hover:text-white transition-colors duration-300 cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default Products;
