import React from "react";

function Waves() {
  return (
    <svg
      className="waves"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
        <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use href="#wave" x="48" y="7" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}

export default Waves;
