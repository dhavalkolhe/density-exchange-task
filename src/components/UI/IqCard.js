import React from "react";
import { AirplaneTilt } from "@phosphor-icons/react/dist/ssr";

function IqCard({ emoji, bgColor, heading, text, tilt }) {
  const styleOptions = `flex flex-col mx-[24px] ${bgColor} gap-2 w-[325px] rounded-xl py-6 px-4 ${
    tilt ? "-rotate-[4deg] scale-[1.05] text-white" : ""
  }`;
  return (
    <div className={styleOptions}>
      <p className="text-3xl">{emoji}</p>
      <p className="font-semibold text-lg">{heading}</p>
      <p className="w-[85%]">{text}</p>
    </div>
  );
}

export default IqCard;
