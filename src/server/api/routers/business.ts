import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

// TODO: Implement business router
import {
  BusinessSchema
}from "@schemas/*";

export const businessRouter = createTRPCRouter({
  create: publicProcedure
    .input(BusinessSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.create({ data: input });
    }),

  getOne: publicProcedure
    .input(BusinessSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findUnique({ where: { id: input.id } });
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
    .input(BusinessSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.delete({ where: { id: input.id } })
    }),
})