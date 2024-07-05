import companySlice from "@entities/company/model/slice";
import employeeSlice from "@entities/employee/model/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
