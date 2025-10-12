import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/ryven_co_logo 1.png";
function Navbar() {
  return (
    <div className="h-[100px]  flex">
      <div className="menu bg-white flex items-center justify-between w-[641px] h-[54px] mx-auto rounded-[99px] text-black p-4">
        <div className="logo">
          <Image src={logo} alt="Logo"></Image>
        </div>
        <div className="menuItem flex items-center gap-4">
          <Link href={"/services"}>Services</Link>
          <Link href={"/services"}>Experiences</Link>
          <Link href={"/services"}>Work</Link>
        </div>
        <div className="button">
          <button className="linkedIn">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
