/** Является ли объект типом Object. */
export function isObject(value: unknown): value is object {
  return typeof value === "object";
}

/** Проверяет, определено ли значение. */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
