/**
 * @template T
 * @type { where: T }
 * Meant to be used for Prisma queries.
 */
export type Where<T> = { where: T };

/**
 * @template T
 * @param Object of type T
 * @return Object of type T wrapped in { where }
 */
export const where = <T>(where: T): Where<T> => ({ where });
