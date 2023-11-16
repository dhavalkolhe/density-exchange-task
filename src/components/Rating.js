"use client";

import {
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { motion } from "framer-motion";

function Rating() {
  return (
    <div className="h-screen snap-center flex flex-col justify-end items-center">
      <div className="h-[80vh] w-[60%] flex flex-col justify-around items-center mb-4 rounded-xl bg-[#EDF8FE] -z-[11]">
        <div className="flex flex-col justify-center items-center gap-2">
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let your friends, family and co-workers (anonymously) rate your
            skills.
          </motion.p>
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ever wondered what others think of you?
          </motion.h2>
        </div>
        <div className="w-[80%] flex justify-between items-center text-center relative gap-2">
          <motion.div
            initial={{ opacity: 0, y: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white rounded-full">
              <NumberCircleOne size={32} color="#d58d07" weight="fill" />
            </div>
            <motion.p className="text-xs mt-2">
              Answer questions on your social skills
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white rounded-full">
              <NumberCircleTwo size={32} color="#d58d07" weight="fill" />{" "}
            </div>
            <motion.p className="text-xs mt-2">
              Let others anonymously answer the same questions about you
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-50%", scale: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.75,
                delay: 0,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white rounded-full">
              <NumberCircleThree size={32} color="#d58d07" weight="fill" />
            </div>
            <motion.p className="text-xs mt-2">
              Non labore aliquip laborum cillum est nisi laborum do.
            </motion.p>
          </motion.div>
          <div className="h-[2px] w-[71%] top-4 -z-[10] absolute left-[12%] border-2 border-dashed border-[#E6C87F]"></div>
        </div>
        <div className="w-[70%] h-[30vh] bg-white -z-[11] rounded-xl flex items-center justify-center">
          <div className="w-full flex justify-between items-center relative p-8">
            <div className="relative">
              <div className="w-[20px] rounded-full bg-[#6341EF] aspect-square"></div>
              <motion.div
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
                className="absolute bg-[#6341EF] text-white text-sm rounded-lg -top-12 -left-12 px-4 py-2"
              >
                You
              </motion.div>
            </div>
            <div className="relative">
              <div className="w-[20px] rounded-full bg-[#3DC5FD] aspect-square"></div>
              <motion.div
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
                className="absolute bg-[#3DC5FD] text-white text-sm rounded-lg top-8 left-2 px-3 py-2"
              >
                Anonymonos
              </motion.div>
            </div>
            <div className="relative">
              <div className="w-[20px] rounded-full bg-[#FDB338] aspect-square"></div>
              <motion.div
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
                className="absolute bg-[#FDB338] text-white text-sm rounded-lg -top-12 left-2 px-3.5 py-2"
              >
                Anonymonos
              </motion.div>
            </div>
            <div className="relative">
              <div className="w-[20px] rounded-full bg-[#58C896] aspect-square"></div>
              <motion.div
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
                className="absolute bg-[#58C896] text-white text-sm rounded-lg top-8 left-2 px-3 py-2"
              >
                Anonymonos
              </motion.div>
            </div>
            <div className="absolute h-[1px] bg-gray-400 w-[88%] -z-[10]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
