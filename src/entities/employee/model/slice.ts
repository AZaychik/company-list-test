import { CompanyWithSelection } from "@entities/company/model/slice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Employee } from "./types";
import { fetchedEmployees } from "./dispatchers";
import { Statuses } from "@shared/lib/types";
import { statusesMap } from "@shared/lib/constants";

export interface EmployeeState {
  employees: Employee[];
  selectedEmployees: Record<string, Employee[]>;
  status: Statuses;
}

export const initialState: EmployeeState = {
  employees: [],
  selectedEmployees: {},
  status: statusesMap.init,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    selectedEmployees: (state, action: PayloadAction<CompanyWithSelection>) => {
      const { id, employeeIds } = action.payload;
      state.selectedEmployees[id] = state.employees.filter(employee => employeeIds.includes(employee.id));
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchedEmployees.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchedEmployees.fulfilled, (state, action) => {
        state.status = "success";
        state.employees = action.payload;
      })
      .addCase(fetchedEmployees.rejected, (state, action) => {
        if (action.error.message) {
          state.status = 'error';
        }
      }),
});

export const { reducer: employeeReducer, actions: employeeActions } = employeeSlice;

export default employeeSlice;
