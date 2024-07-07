import { RootState } from "@app/store";

export const selectEmployees = (state: RootState) => state.employees.employees;

export const selectSelectedEmployees = (state: RootState) => state.employees.selectedEmployees;

export const selectEmployeesStatus = (state: RootState) => state.employees.status;
