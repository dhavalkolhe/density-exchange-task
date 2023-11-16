import React from "react";
import Vacancy from "./UI/Vacancy";

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
      <h2 className="px-4">Open Vacancies</h2>
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
