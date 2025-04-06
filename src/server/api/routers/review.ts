import {
  createTRPCRouter,
  publicProcedure,
} from "@food-savers/server/api/trpc";

// TODO: Implement review router
import {
  ReviewSchema
}from "@schemas/*";

export const reviewRouter = createTRPCRouter({
  create: publicProcedure
    .input(ReviewSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.create({ data: input });
    }),

  getOne: publicProcedure
    .input(ReviewSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.review.findUnique({ where: { id: input.id } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.review.findMany();
    }),

  update: publicProcedure
    .input(ReviewSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.update({ where: { id: input.id }, data: input });
    }),

  delete: publicProcedure
    .input(ReviewSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.delete({ where: { id: input.id } })
    }),
})