import React from "react";

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
            <p className="text-sm font-semibold mb-2">
              Built out of frustration
            </p>
            <h2>Meet the ahead app</h2>
          </div>

          <div className="">Avatar</div>
        </div>
        <div className="w-[35%] relative top-8 leading-relaxed text-gray-700">
          <p>
            A personalized pocket coach that provides bite-
            <br />
            sized, science-driven tools to boost emotional
            <br /> intelligence. <br />
            <br /> Think of it as a pocket cheerleader towards a<br /> better,
            more fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meet;
