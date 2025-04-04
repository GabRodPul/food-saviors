import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

import {
  ProductSchema
} from "@schemas/*";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(ProductSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({ data: input });
    }),

  getOne: publicProcedure
    .input(ProductSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findUnique({ where: { id: input.id } });
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
    .input(ProductSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete({ where: { id: input.id } })
    }),
})
