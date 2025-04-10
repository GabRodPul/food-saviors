import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { ImageFileSchema } from "@food-saviors/types/data/image-file";
import { IdSchema } from "@food-saviors/types/data/pkey";
import { where } from "@food-saviors/types/helpers/where";
import { f } from "@food-saviors/utils/files";

import {
  ProductSchema
} from "@schemas/*";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(ProductSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({ data: input });
    }),

  createWithImage: publicProcedure
    .input(ProductSchema.omit({ id: true }).merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const result = await f.uploadImage({
        file: input.image,
        name: `product_sId_${input.sellerId}_${Date.now()}`,
      });

      const { image, ...data } = input;
      return result.ok
        ? ctx.db.product.create({ data })
        : result.error;
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

  updateWithFile: publicProcedure
    .input(ProductSchema.merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const whereId = where({ id: input.id });
      const result = await f.uploadImage({
        file: input.image,
        name: `product_sId_${input.sellerId}_${Date.now()}`,
      });

      const { image, ...data } = input;
      return result.ok
        ? ctx.db.product.update({ ...whereId, data: { image: result.value.img.src } })
        : result.error;
    }),
  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete({ where: { id: input.id } })
    }),
})
