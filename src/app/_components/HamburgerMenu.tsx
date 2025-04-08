"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition hover:opacity-70"
      >
        <img src="/hamburgermenu.svg" alt="Menu" className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-[#004D47]/50 py-2 text-white shadow-lg backdrop-blur-md">
          <button
            onClick={() => handleNavigate("/about")}
            className="block w-full px-4 py-2 text-left hover:bg-[#004D47]"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate("/food-groceries")}
            className="block w-full px-4 py-2 text-left hover:bg-[#004D47]"
          >
            Food & Groceries
          </button>
          <button
            onClick={() => handleNavigate("/login")}
            className="block w-full px-4 py-2 text-left hover:bg-[#004D47]"
          >
            Log In
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className="block w-full px-4 py-2 text-left hover:bg-[#004D47]"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
