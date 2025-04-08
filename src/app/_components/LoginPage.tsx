"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      // Redirect to /user-profile and pass userName in the URL as query
      router.push(`/user-profile?userName=${encodeURIComponent(username)}`);
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs">
        <button
          onClick={() => router.back()}
          className="mb-6 transition hover:opacity-70"
        >
          <img src="/arrowback.svg" alt="Back" className="h-5 w-5" />
        </button>

        <h1 className="mb-8 text-center text-3xl font-bold text-[#004D47]">
          Sign in
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#009688] py-2 font-semibold text-white transition hover:bg-[#00796B]"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account yet?{" "}
          <button
            className="font-bold text-[#004D47] hover:underline"
            onClick={() => router.push("/create-account")}
          >
            Create one.
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
