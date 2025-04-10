"use client";

import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Footer from "./Footer";
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
    const randomStars = Math.floor(Math.random() * 5) + 1;
    const randomReviews = Math.floor(Math.random() * 200) + 1;
    setStars(Array.from({ length: 5 }, (_, i) => i < randomStars));
    setNumReviews(randomReviews);
  }, []);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white">
      <nav className="fixed top-6 right-5 left-5 z-20 flex items-center justify-between rounded-xl bg-[#004D47]/50 p-4">
        <h1 className="text-xl font-semibold text-white">Food Savers</h1>
        <HamburgerMenu />
      </nav>

      <div className="flex flex-col items-center gap-4 px-4 pt-32 pb-32 text-center">
        <Image
          src="/Surprisebag.svg"
          alt="Surprise Bag"
          width={200}
          height={200}
          className="object-contain"
          priority
        />

        <button
          onClick={handleClick}
          className="w-full max-w-xs rounded-lg bg-[#00A99D] py-2 text-white transition hover:bg-[#00796B]"
        >
          Surprise Bag
        </button>

        <div className="mt-4 flex w-full max-w-xs items-center justify-between text-center">
          <div className="flex items-center space-x-1">
            {stars.map((filled, idx) => (
              <span
                key={idx}
                className={`text-lg ${filled ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-gray-600">({numReviews})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">1.5 EUR.</span>
            <span className="text-sm text-red-600 line-through">3.5 EUR</span>
          </div>
        </div>

        <p className="mt-4 max-w-md text-sm text-gray-600">
          Discover great food at unbeatable prices with Food Savers! This app
          connects you with local restaurants, cafes, and stores offering
          surprise bags of unsold food at a fraction of the cost. Simply pick up
          your mystery bag, enjoy delicious meals, and help reduce food
          waste—one surprise at a time!
        </p>
      </div>

      <div className="fixed bottom-0 left-0 z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default SurpriseBag;
