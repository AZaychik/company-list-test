import { CompanyWithSelection } from '@entities/company/model/slice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Employee } from './types';
import { fetchedEmployees } from './dispatchers';

export interface EmployeeState {
  employees: Employee[];
  selectedEmployees: Record<string, Employee[]>;
  isLoading: boolean;
  error?: string;
}

export const initialState: EmployeeState = {
  employees: [],
  selectedEmployees: {},
  isLoading: false,
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selectedEmployees: (state, action: PayloadAction<CompanyWithSelection>) => {
      const { id, employeeIds } = action.payload;
      state.selectedEmployees[id] = state.employees.filter(employee => employeeIds.includes(employee.id));
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
