"use client";

import React from "react";
import { Reenie_Beanie } from "next/font/google";
import { motion } from "framer-motion";

const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

function Start() {
  return (
    <div className="h-screen m-auto flex justify-center items-center snap-center">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="mb-2">We take privacy seriously</p>
        <h3 className="mb-2">Before you get started</h3>
        <p className="mb-6 max-w-[75%] font-semibold text-gray-700">
          "We won't share your answers with anyone (and won't ever tell you
          which friend says what about you)"
        </p>
        <div className="mb-6">
          <span className="font-semibold">with love,</span>
          <motion.span
            className={`${reenie_beanie.className} text-3xl px-2 relative`}
          >
            Team Ahead
            <motion.span
              className="bg-white w-full top-0 left-0 h-10 absolute"
              initial={{ x: "0" }}
              whileInView={{
                x: "100%",
                transition: {
                  duration: 2,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
            ></motion.span>
          </motion.span>
        </div>
        <motion.button
          className="bg-black rounded-3xl py-3 px-5 text-white text-sm mb-2"
          initial={{ opacity: 0.5, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Start a Test
        </motion.button>
        <p className="text-xs text-gray-700">Take only 5 min</p>
      </div>
    </div>
  );
}

export default Start;
