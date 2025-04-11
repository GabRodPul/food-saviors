"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "@food-saviors/trpc/react";
import type { User } from "@prisma/client";

type Data = { user: Omit<User, "password">; token: string };

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [auth, setAuth] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = api.auth.login.useMutation({
    onSuccess: (data) => {
      setAuth(data.data);
      setError(null);

      router.push(
        `/user-profile?userName=${encodeURIComponent(data.data.user.id)}`,
      );
    },
    onError: (error) => {
      console.error("Login failed:", error);
      setError(error.message || "Invalid email or password");
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter valid credentials!");
      return;
    }

    login.mutate({ email: username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs">
        <button
          onClick={() => router.push("/")}
          className="mb-6 transition hover:opacity-70"
        >
          <Image
            src="/arrowback.svg"
            alt="Back to Home"
            width={20}
            height={20}
          />
        </button>

        <h1 className="mb-8 text-center text-3xl font-bold text-[#004D47]">
          Sign in
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Email</label>
            <input
              type="email"
              value=""
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <input
              type="password"
              value=""
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={login.isLoading}
            className="w-full rounded-md bg-[#009688] py-2 font-semibold text-white transition hover:bg-[#00796B] disabled:opacity-50"
          >
            {login.isLoading ? "Logging in..." : "Login"}
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
