// components/Home.tsx
import React from "react";
import ArrowDownButton from "./ArrowDownButton";
import RestaurantsButton from "./RestaurantsButton";
import BakeriesButton from "./BakeriesButton";
import GroceriesButton from "./GroceriesButton";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <nav className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-white">Food Savers</h1>
        <button className="text-white">
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      <div className="flex h-[70vh] flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="text-3xl leading-snug font-bold">
          Save Food.
          <br /> Save Money.
          <br /> Save the Planet.
        </h2>
        <ArrowDownButton />
      </div>

      <div className="absolute right-0 bottom-10 left-0 flex justify-center space-x-4">
        <RestaurantsButton />
        <BakeriesButton />
        <GroceriesButton />
      </div>
    </div>
  );
};

export default Home;
