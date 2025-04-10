import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";
import { ImageFileSchema } from "@food-saviors/types/data/image-file";
import { IdSchema } from "@food-saviors/types/data/pkey";
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
    .input(UserSchema.merge(ImageFileSchema.innerType()))
    .mutation(async ({ ctx, input }) => {
      const { image, ...user } = input;
      const file = image;
      return f.uploadFile({
        ctx,
        file,
        name: `user_${user.id}`,
        beforeUpload: [
          ctx.db.user.update({ where: { id: input.id }, data: input })
        ]
      });
    }),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({ where: { id: input.id } })
    }),
})
