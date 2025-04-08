import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { IdSchema } from "@food-saviors/types/data/pkey";

// TODO: Implement purchase router
import {
  PurchaseSchema
} from "@schemas/*";

export const purchaseRouter = createTRPCRouter({
  create: publicProcedure
    .input(PurchaseSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.purchase.create({ data: input });
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.purchase.findUnique({ where: { id: input.id } });
    }),
  
  getAllWhere: publicProcedure
    .input(PurchaseSchema.omit({ id: true }).partial())
    .query(async ({ ctx, input }) => {
      return ctx.db.purchase.findMany({ where: input })
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
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.purchase.delete({ where: { id: input.id } })
    }),
})
