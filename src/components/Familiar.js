import React from "react";
import IqCard from "./UI/IqCard";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import familiar from "../../public/assets/familiar.png";

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
    <div className="h-screen flex flex-col justify-around">
      <div className="w-[75%] mx-auto mt-6 flex justify-between items-start">
        <h3 className="w-1/3">EQ beats IQ</h3>
        <p className="w-1/3  text-gray-700">
          People with high emotional
          <br /> intelligence (EQ) live more fullfilled
          <br /> lives. They tend to be happier and <br /> have healthier
          relationships.
        </p>
        <p className="w-1/3  text-gray-700">
          They are more successful in their
          <br /> pursuits and make for inspiring
          <br />
          leaders. According to science, they
          <br /> earn $29k a year.
        </p>
      </div>

      <div className="">
        <h2 className="flex items-center w-[75%] m-auto mt-4 mb-14">
          Does this sound familiar...
          <Image className="ml-2" src={familiar} width={70} alt="familiar" />
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
