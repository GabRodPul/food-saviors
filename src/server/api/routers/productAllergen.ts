import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

import {
  ProductAllergenSchema
} from "@schemas/*";

export const productAllergenRouter = createTRPCRouter({
  create: publicProcedure
    .input(ProductAllergenSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.productAllergen.create({ data: input });
    }),

  getByProductId: publicProcedure
    .input(ProductAllergenSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.productAllergen.findMany({ where: { productId: input.productId } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.productAllergen.findMany();
    }),

  updateByProductId: publicProcedure
    .input(ProductAllergenSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.productAllergen.updateMany({ where: { productId: input.productId }, data: input });
    }),

  deleteByProductId: publicProcedure
    .input(ProductAllergenSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.productAllergen.deleteMany({ where: { productId: input.productId } })
    }),
})
