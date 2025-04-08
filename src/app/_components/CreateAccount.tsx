"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CreateAccount: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs">
        <button
          onClick={() => router.back()}
          className="mb-6 transition hover:opacity-70"
        >
          <img src="/arrowback.svg" alt="Back" className="h-5 w-5" />
        </button>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#004D47]">
          Create Account
        </h1>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Username</label>
            <input
              type="text"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Mail</label>
            <input
              type="email"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#009688] py-2 font-semibold text-white transition hover:bg-[#00796B]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
