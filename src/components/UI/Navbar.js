import React from "react";

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
        <img alt="placeholder" src="" />
      </div>
      <div className="flex justify-between items-center w-1/2">
        {navbarOptions.map((item) => (
          <p>{item}</p>
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