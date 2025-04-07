"use client";

import { useState } from "react";

import { api } from "@food-saviors/trpc/react";

export function Product() {
  const [product] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createProduct = api.product.create.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {product ? (
        <p className="truncate">Your most recent post: {product.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            name,
            price: 100,
            stock: 100,
            expirationDate: "2030-01-01"
          }
          // createProduct.mutate({ data });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createProduct.isPending}
        >
          {createProduct.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
