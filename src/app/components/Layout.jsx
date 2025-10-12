import React from "react";
import Hero from "./Hero";
import Certification from "./Certification";
import Awards from "./Awards";
import Social from "./Social";

function Layout() {
  return (
    <div className="bg-[#121120] w-full mx-auto">
      <Certification></Certification>
      <hr className="border-b border-dashed border-gray-600" />
      <Awards></Awards>
      <hr className="border-b border-dashed border-gray-600" />
      <Social></Social>
    </div>
  );
}

export default Layout;
