import { RootState } from "@app/store"

export const selectEmployees = (state: RootState) => state.companies.companies

export const selectEmployee = (state: RootState) => state.companies.selectedCompany