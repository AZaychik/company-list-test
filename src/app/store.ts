import { configureStore } from '@reduxjs/toolkit';
import companySlice from '@entities/company/model/slice';

export const store = configureStore({
  reducer: {
    companies: companySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;