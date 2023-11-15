"use client";

import Image from "next/image";
import React from "react";
import self from "../../public/assets/self.png";

function SelfImprov() {
  const items = [
    {
      cardTitle: "it's not as easy as 1-2-3",
      cardSubtitle:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      cardTitle: "it's not as easy as 1-2-3",
      cardSubtitle:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      cardTitle: "it's not as easy as 1-2-3",
      cardSubtitle:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
    },
    {
      cardTitle: "it's not as easy as 1-2-3",
      cardSubtitle:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
    },
  ];

  return (
    <>
      <div className="h-screen flex flex-col items-center border-2 border-green-700">
        {/* Timeline */}
        <div className="w-[75%] h-[80%] m-auto border-2 border-red-700">
          <div className="px-12">
            <p className="text-sm">
              Wrong with self-improvement & how we're fixing it.
            </p>
            <div className="flex justify-start gap-4">
              <h2 className="mt-2">Self-improvement. Ugh.</h2>
              <Image src={self} width={50} alt="self" />
            </div>
          </div>
          <div className="timeline-container"></div>
        </div>
      </div>

      {/* Text */}
      <div className="w-[75%] mx-auto flex justify-between items-start">
        <h3 className="w-1/3">
          Be the best you
          <br /> with EQ
        </h3>
        <p className="w-1/3  text-gray-700">
          Not having your own emotions <br />
          under control might be holding
          <br />
          you back.
        </p>
        <p className="w-1/3  text-gray-700">
          Additionally, not understanding
          <br />
          those of others stops you from
          <br />
          being parent, friend you can be.
        </p>
      </div>
    </>
  );
}

export default SelfImprov;
