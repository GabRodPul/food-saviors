import {
  createTRPCRouter,
  publicProcedure,
} from "@food-savers/server/api/trpc";

import {
  ProductCreateArgsSchema,
  ProductDeleteArgsSchema,
  ProductFindUniqueArgsSchema,
  ProductUpdateArgsSchema
} from "@schemas/*";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(ProductCreateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create(input);
    }),

  getOne: publicProcedure
    .input(ProductFindUniqueArgsSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findUnique(input);
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.product.findMany();
    }),

  update: publicProcedure
    .input(ProductUpdateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.update(input);
    }),

  delete: publicProcedure
    .input(ProductDeleteArgsSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete(input)
    }),
})
