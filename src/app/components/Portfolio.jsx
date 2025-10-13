import React from "react";
import backgroundImage from "../../../public/background.png";
import portfolio from "../../../public/MainCardTech.png";
import mobile from "../../../public/mobile.jpg";

const Portfolio = () => {
  return (
    <div className="max-w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Card 1: About Me */}
          <div
            className="text-white p-6 rounded-lg flex flex-col justify-end h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-1 text-gray-400">
                ABOUT ME
              </h2>
              <p className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                My Story
              </p>
            </div>
          </div>

          {/* Card 2: Figma Portfolio */}
          <div
            className="text-white p-6 rounded-lg flex flex-col justify-end h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${portfolio.src})`,
            }}
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-1 text-gray-400">
                FIGMA
              </h2>
              <p className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                Download <br /> Portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Mobile Project */}
        <div
          className="text-white p-6 rounded-lg flex flex-col justify-between h-[520px] sm:h-[600px] md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url(${mobile.src})`,
          }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">APP</h2>
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              LAST PRODUCT IN <br /> PORTFOLIO
            </p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end bg-[#000000B0] w-full p-4 rounded-lg gap-3 sm:gap-0">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold mb-1">
                Memory ClickSt...
              </h2>
              <p className="text-sm sm:text-lg">PRODUCT</p>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-[#ff512f] transition duration-300">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
