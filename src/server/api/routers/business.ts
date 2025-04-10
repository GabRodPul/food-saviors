import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { ImageFileSchema } from "@food-saviors/types/data/image-file";
import { IdSchema } from "@food-saviors/types/data/pkey";
import { where } from "@food-saviors/types/helpers/where";
import { f } from "@food-saviors/utils/files";

// TODO: Implement business router
import {
  BusinessSchema
} from "@schemas/*";

export const businessRouter = createTRPCRouter({
  create: publicProcedure
    .input(BusinessSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.create({ data: input });
    }),

  createWithImage: publicProcedure
    .input(BusinessSchema.omit({ id: true }).merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const result = await f.uploadImage({
        file: input.image,
        name: `business_oId_${input.ownerId}_${Date.now()}`,
      });

      const { image, ...data } = input;
      return result.ok
        ? ctx.db.business.create({ data })
        : result.error;
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findUnique({ where: { id: input.id } });
    }),

  getAllWhere: publicProcedure
    .input(BusinessSchema.omit({ id: true }).partial())
    .query(async ({ ctx, input }) => {
      return ctx.db.business.findMany({ where: input })
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

  updateWithFile: publicProcedure
    .input(BusinessSchema.merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const whereId = where({ id: input.id });
      const result = await f.uploadImage({
        file: input.image,
        name: `business_oId_${input.ownerId}_${Date.now()}`,
      });

      const { image, ...data } = input;
      return result.ok
        ? ctx.db.business.update({ ...whereId, data: { image: result.value.img.src } })
        : result.error;
    }),


  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.business.delete({ where: { id: input.id } })
    }),
})
