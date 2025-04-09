"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UserProfile: React.FC = () => {
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Hydration safety: only set userName after the component mounts on the client
    const nameFromUrl = searchParams.get("userName");
    setUserName(nameFromUrl); // Dynamically set after the component is mounted
  }, [searchParams]);

  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const recentItems = [
    {
      name: "La Korienda",
      category: "Restaurant",
      imageUrl: "/LaKorienda.svg",
    },
    {
      name: "Mercadona",
      category: "Supermarket",
      imageUrl: "/Marcadona.svg",
    },
    {
      name: "Koroyo BBQ",
      category: "Restaurant",
      imageUrl: "/KroeyoBBQ.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-screen-lg">
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#004D47] p-6 text-4xl text-white">
            {userName?.slice(0, 2).toUpperCase() ?? "UN"}
          </div>
          <p className="mt-4 text-xl font-semibold text-[#004D47]">
            Welcome {userName ?? "User"}
          </p>
        </div>

        {/* Stats Section */}
        <div className="my-6 text-center">
          <h2 className="text-2xl font-bold text-[#004D47]">
            See how much you have saved
          </h2>
          <div className="mt-4 flex flex-col items-center space-y-4">
            {" "}
            {/* Adjust flex layout */}
            <div className="w-56">
              <label htmlFor="week" className="block text-sm font-semibold">
                Week
              </label>
              <input
                id="week"
                type="text"
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="mt-2 w-full rounded-md border border-[#009688] px-3 py-2 focus:ring-2 focus:ring-[#009688]"
              />
            </div>
            <div className="w-56">
              <label htmlFor="month" className="block text-sm font-semibold">
                Month
              </label>
              <input
                id="month"
                type="text"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="mt-2 w-full rounded-md border border-[#009688] px-3 py-2 focus:ring-2 focus:ring-[#009688]"
              />
            </div>
            <div className="w-56">
              <label htmlFor="year" className="block text-sm font-semibold">
                Year
              </label>
              <input
                id="year"
                type="text"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mt-2 w-full rounded-md border border-[#009688] px-3 py-2 focus:ring-2 focus:ring-[#009688]"
              />
            </div>
          </div>
        </div>

        {}
        <div className="my-8">
          <h3 className="text-lg font-semibold text-[#004D47]">Recent</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-md"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-md font-semibold text-[#004D47]">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
