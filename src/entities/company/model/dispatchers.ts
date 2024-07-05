import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompanyService } from "../api";
import { CompanyQueryOptionsForInfinityScroll } from "./types";

export const fetchedCompanies = createAsyncThunk(
  "fetched/companyPageNextOf",
  async (options: CompanyQueryOptionsForInfinityScroll, thunkApi) => {
    try {
      return await CompanyService.fetchCompanies(options);
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
