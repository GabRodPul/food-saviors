"use client";

import React from "react";

const BakeriesButton: React.FC = () => (
  <button
    onClick={() => console.log("Bakeries clicked")}
    className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#004D47]/50"
  >
    <img src="/bakeriesicon.svg" alt="Bakeries" className="h-8 w-8" />
    <span className="mt-1 text-sm">Bakeries</span>
  </button>
);

export default BakeriesButton;
