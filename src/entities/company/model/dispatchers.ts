import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompanyService } from '../api';

export const fetchedCompanies = createAsyncThunk(
  'company/fetched',
  CompanyService.fetchCompanies
);
