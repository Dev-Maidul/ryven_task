import React from "react";
import backgroundImage from "../../../public/background.png";
import portfolio from "../../../public/MainCardTech.png";
import mobile from "../../../public/mobile.jpg";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 w-[1062px] mx-auto border-l border-r border-dashed border-gray-600">
      {/* Card 1 */}
      <div className="">
        

        <div
          className="text-white p-6 rounded-lg flex flex-col justify-end w-[500px] h-[300px] mb-4"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-500">ABOUT ME</h2>
            <p className="text-4xl font-bold text-white">My Story</p>
          </div>
        </div>
        <div
          className="text-white p-6 rounded-lg flex flex-col justify-end w-[500px] h-[300px]"
          style={{
            backgroundImage: `url(${portfolio.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-500">FIGMA</h2>
            <p className="text-4xl font-bold text-white">Download <br /> Portfolio</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="text-white p-6 rounded-lg flex flex-col justify-between"
        style={{
          backgroundImage: `url(${mobile.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2">APP</h2>
          <p className="text-2xl font-bold">LAST PRODUCT IN <br /> PORTFOLIO</p>
        </div>
        <div className="mt-4 flex justify-between items-end bg-[#000000B0] w-full p-4 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2">Memory ClickSt...</h2>
            <p className="text-xl">PRODUCT</p>
          </div>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            Visitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
