import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Company } from "./types";
import { fetchedCompanies } from './dispatchers';

export type CompanyWithSelection = Company & {
  selected: boolean;
}

export interface CompanyState {
  companies: CompanyWithSelection[];
  selectedCompany?: CompanyWithSelection;
  isLoading: boolean;
  error?: string;
}

export const initialState: CompanyState = {
  companies: [],
  isLoading: false,
};

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    selectCompanySelection: (state, action: PayloadAction<Company["id"]>) => {
      const company = state.companies.find(company => company.id === action.payload);
      if (company) {
        company.selected = !company.selected;
      }
      state.selectedCompany = company;
    },
    selectAllCompanies: (state) => {
      const allSelected = state.companies.every(company => company.selected);
      state.companies = state.companies.map(company => ({
        ...company,
        selected: !allSelected,
      }));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchedCompanies.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchedCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = action.payload.map(company => ({
          ...company,
          selected: false,
        }));
      })
      .addCase(fetchedCompanies.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
        state.isLoading = false;
      })
});

export const { reducer: companyReducer, actions: companyActions } = companySlice;

export default companySlice;
