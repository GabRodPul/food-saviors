"use client";

import Image from "next/image";
import React from "react";

const GroceriesButton: React.FC = () => (
  <button
    onClick={() => console.log("Groceries clicked")}
    className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#004D47]/50"
  >
    <Image src="/groceriesicon.svg" alt="Groceries" width={32} height={32} />
    {/*<img src="/groceriesicon.svg" alt="Groceries" className="h-8 w-8" />*/}
    <span className="mt-1 text-sm">Groceries</span>
  </button>
);

export default GroceriesButton;
