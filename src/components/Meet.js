"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import meet from "../../public/assets/meet.png";
import meet_2 from "../../public/assets/meet_2.png";

function Meet() {
  return (
    <div className="h-screen flex justify-center items-center pt-16 snap-center">
      <div
        className="m-auto flex justify-evenly rounded-xl items-center w-[75%] h-[80%]"
        style={{
          background: `rgb(var(--background-orange-rgb))`,
        }}
      >
        <div className="flex flex-col justify-around items-start w-1/2 h-full">
          <div>
            <motion.p
              className="text-sm font-semibold mb-2"
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
              Built out of frustration
            </motion.p>
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
              Meet the ahead app
            </motion.h2>
          </div>

          <div className="flex justify-around items-center w-[85%] rotate-[-12deg]">
            <motion.div
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
              <Image src={meet} width={140} alt="meet" />
            </motion.div>
            <motion.div
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
              <Image src={meet_2} width={140} alt="meet" />
            </motion.div>
          </div>
        </div>
        <div className="w-[35%] relative top-8 leading-relaxed text-gray-700">
          <motion.p
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
            A personalized pocket coach that provides bite-
            <br />
            sized, science-driven tools to boost emotional
            <br /> intelligence. <br />
            <br /> Think of it as a pocket cheerleader towards a<br /> better,
            more fulfilling.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Meet;
