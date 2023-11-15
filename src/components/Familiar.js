import React from "react";
import IqCard from "./UI/IqCard";

function Familiar() {
  const cardContent = [
    {
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
    },
    {
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
    },
    {
      heading: "You argue with a collague",
      text: "Do incididunt anim elit et in dolor.Ad et nisi consectetur tempor voluptate nulla.",
    },
  ];
  return (
    <div className="h-screen border-2 border-red-700">
      <div className="w-[75%] m-auto mt-6 flex justify-between items-center">
        <h3 className="w-1/3">EQ beats IQ</h3>
        <p className="w-1/3">
          People with high emotional intelligence (EQ) live more filled lives.
          They tend to be happier and have healthier relationships.
        </p>
        <p className="w-1/3">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </p>
      </div>

      <div className="">
        <h2 className="w-[85%] m-auto mt-4">Does this sound familiar...</h2>
        <div className="flex justify-center items-center gap-5">
          {cardContent.map((item) => {
            return (
              <IqCard width="w-48" heading={item.heading} text={item.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Familiar;
