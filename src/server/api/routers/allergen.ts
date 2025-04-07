import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

// TODO: Implement allergen router
import {
  AllergenSchema
} from "@schemas/*";

export const allergenRouter = createTRPCRouter({
  create: publicProcedure
    .input(AllergenSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.allergen.create({ data: input });
    }),

  getByCode: publicProcedure
    .input(AllergenSchema.pick({ code: true }))
    .query(async ({ ctx, input }) => {
      return ctx.db.allergen.findUnique({ where: { code: input.code } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.allergen.findMany();
    }),

  update: publicProcedure
    .input(AllergenSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.allergen.update({ where: { code: input.code }, data: input });
    }),

  delete: publicProcedure
    .input(AllergenSchema.pick({ code: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.allergen.delete({ where: { code: input.code } })
    }),
})
