import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { ImageFileSchema } from "@food-saviors/types/data/image-file";
import { IdSchema } from "@food-saviors/types/data/pkey";
import { where } from "@food-saviors/types/helpers/where";
import { f } from "@food-saviors/utils/files";

// TODO: Implement user router
import {
  UserSchema
} from "@schemas/*";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(UserSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({ data: input as any });
    }),

  getOneById: publicProcedure
    .input(IdSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUnique({ where: { id: input.id } });
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.user.findMany();
    }),

  update: publicProcedure
    .input(UserSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({ ...where({ id: input.id }), data: input });
    }),

  updateWithFile: publicProcedure
    .input(UserSchema.merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const whereId = where({ id: input.id });
      const result = await f.uploadImage({
        file: input.image,
        name: `user_${input.id}`,
      });

      const { image, ...data } = input;

      return result.ok
        ? ctx.db.user.update({ ...whereId, data: { image: result.value.img.src } })
        : result.error;
    }),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({ where: { id: input.id } })
    }),
})
