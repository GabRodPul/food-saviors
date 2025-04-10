"use client";

import Image from "next/image";
import React from "react";

const ArrowDownButton: React.FC = () => (
  <button
    onClick={() => console.log("Arrow clicked")}
    className="mt-6 animate-bounce rounded-full p-2 transition-colors duration-300"
    aria-label="Scroll down"
  >
    <Image src="/arrowdown.svg" alt="Arrow down" width={32} height={32} />
    {/*<img src="/arrowdown.svg" alt="Arrow down" className="h-8 w-8" />*/}
  </button>
);

export default ArrowDownButton;
