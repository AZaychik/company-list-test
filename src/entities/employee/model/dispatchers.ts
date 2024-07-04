import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeeService } from '../api';

export const fetchedEmployees = createAsyncThunk(
  'company/fetched',
  EmployeeService.fetchEmployees
);
