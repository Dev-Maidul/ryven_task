import React from "react";
import Laptop from "../../../public/Laptop1.png";
import Image from "next/image";
import image1 from "../../../public/image 6344300.png";
import image2 from "../../../public/image 6344302.png";
import image3 from "../../../public/image 6344305.png";
import image4 from "../../../public/image 6344307.png";
import image5 from "../../../public/image 6344319 (1).png";
import image6 from "../../../public/image 6344319 (2).png";
import image7 from "../../../public/image 6344319.png";

const OpenSource = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <div
      className="w-[667px] h-[295px] bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${Laptop.src})` }}
    >
      <div className="flex px-4 mt-4 justify-between items-center gap-4 w-[460px] h-[64px] bg-[rgba(255,255,255,0.1)] mx-auto rounded-[25px]">
                        <div className="w-8 h-8">
                            <Image src={image1} alt="Open Source Icon 1" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image2} alt="Open Source Icon 2" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image3} alt="Open Source Icon 3" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image4} alt="Open Source Icon 4" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image5} alt="Open Source Icon 5" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image6} alt="Open Source Icon 6" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8">
                            <Image src={image7} alt="Open Source Icon 7" width={32} height={32} />
                        </div>
                    </div>
    </div>
    <div className="mt-4 text-center">
      <h1 className="text-4xl font-bold">Open Source</h1>
      <p className="text-gray-400 mt-2">This Portfolio is open source and powered by open source software.</p>
      <p className="text-gray-400 mt-1">The code is available on <a href="https://github.com" className="underline">GitHub</a>.</p>
    </div>
  </div>
);

export default OpenSource;