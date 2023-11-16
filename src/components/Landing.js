import React from "react";
import { AppleLogo, Star } from "@phosphor-icons/react/dist/ssr";

function Landing() {
  return (
    <div className="flex justify-center items-end h-screen snap-center pb-4">
      <div
        className="w-[85%] mx-auto rounded-xl h-[80%] flex justify-around items-center mb-4  "
        style={{
          background: `rgb(var(--background-pink-rgb))`,
        }}
      >
        <div className="w-[40%]">
          <p className="mb-4">Ahead app</p>
          <h1 className="leading-tight mb-8">
            Master your life <br /> by mastering
            <br /> emotions
          </h1>

          <div className="flex gap-4">
            <div className="flex justify-evenly items-center bg-black rounded-md p-0.5 text-white min-w-[120px]">
              <AppleLogo size={28} color="#ffffff" weight="fill" />
              <div>
                <p className="text-[8px]">Download on the</p>
                <p className="text-[14px] -mt-[2px]">App Store</p>
              </div>
            </div>

            <div className="scale-custom">
              <div className="flex gap-2">
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
              </div>
              <p className="text-sm mt-1">100+ AppStore reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="flex-[0.6]">Hello</div>
      </div>
    </div>
  );
}

export default Landing;
