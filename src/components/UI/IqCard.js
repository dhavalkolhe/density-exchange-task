import React from "react";
import { AirplaneTilt } from "@phosphor-icons/react/dist/ssr";

function IqCard({ width, heading, text }) {
  const styleOptions = `flex ${width} border-2 border-red-700 rounded-xl`;
  return (
    <div className={styleOptions}>
      <AirplaneTilt size={200} color="#fdd131" weight="fill" />
      <p>{heading}</p>
      <p>{text}</p>
    </div>
  );
}

export default IqCard;
