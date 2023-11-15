import React from "react";

function Meet() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="m-auto flex justify-between rounded-xl items-center w-[60%]"
        style={{
          background: `rgb(var(--background-orange-rgb))`,
        }}
      >
        <div className="w-1/2 border-2 border-green-700">
          <p>Built out of frustration</p>
          <h2>Meet the ahead app</h2>
        </div>
        <div className="w-1/2 border-2 border-blue-700">
          <p>
            A personalized pocket coach that provides bite- sired,
            science-driven tools to boost emotional intelligence. Think of it as
            a pocket cheerleader towards a better, more fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meet;
