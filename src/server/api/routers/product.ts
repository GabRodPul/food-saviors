import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@food-savers/server/api/trpc";

export const productRouter = createTRPCRouter ({
    create: publicProcedure
    .input(z.object({ 
        name: z.string(),
        price: z.number(),
        stock: z.string(),
        expirationDate: z.date(),
        sellerId: z.number(),
    }))
    .mutation( async ({ ctx, input }) => {
        return ctx.db.product.create({ 
            data: { 
                name: input.name,
                price: input.price,
                stock: input.stock,
                expirationDate: input.expirationDate,
                sellerId: input.sellerId,   
            },
        });
    }),

    getOne: publicProcedure
    .input(z.object({
        id: z.number()
    }))
    .query(async ({ ctx, input }) => {
        const product = await ctx.db.product.findUnique({
            where: { id: input.id },
        });

        return product ?? null;
    }),

    getAll: publicProcedure
    .query(async ({ ctx }) => {
        const products = await ctx.db.product.findMany();

        return products;
    }),

    update: publicProcedure
    .input(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        stock: z.string(),
        expirationDate: z.date(),
        sellerId: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
        return ctx.db.product.update({
            where: { id: input.id },
            data: {
                name: input.name,
                price: input.price,
                stock: input.stock,
                expirationDate: input.expirationDate,
                sellerId: input.sellerId,
            }
        });
    }),
    
})