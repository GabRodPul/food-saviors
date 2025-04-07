import React from "react";

const RestaurantsButton: React.FC = () => (
  <button className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md">
    <img src="/restauranticon.svg" alt="Restaurants" className="h-8 w-8" />
    <span className="mt-1 text-sm">Restaurants</span>
  </button>
);

export default RestaurantsButton;
