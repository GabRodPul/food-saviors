export namespace r {
  export type Ok<T> = { ok: true, value: T, error?: never };
  export type Err<E> = { ok: false, error: E, value?: never };
  export type Result<T, E> = Ok<T> | Err<E>;

  export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });
  export const err = <E>(error: E): Err<E> => ({ ok: false, error });
}
