"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Vacancy({ heading, bullet1, bullet2, bullet3 }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-2 bg-[#FEFBEC] p-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.75,
          delay: 0,
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
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
    </motion.div>
  );
}

export default Vacancy;
