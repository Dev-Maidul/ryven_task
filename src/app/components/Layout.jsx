import React from "react";
import Hero from "./Hero";
import Certification from "./Certification";
import Awards from "./Awards";
import Social from "./Social";
import Portfolio from "./Portfolio";
import Products from "./Products";
import Framework from "./Framework";
import OpenSource from "./OpenSource";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#121120] w-full mx-auto">
      <Certification></Certification>
      <hr className="border-b border-dashed border-gray-600" />
      <Awards></Awards>
      <hr className="border-b border-dashed border-gray-600" />
      <Social></Social>
      {/* <Portfolio></Portfolio> */}
      <hr className="border-b border-dashed border-gray-600" />
      <Products></Products>
      <Framework></Framework>
      <OpenSource></OpenSource>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
