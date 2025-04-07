import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { IdSchema } from "@food-saviors/types/data/pkey";

// TODO: Implement business router
import {
  BusinessSchema
} from "@schemas/*";

export const businessRouter = createTRPCRouter({
  create: publicProcedure
    .input(BusinessSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.create({ data: input });
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findUnique({ where: { id: input.id } });
    }),

  getAllWhere: publicProcedure
    .input(BusinessSchema.omit({ id: true }).partial())
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findMany({ where: input })
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.business.findMany();
    }),

  update: publicProcedure
    .input(BusinessSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.update({ where: { id: input.id }, data: input });
    }),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.delete({ where: { id: input.id } })
    }),
})
