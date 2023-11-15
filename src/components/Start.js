import React from "react";

function Start() {
  return (
    <div className="h-screen m-auto flex justify-center items-center">
      <div className="text-center">
        <p>We take privacy seriously</p>
        <h3>Before you get started</h3>
        <p>
          "We won't share your answers with anyone (and won't ever tell you
          which friend says what about you)"
        </p>
        <div>with love, SIGN</div>
        <button className="bg-black rounded-3xl py-3 px-5 text-white text-sm">
          Start a Test
        </button>
        <p>Take only 5 min</p>
      </div>
    </div>
  );
}

export default Start;
