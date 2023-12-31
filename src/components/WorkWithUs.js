"use client";

import Image from "next/image";
import React from "react";
import work from "../../public/assets/work.png";
import { motion } from "framer-motion";

function WorkWithUs() {
  const workCardsContent = [
    {
      heading: "Power Through, Even when the going gets tough",
      text: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc.",
    },
    {
      heading: "Power Through, Even when the going gets tough",
      text: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc.",
    },
    {
      heading: "Power Through, Even when the going gets tough",
      text: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc.",
    },
    {
      heading: "Power Through, Even when the going gets tough",
      text: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc.",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center snap-center">
      <div
        className="w-[85%] h-[80%] mx-auto mt-14 rounded-xl px-10 py-2"
        style={{ background: `rgb(var(--background-pink-rgb))` }}
      >
        <div className="flex justify-between items-center mt-10 mb-4 pl-2 max-w-[90%] mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Work with us
          </motion.h2>
          <motion.p
            className="text-5xl font-semibold text-[#5E3CED] px-[75px]"
            initial={{ opacity: 0, x: "50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ahead
          </motion.p>
        </div>

        <div className="flex justify-around items-start h-[80%]">
          {/* LEFT SIDE */}
          <div className="w-2/5 bg-white rounded-2xl">
            <div className="px-6 mt-4 mb-4">
              <Image src={work} width={35} alt="work" />
            </div>
            <p className="text-lg font-semibold px-6 mb-2">About</p>
            <p className="text-gray-700 px-6 leading-relaxed mb-12">
              At ahead our goal is to make self- <br />
              improvement fun and lasting. We know there's
              <br /> a way how to make it work. And that's what
              <br /> aHead is all about!
            </p>

            <div
              className="rounded-2xl px-6"
              style={{ background: `rgb(var(--background-orange-rgb))` }}
            >
              <p className="text-lg font-semibold pt-4 mb-4">Product</p>
              <p className="text-gray-700 leading-relaxed pb-6">
                Sure you could spend ages reading books or
                <br /> seating in seminars on how to become a better
                <br /> spouse, parent or manager - like we did...
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="custom-scroll flex flex-col gap-4 h-full px-12 overflow-hidden overflow-y-scroll">
            {workCardsContent.map((item, index) => {
              return (
                <div className="bg-white rounded-2xl p-6 w-80" key={index}>
                  <p className="font-bold mb-2">{item.heading}</p>
                  <p className="text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
