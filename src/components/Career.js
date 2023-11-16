"use client";

import React from "react";
import Vacancy from "./UI/Vacancy";
import { motion } from "framer-motion";

function Career() {
  const openings = [
    {
      heading: "Senior Full Stack Engineer",
      bullet1: "Full-time position",
      bullet2: "Berlin or remote",
      bullet3: "$65-85k, 0.5-1.5% equity share options",
    },
    {
      heading: "Senior Full Stack Engineer",
      bullet1: "Full-time position",
      bullet2: "Berlin or remote",
      bullet3: "$65-85k, 0.5-1.5% equity share options",
    },
    {
      heading: "Senior Full Stack Engineer",
      bullet1: "Full-time position",
      bullet2: "Berlin or remote",
      bullet3: "$65-85k, 0.5-1.5% equity share options",
    },
  ];

  return (
    <div className="w-[75%] mx-auto mb-10 p-12 snap-start">
      <motion.h2
        className="px-4"
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
        Open Vacancies
      </motion.h2>
      <div className="flex justify-center items-center gap-6 h-[250px]">
        {openings.map((item, index) => {
          return (
            <Vacancy
              key={index}
              heading={item.heading}
              bullet1={item.bullet1}
              bullet2={item.bullet2}
              bullet3={item.bullet3}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Career;
