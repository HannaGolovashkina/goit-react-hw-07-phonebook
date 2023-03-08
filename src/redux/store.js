import { configureStore } from '@reduxjs/toolkit';

import { contactsSlicer } from './contacts-slice';
import { filterSlicer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlicer.reducer,
    filter: filterSlicer.reducer,
  },
});