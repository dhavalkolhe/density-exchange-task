"use client";

import React, { useState } from "react";

function Vacancy({ heading, bullet1, bullet2, bullet3 }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col gap-2 bg-[#FEFBEC] p-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="text-md font-semibold">{heading}</p>
      <ul className="text-sm list-disc pl-4">
        <li>{bullet1}</li>
        <li>{bullet2}</li>
        <li>{bullet3}</li>
      </ul>
      <div className="mt-4">
        <button className="bg-black rounded-2xl py-2 px-3 text-white text-xs">
          See Details
        </button>
      </div>
    </div>
  );
}

export default Vacancy;
