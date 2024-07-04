import { CompanyWithSelection } from '@entities/company/model/slice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Employee } from './types';
import { fetchedEmployees } from './dispatchers';

interface EmployeeState {
  employees: Employee[];
  selectedEmployees?: Employee[]
  isLoading: boolean;
  error?: string;
}

export const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
};


export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selectedEmployees: (state, action: PayloadAction<CompanyWithSelection>) => {
      state.selectedEmployees = [];
      state.selectedEmployees = state.employees.filter(employee => action.payload.employeeIds.includes(employee.id));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchedEmployees.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchedEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload
      })
      .addCase(fetchedEmployees.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
        state.isLoading = false;
      })
});

export const { reducer: employeeReducer, actions: employeeActions } = employeeSlice;

export default employeeSlice;
