"use client";

import dynamic from "next/dynamic";

// Dynamically import SimpleMap with SSR disabled
const SimpleMap = dynamic(() => import("./SimpleMap"), {
  ssr: false,
});

export default function ClientOnlyMap() {
  return <SimpleMap />;
}
