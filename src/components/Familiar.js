"use client";

import React from "react";
import IqCard from "./UI/IqCard";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import familiar from "../../public/assets/familiar.png";
import { motion } from "framer-motion";

function Familiar() {
  const cardContent = [
    {
      emoji: "😠",
      bgColor: "bg-[#D8F2FF]",
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor. elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
      tilt: false,
    },
    {
      emoji: "😍",
      bgColor: "bg-[#EEEBFE]",
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
      tilt: false,
    },
    {
      emoji: "🚀",
      bgColor: "bg-[#6341EF]",
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
      tilt: true,
    },
    {
      emoji: "😶‍🌫️",
      bgColor: "bg-[#FFEFD5]",
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
      tilt: false,
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-around snap-center">
      <div className="w-[75%] mx-auto mt-14 pt-6 flex justify-between items-start">
        <motion.h3 className="w-1/3">
          <motion.span
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
            EQ{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            beats{" "}
          </motion.span>
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
            IQ
          </motion.span>
        </motion.h3>
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
          People with high emotional
          <br /> intelligence (EQ) live more fullfilled
          <br /> lives. They tend to be happier and <br /> have healthier
          relationships.
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
              delay: 2,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          They are more successful in their
          <br /> pursuits and make for inspiring
          <br />
          leaders. According to science, they
          <br /> earn $29k a year.
        </motion.p>
      </div>

      <div className="">
        <h2 className="flex items-center w-[75%] m-auto mt-4 mb-14">
          <motion.span
            initial={{ opacity: 0, x: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1.5,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Does this sound familiar...
          </motion.span>
          <motion.div
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 1.25,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image className="ml-2" src={familiar} width={70} alt="familiar" />
          </motion.div>
        </h2>
        <div className="">
          <Marquee
            speed={75}
            autoFill={true}
            pauseOnHover={true}
            className="flex justify-center items-center py-4"
          >
            {cardContent.map((item, index) => {
              return (
                <IqCard
                  key={index}
                  emoji={item.emoji}
                  bgColor={item.bgColor}
                  heading={item.heading}
                  text={item.text}
                  tilt={item.tilt}
                />
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Familiar;
