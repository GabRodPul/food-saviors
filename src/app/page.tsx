import Home from "./_components/Home";

import { HydrateClient } from "@food-saviors/trpc/server";
export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Home />
      </main>
    </HydrateClient>
  );
}
