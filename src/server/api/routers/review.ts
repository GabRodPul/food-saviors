import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { IdSchema } from "@food-saviors/types/data/pkey";

// TODO: Implement review router
import {
  ReviewSchema
} from "@schemas/*";

export const reviewRouter = createTRPCRouter({
  create: publicProcedure
    .input(ReviewSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.create({ data: input });
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.review.findUnique({ where: { id: input.id } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.review.findMany();
    }),

  getAllWhere: publicProcedure
    .input(ReviewSchema.omit({ id: true }).partial())
    .query(async ({ ctx, input }) => {
      return ctx.db.review.findMany({ where: input })
    }),

  update: publicProcedure
    .input(ReviewSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.update({ where: { id: input.id }, data: input });
    }),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.delete({ where: { id: input.id } })
    }),
})
