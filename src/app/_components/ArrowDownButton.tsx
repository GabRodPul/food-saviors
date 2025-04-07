"use client";

import React from "react";

const ArrowDownButton: React.FC = () => (
  <button
    onClick={() => console.log("Arrow clicked")}
    className="mt-6 animate-bounce rounded-full p-2 transition-colors duration-300"
    aria-label="Scroll down"
  >
    <img src="/arrowdown.svg" alt="Arrow down" className="h-8 w-8" />
  </button>
);

export default ArrowDownButton;
