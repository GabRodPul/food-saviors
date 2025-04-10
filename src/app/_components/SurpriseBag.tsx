"use client";

import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SurpriseBag: React.FC = () => {
  const router = useRouter();

  const [stars, setStars] = useState<boolean[]>([]);
  const [numReviews, setNumReviews] = useState<number>(0);

  const handleClick = () => {
    router.push("/surprise-details");
  };

  useEffect(() => {
    const numStars = Math.floor(Math.random() * 5) + 1;
    setStars(Array.from({ length: 5 }, (_, i) => i < numStars));
    setNumReviews(Math.floor(Math.random() * 200));
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <nav className="fixed top-6 right-5 left-5 z-10 flex items-center justify-between rounded-xl bg-[#004D47]/50 p-4">
        <h1 className="text-xl font-semibold text-white">Food Savers</h1>
        <HamburgerMenu />
      </nav>

      <div className="relative z-10 px-4 py-44">
        <div className="relative">
          <Image
            src="/Surprisebag.svg"
            alt="Surprise Bag"
            width={400}
            height={250}
            className="h-auto w-full object-cover"
          />
        </div>

        {}
        {stars.length > 0 && (
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="flex items-center">
              {stars.map((filled, idx) => (
                <span
                  key={idx}
                  className={`text-lg ${filled ? "text-yellow-400" : "text-black"}`}
                >
                  ★
                </span>
              ))}
              <span className="ml-1 text-sm">({numReviews})</span>
            </div>
            <span className="text-xl font-semibold">1.5 EUR.</span>
            <span className="ml-2 text-sm text-red-600 line-through">
              3.5 EUR
            </span>
          </div>
        )}

        <div
          className="mt-4 cursor-pointer rounded-lg bg-[#00A99D] py-2 text-center text-white hover:bg-[#00796B]"
          onClick={handleClick}
        >
          <p className="font-semibold">Surprise Bag</p>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Discover great food at unbeatable prices with Food Savers! This app
            connects you with local restaurants, cafes, and stores offering
            surprise bags of unsold food at a fraction of the cost. Simply pick
            up your mystery bag, enjoy delicious meals, and help reduce food
            waste—one surprise at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurpriseBag;
