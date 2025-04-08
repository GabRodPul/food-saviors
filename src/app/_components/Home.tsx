import React from "react";
import ArrowDownButton from "./ArrowDownButton";
import RestaurantsButton from "./RestaurantsButton";
import BakeriesButton from "./BakeriesButton";
import GroceriesButton from "./GroceriesButton";
import HamburgerMenu from "./HamburgerMenu";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <nav className="fixed top-6 right-5 left-5 z-10 flex items-center justify-between rounded-xl bg-[#004D47]/50 p-4">
        <h1 className="text-xl font-semibold text-white">Food Savers</h1>
        <HamburgerMenu />
      </nav>

      <div className="flex h-[70vh] flex-col items-center justify-center px-12 pt-20 text-center text-white">
        <h2 className="text-3xl leading-snug font-bold">
          Save Food.
          <br /> Save Money.
          <br /> Save the Planet.
        </h2>
        <ArrowDownButton />
      </div>

      <div className="absolute right-0 bottom-10 left-0 flex justify-center">
        <div className="flex space-x-4 rounded-lg bg-[#004D47]/50 p-6">
          <RestaurantsButton />
          <BakeriesButton />
          <GroceriesButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
