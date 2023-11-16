"use client";

import Image from "next/image";
import React from "react";
import self from "../../public/assets/self.png";
import { motion } from "framer-motion";

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
      {/* <div className="h-screen flex flex-col justify-end items-center pb-2 snap-center border-2 border-green-700">
        <div className="w-[75%] h-[80%] mx-auto border-2 mb-3 border-red-700">
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
      </div> */}

      {/* Text */}
      <div className="w-[75%] mx-auto flex justify-between items-start snap-center">
        <h3 className="w-1/3">
          <motion.span
            initial={{ opacity: 0, x: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0.25,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Be the best you
          </motion.span>
          <br />{" "}
          <motion.span
            initial={{ opacity: 0, x: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 1,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            with EQ
          </motion.span>
        </h3>
        <motion.p
          className="w-1/3  text-gray-700"
          initial={{ opacity: 0, y: "-50%", scale: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1.5,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Not having your own emotions <br />
          under control might be holding
          <br />
          you back.
        </motion.p>
        <motion.p
          className="w-1/3  text-gray-700"
          initial={{ opacity: 0, y: "-50%", scale: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1.75,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Additionally, not understanding
          <br />
          those of others stops you from
          <br />
          being parent, friend you can be.
        </motion.p>
      </div>
    </>
  );
}

export default SelfImprov;
