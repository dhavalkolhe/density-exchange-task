import Image from "next/image";
import React from "react";

import logo from "../../../public/assets/logo.png";

function Navbar() {
  const navbarOptions = [
    "Emotions",
    "Manifesto",
    "Self-awareness test",
    "Work With Us",
  ];

  return (
    <div className="flex justify-between items-center w-[75%] m-auto mt-6">
      <div>
        <Image src={logo} width={70} draggable={false} alt="logo" />
      </div>
      <div className="flex justify-between items-center w-1/2">
        {navbarOptions.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <button className="bg-black rounded-3xl py-3 px-5 text-white text-sm">
          Download app
        </button>
      </div>
    </div>
  );
}

export default Navbar;
