import { QueryOptionsForInfinityScroll } from "@shared/lib/types";

export type Company = {
  id: string;
  name: string;
  employeeIds: string[];
  address: string;
};

/** Параметры, необходимые для создания ограничений запроса для компаний. */
export interface CompanyQueryOptionsForInfinityScroll extends QueryOptionsForInfinityScroll<Company> {}
