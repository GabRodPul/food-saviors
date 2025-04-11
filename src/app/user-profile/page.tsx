"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "@food-saviors/trpc/react";
import type { User } from "@schemas/*";

const UserProfile: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const user = api.user.getOneById.useQuery({
    id: +searchParams.get("userId")!
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-screen-lg">
        <button
          onClick={() => router.push("/login")}
          className="mb-6 transition hover:opacity-70"
        >
          <Image
            src="/arrowback.svg"
            alt="Back to Login"
            width={20}
            height={20}
          />
        </button>

        {user.isLoading && (
          <div className="flex h-[50vh] items-center justify-center font-semibold text-[#004D47]">
            Loading...
          </div>
        )}
        {user.isError && (
          <div className="flex h-[50vh] items-center justify-center font-semibold text-red-600">
            {user.error.message}
          </div>
        )}
        {user.data && (
          <>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#004D47] p-6 text-4xl text-white">
                {userData?.userName.slice(0, 2).toUpperCase() ?? "UN"}
              </div>

              <p className="mt-4 text-xl font-semibold text-[#004D47]">
                Welcome {userData?.userName ?? "User"}
              </p>
            </div>

            <div className="my-6 text-center">
              <h2 className="text-2xl font-bold text-[#004D47]">
                See how much you have saved
              </h2>

              <div className="mt-4 flex flex-col items-center space-y-4">
                {[
                  { label: "Week", value: selectedWeek, set: setSelectedWeek },
                  {
                    label: "Month",
                    value: selectedMonth,
                    set: setSelectedMonth,
                  },
                  { label: "Year", value: selectedYear, set: setSelectedYear },
                ].map(({ label, value, set }) => (
                  <div key={label} className="w-56">
                    <label className="block text-sm font-semibold">
                      {label}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => set(e.target.value)}
                      className="mt-2 w-full rounded-md border border-[#009688] px-3 py-2 focus:ring-2 focus:ring-[#009688]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-lg font-semibold text-[#004D47]">Recent</h3>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {userData?.recentItems.length ? (
                  userData.recentItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-md"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-4 text-center">
                        <h4 className="text-md font-semibold text-[#004D47]">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No recent items found.
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
