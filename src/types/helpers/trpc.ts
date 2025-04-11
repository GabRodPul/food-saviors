import { PrismaClient } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";

export type TRPCContext = {
  headers: Headers;
  db: PrismaClient<{
    log: ("query" | "warn" | "error")[];
  }, never, DefaultArgs>;
};
