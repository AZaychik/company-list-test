import { RootState } from "@app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCompanies = (state: RootState) => state.companies.companies;

export const selectCompaniesSelected = createSelector(
  (state: RootState) => state.companies.companies,
  companies => companies.filter(company => company.selected)
);

export const selectCompaniesStatus = (state: RootState) => state.companies.status;

export const selectOneCompanySelected = (state: RootState) =>
  state.companies.companies.some(company => company.selected);
export const selectHasNextPageOfCompany = (state: RootState) => state.companies.hasNext;
