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
    <div className="text-white p-4 w-[1062px] mx-auto mt-2  border-l border-r border-dashed border-gray-600 ">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-[32px] font-bold">Projects and Products</h1>
        <h2 className="text-[24px] text-[#ADABC7]">Lista de productos</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mt-4 bg-[#1e1d2b] rounded-full p-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`px-4 py-2 rounded-full cursor-pointer transition duration-300 ${
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

      {/* Card Grid */}
      <div className="">
        <div className=" rounded-lg p-4 flex  gap-6">
          <div className="w-[430px]">
            <Image
              src={bannerImage}
              alt="banner"
              className="rounded-lg  h-[230px]"
            />
          </div>

          <div className="w-[578px]">
            <Image src={LeftQuote} alt="quote"></Image>
            <h1 className="font-bold mt-2 text-[32px] ml-4">
              A Visual Journey Through <br /> Stories from Around the <br />{" "}
              World
            </h1>
            <h1 className="text-[24px] ml-4">Huma Legends</h1>
          </div>
        </div>
      </div>
      {/* Card Grid */}
      <div className="mt-2">
        <div className=" rounded-lg p-4 flex  gap-6">
             <div className="w-[578px]">
            <Image src={rightQuote} alt="quote"></Image>
            <h1 className="font-bold mt-2 text-[32px] ml-4">
             App Web de Aprendizaje <br /> para todas las edades...
            </h1>
            <h1 className="text-[24px] ml-4">Memory (MCS)</h1>
          </div>
          <div className="w-[430px]">
            <Image
              src={bannerImage}
              alt="banner"
              className="rounded-lg  h-[230px]"
            />
          </div>

         
        </div>
      </div>
      {/* Card Grid */}
      <div className="mt-2">
        <div className=" rounded-lg p-4 flex  gap-6">
          <div className="w-[430px]">
            <Image
              src={bannerImage}
              alt="banner"
              className="rounded-lg  h-[230px]"
            />
          </div>

          <div className="w-[578px]">
            <Image src={LeftQuote} alt="quote"></Image>
            <h1 className="font-bold mt-2 text-[32px] ml-4">
              Ultimos lanzamientos Hola <br /> Ultimos lanzamientos
            </h1>
            <h1 className="text-[24px] ml-4">UBRAND</h1>
          </div>
        </div>
      </div>
      {/* Load More Button */}
      <div className="text-center mt-6 ">
        <button className="px-4 py-2 bg-gray-700 rounded  hover:bg-[#ff512f] hover:text-white transition-colors duration-300 cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default Products;
