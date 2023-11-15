import React from "react";

function WorkWithUs() {
  const workCardsContent = [
    { heading: "Power Through", text: "Yooooo" },
    { heading: "Learn More", text: "Holaa" },
    { heading: "Power Through", text: "Yooooo" },
    { heading: "Learn More", text: "Holaa" },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="w-[85%] h-[80%] m-auto rounded-xl px-10 py-2"
        style={{ background: `rgb(var(--background-pink-rgb))` }}
      >
        <div className="flex justify-between items-center mt-10">
          <h3>Work with us</h3>
          <p>ahead</p>
        </div>

        <div className="flex  justify-between items-center">
          {/* LEFT SIDE */}
          <div className="w-2/5 bg-white rounded-2xl">
            <img alt="placeholder" src="" />
            <p>About</p>
            <p>
              Minim nulla cillum irure deserunt amet dolore.Duis reprehenderit
              ex eiusmod ipsum voluptate minim voluptate do eiusmod.Enim mollit
              minim sint laboris eu mollit.
            </p>

            <div
              className="rounded-2xl"
              style={{ background: `rgb(var(--background-orange-rgb))` }}
            >
              <img alt="placeholder" src="" />
              <p>Product</p>
              <p>
                Minim nulla cillum irure deserunt amet dolore.Duis reprehenderit
                ex eiusmod ipsum voluptate minim voluptate do eiusmod.Enim
                mollit minim sint laboris eu mollit.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 border-2 border-red-700">
            {workCardsContent.map((item) => {
              return (
                <div className="bg-white rounded-2xl p-3 w-60">
                  <p>{item.heading}</p>
                  <p>{item.text}</p>
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
