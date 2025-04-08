"use client";

import React from "react";

const RestaurantsButton: React.FC = () => (
  <button
    onClick={() => console.log("Restaurants clicked")}
    className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#004D47]/50"
  >
    <img src="/restauranticon.svg" alt="Restaurants" className="h-8 w-8" />
    <span className="mt-1 text-sm">Restaurants</span>
  </button>
);

export default RestaurantsButton;
