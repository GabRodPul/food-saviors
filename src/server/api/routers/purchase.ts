import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

// TODO: Implement purchase router
import {
  PurchaseSchema
}from "@schemas/*";

export const purchaseRouter = createTRPCRouter({
  create: publicProcedure
    .input(PurchaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.purchase.create({ data: input });
    }),

  getOne: publicProcedure
    .input(PurchaseSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.purchase.findUnique({ where: { id: input.id } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.purchase.findMany();
    }),

  update: publicProcedure
    .input(PurchaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.purchase.update({ where: { id: input.id }, data: input });
    }),

  delete: publicProcedure
    .input(PurchaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.purchase.delete({ where: { id: input.id } })
    }),
})