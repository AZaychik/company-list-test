import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Company } from "./types";
import { fetchedCompanies } from "./dispatchers";
import { Statuses } from "@shared/lib/types";
import { statusesMap } from "@shared/lib/constants";

export type CompanyWithSelection = Company & {
  selected: boolean;
};

export interface CompanyState {
  companies: CompanyWithSelection[];
  status: Statuses;
  hasNext: boolean;
}

export const initialState: CompanyState = {
  companies: [],
  status: statusesMap.init,
  hasNext: false,
};

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    selectCompanySelection: (state, action: PayloadAction<{ id: Company["id"]; toggle: boolean }>) => {
      const index = state.companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index].selected = action.payload.toggle;
      }
    },
    selectAllCompanies: state => {
      const allSelected = state.companies.every(company => company.selected);
      state.companies = state.companies.map(company => ({
        ...company,
        selected: !allSelected,
      }));
    },
    addCompany: (state, action: PayloadAction<CompanyWithSelection>) => {
      state.companies = [action.payload, ...state.companies];
    },
    removeCompany: (state, action: PayloadAction<Company["id"]>) => {
      state.companies = state.companies.filter(company => company.id !== action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchedCompanies.pending, state => {
        state.status = statusesMap.loading;
      })
      .addCase(fetchedCompanies.fulfilled, (state, action) => {
        state.status = statusesMap.success;
        state.hasNext = action.payload.hasNext;
        state.companies = action.payload.entities.map(company => ({
          ...company,
          selected: false,
        }));
      })
      .addCase(fetchedCompanies.rejected, (state, action) => {
        if (action.error.message) {
          state.status = statusesMap.error;
        }
      }),
});

export const { reducer: companyReducer, actions: companyActions } = companySlice;

export default companySlice;
