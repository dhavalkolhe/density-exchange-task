"use client";

import React from "react";
import { AppleLogo, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { motion } from "framer-motion";
import landing from "../../public/assets/landing.png";

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
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, translateX: "-50%", scale: 0 }}
            animate={{ opacity: 1, translateX: "0", scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Ahead app
          </motion.p>
          <motion.h1
            className="leading-tight mb-8"
            initial={{ opacity: 0, translateX: "-50%", scale: 0 }}
            animate={{ opacity: 1, translateX: "0", scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Master your life <br /> by mastering
            <br /> emotions
          </motion.h1>

          <div className="flex gap-4">
            <motion.div
              className="flex justify-evenly items-center bg-black rounded-md p-0.5 text-white min-w-[120px]"
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
              <AppleLogo size={28} color="#ffffff" weight="fill" />
              <div>
                <p className="text-[8px]">Download on the</p>
                <p className="text-[14px] -mt-[2px]">App Store</p>
              </div>
            </motion.div>

            <motion.div
              className="scale-custom"
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
              <div className="flex gap-2">
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
                <Star size={16} color="#fdd131" weight="fill" />
              </div>
              <p className="text-sm mt-1">100+ AppStore reviews</p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <motion.div
          className="flex-[0.6] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.75,
              delay: 0,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image src={landing} width={300} alt="landing" />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
