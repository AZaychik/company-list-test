export interface InfinityScroll<T> {
  entities: T[];
  hasNext: boolean;
}

/** Любой объект с идентификатором. */
export interface Entity<T> {
  id: T extends { id: infer Id } ? Id : never;
}

/** Параметры, необходимые для построения ограничений запроса для бесконечной прокрутки. */
export interface QueryOptionsForInfinityScroll<T extends Entity<T>> {
  countOfEntities: number;
  lastVisibleEntity: T | null;
}

export type Statuses = "init" | "loading" | "error" | "success";
