import React from "react";
import { Reenie_Beanie } from "next/font/google";

const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

function Start() {
  return (
    <div className="h-screen m-auto flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="mb-2">We take privacy seriously</p>
        <h3 className="mb-2">Before you get started</h3>
        <p className="mb-6 max-w-[75%] font-semibold text-gray-700">
          "We won't share your answers with anyone (and won't ever tell you
          which friend says what about you)"
        </p>
        <div className="mb-6">
          <span className="font-semibold">with love,</span>
          <span className={`${reenie_beanie.className} text-3xl px-2`}>
            Team Ahead
          </span>
        </div>
        <button className="bg-black rounded-3xl py-3 px-5 text-white text-sm mb-2">
          Start a Test
        </button>
        <p className="text-xs text-gray-700">Take only 5 min</p>
      </div>
    </div>
  );
}

export default Start;
