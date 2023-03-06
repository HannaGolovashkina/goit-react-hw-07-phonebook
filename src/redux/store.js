import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts-slice';
import { filterSlice } from './filter-slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});