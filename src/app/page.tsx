import MainPage from "./MainPage/page";

import { HydrateClient } from "@food-saviors/trpc/server";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main>
        <MainPage />
      </main>
    </HydrateClient>
  );
}
//className="flex min-h-screen flex-col justify-center"
