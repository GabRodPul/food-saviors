import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@food-savers/server/api/trpc";

// TODO: Implement user router
throw new Error("[api.routers.user]: UNIMPLEMENTED");
export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      email: z.string().email(),
      name: z.string().min(1).max(64),
      dateOfBirth: z.string().date()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.db.user.create({ data: { ...input } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.user.findMany();
    })
})
