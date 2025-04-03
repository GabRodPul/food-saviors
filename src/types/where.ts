import { z } from "zod"

export type Where<T> = { where: T };
export const where = <T>(where: T): Where<T> => ({ where });
