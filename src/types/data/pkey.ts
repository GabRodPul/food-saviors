import { z } from "zod"

type PKey = number;
export type Id = { id: PKey };
export type IdSchema = z.number().int();
