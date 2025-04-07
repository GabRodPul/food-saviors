import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { IdSchema } from "@food-saviors/types/data/pkey";

import {
  ProductSchema
} from "@schemas/*";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(ProductSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({ data: input });
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findUnique({ where: { id: input.id } });
    }),

  getAllWhere: publicProcedure
    .input(ProductSchema.omit({ id: true }).partial())
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findMany({ where: input })
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.product.findMany();
    }),

  update: publicProcedure
    .input(ProductSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.update({ where: { id: input.id }, data: input });
    }),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete({ where: { id: input.id } })
    }),
})
