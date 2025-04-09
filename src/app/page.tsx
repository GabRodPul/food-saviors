import Map from "./_components/Map";

import { HydrateClient } from "@food-saviors/trpc/server";
export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col justify-center">
        <Map />
      </main>
    </HydrateClient>
  );
}
