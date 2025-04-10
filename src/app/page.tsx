import Home from "src/app/_components/Home.tsx";
import { HydrateClient } from "@food-saviors/trpc/server";
export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col justify-center">
        <Home />
      </main>
    </HydrateClient>
  );
}
