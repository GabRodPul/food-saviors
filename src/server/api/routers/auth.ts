import { env } from "@food-saviors/env";
import {
  createTRPCRouter,
  publicProcedure,
} from "@food-saviors/server/api/trpc";

import {
  UserSchema
} from "@schemas/*";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(UserSchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      try {
        const data = {
          ...input,
          password: await bcrypt.hash(input.password, 10),
        }
        const fullUser = await ctx.db.user.create({ data });
        const token = jwt.sign(fullUser, env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24 * 7 // One week
        });

        const { password, ...user } = fullUser;
        return { 
          status: "success",
          data: { user, token } 
        }
      } catch (err: any) {
        switch (err.code) {
          case "P2002":
            throw new TRPCError({
              code: "CONFLICT",
              message: `User with email ${input.email} already exists!`
            })

          default:
            throw err;
        }
      }
    }),

  login: publicProcedure
    .input(UserSchema.pick({ email: true, password: true }))
    .mutation(async ({ ctx, input }) => {
      try {
        const { email, password } = input;
        const user = await ctx.db.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid credentials"
          });
        }

        const token = jwt.sign(user, env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24 * 7 // One week
        });
        
        return { 
          status: "success",
          data: { user, token } 
        }
      } catch (err: any) {
        throw err;
      }
    })
})
