import React from "react";
import bannerImage from "../../../public/thumbnail.png";

function Hero() {
  return (
    <div
      className="relative h-[720px] bg-cover bg-center overflow-hidden mb-4"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121120]/70"></div>

      <div className="relative z-10 flex items-center justify-center text-white w-[840px] mx-auto h-screen">
  <div className="flex flex-col items-center justify-center text-left">
    <h1 className="text-[96px] font-bold tracking-[-0.02em] leading-[1.05]">
  CREATIVE DEVELOPER SINCE <br />
  <span className="text-[#ff512f]">2020</span>
</h1>

    <p className="font-bold text-[25px]">Over the last 5y, I’ve empowered +9 companies</p>
    <span className="text-[#F5F5F5B8] text-[20px]">
      Developing user-centric interfaces that captivate and engage <br /> audiences and make a real impact.
    </span>
  </div>
</div>

    </div>
  );
}

export default Hero;
