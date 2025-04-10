"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@food-saviors/trpc/react";
import { UserSchema } from "@schemas/*";

const CreateAccount: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string, email: string, password: string, confirmPassword: string,
    dateOfBirth: Date | null
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: null
  });
  const register = api.auth.register.useMutation({
    onSuccess: (result) => {
      localStorage.setItem("auth", JSON.stringify(result.data));
      router.push(
        `/user-profile?userId=${encodeURIComponent(result.data.user.id)}`,
      );
    }
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formSchema = UserSchema
      .omit({ id: true })
      .extend({
        confirmPassword: UserSchema.shape.password
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Password mismatch",
        path: ["confirmPassword"]
      });
    const result = formSchema.safeParse(user);
    if (!result.success) {
      console.error("Invalid user", user);
      return;
    }

    const { confirmPassword, ...data } = result.data;
    register.mutate(data);
  }

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
              onChange={(e) => setUser(({ ...user, name: e.target.value }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
              onChange={(e) => setUser(({ ...user, email: e.target.value }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">
              Date of birth
            </label>
            <input
              type="date"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
              onChange={(e) => setUser(({ ...user, dateOfBirth: new Date(e.target.value) }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
              onChange={(e) => setUser(({ ...user, password: e.target.value }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-[#009688] px-3 py-2 outline-none focus:ring-2 focus:ring-[#009688]"
              onChange={(e) => setUser(({ ...user, confirmPassword: e.target.value }))}
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
