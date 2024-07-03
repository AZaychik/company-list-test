import { createSlice } from '@reduxjs/toolkit';
import { Company } from "./types";

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

  },
});

export const { reducer: companyReducer, actions: companyActions } = companySlice;

export default companySlice;
