import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Company } from "./types";
import { fetchedCompanies } from './dispatchers';

export type CompanyWithSelection = Company & {
  selected: boolean;
}

export interface CompanyState {
  companies: CompanyWithSelection[];
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
    selectCompanySelection: (state, action: PayloadAction<{ id: Company["id"], toggle: boolean }>) => {
      const index = state.companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index].selected = action.payload.toggle;
      }
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
