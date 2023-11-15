import React from "react";
import { AppleLogo, Star } from "@phosphor-icons/react/dist/ssr";

function Landing() {
  return (
    <div
      className="w-[85%] mt-4 m-auto rounded-xl h-[80vh] mb-[10vh]"
      style={{
        background: `rgb(var(--background-pink-rgb))`,
      }}
    >
      <div className="border-2 border-red-700 w-[45%]">
        <p>Ahead app</p>
        <h1>Master your life by mastering emotions</h1>

        <div className="flex">
          <button className="flex justify-center items-center bg-black rounded-xl py-1 px-3 text-white">
            <AppleLogo size={16} color="#ffffff" weight="fill" />
            <div>
              <p className="text-[8px]">Download on the</p>
              <p className="text-[14px]">App Store</p>
            </div>
          </button>

          <div>
            <div className="flex">
              <Star size={16} color="#fdd131" weight="fill" />
              <Star size={16} color="#fdd131" weight="fill" />
              <Star size={16} color="#fdd131" weight="fill" />
              <Star size={16} color="#fdd131" weight="fill" />
              <Star size={16} color="#fdd131" weight="fill" />
            </div>
            <p>100+ AppStore reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
