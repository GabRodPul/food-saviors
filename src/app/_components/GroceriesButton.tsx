// components/GroceriesButton.tsx
import React from "react";

const GroceriesButton: React.FC = () => (
  <button className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md">
    <img src="/groceriesicon.svg" alt="Groceries" className="h-8 w-8" />
    <span className="mt-1 text-sm">Groceries</span>
  </button>
);

export default GroceriesButton;
