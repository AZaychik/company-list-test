import { Statuses } from "./types";

export const statusesMap: Record<Statuses, Statuses> = {
  init: "init",
  loading: "loading",
  error: "error",
  success: "success",
};
