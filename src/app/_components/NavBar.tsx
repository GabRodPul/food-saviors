"use client";

import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-6 right-5 left-5 z-10 flex items-center justify-between rounded-xl bg-[#004D47]/50 p-4">
      <h1 className="text-xl font-semibold text-white">Food Savers</h1>
      <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
